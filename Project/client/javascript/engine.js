// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var socket = io.connect('http://localhost:9999')

const FPS = 60;
const renderSpeed = 1000 / FPS;

const dr = new drawRect();
const cd = new cooldown();

var score = 0;
var policeHealth = 5;
var criminalHeal = 5;

var picture;

var playerOccupied = false;

// var gameStart = setInterval(drawPlayers, renderSpeed);

// function drawPlayers() {

//     // Recieves data from the server about the player objects, the police and the criminal

//     // if (!playerOccupied) {
//     //     socket.on('send-criminalPlayer', (data) => {
//     //         playerNumber = data
//     //         playerOccupied = true
//     //     })
//     //     socket.on('send-policePlayer', (data) => {
//     //         playerNumber = data
//     //         playerOccupied = true
//     //     })

//     //     if(playerNumber === 1 || playerNumber === 2)
//     //     playerOccupied = true;
//     // }

//     // socket.on('send-policeSpecs', function (data) {
//     //     police = data;
//     // })



//     // Sets criminal OR police sprites to still when left nor right is pressed



//     // Score , health and bullet availability here.

//     score++;

//     document.getElementById("bullets").innerHTML = bulletAvailable;

//     // Draws the necessary objects, such as the players and the platforms

//     // Tells the server if an input is detected

//     // Because we don't have a keyUpHandler for jumping / shooting , because these operations require just a press
//     // to be executed 


//     socket.on('updateSpacePressed', function (data) {
//         policeMove.spacePressed = data;
//     })

//     socket.on('updateUpPressedPolice', function (data) {
//         policeMove.upPressed = data;
//     })

// }

socket.on('send-bulletSpecs', function (data) {
    bullet = data
})

socket.on('send-crimbulletSpecs', function (data) {
    crimbullet = data
})

// The main function

socket.on('send-criminalSpecs', function (data) {

    drawPlatforms();

    for (var id in data) {
        var player = data[id];

        // If this is a criminal

        if (player.color === "red") {
            picture = criminalSprites.imageS
            dr.rectangle(ctx, bullet)
            dr.healthBarCriminal(ctx, player.health);
            if (player.health === 0) {
                socket.emit('newGame', "police")
            }
            // If this is a policeman  

        } else if (player.color === "blue") {
            picture = policeSprites.imageS
            dr.rectangle(ctx, crimbullet);
            dr.healthBarPol(ctx, player.health);
            if (player.health === 0) {
                socket.emit('newGame', "criminal")
            }
        }

        dr.image(ctx, picture, player);

        socket.on('updateUpPressed', function (data) {
            criminalMove.upPressed = data;
        })

        socket.on('updateDownPressed', function (data) {
            criminalMove.downPressed = data;
        })
    }


})

setInterval(() => {
    socket.emit('playersMove', {
        criminal: criminalMove,
        police: policeMove
    })
}, 1000 / 60);

function drawPlatforms() {
    dr.imagecanvas(ctx, backgroundCanvas, 0, 0)
    dr.rectangle(ctx, building);
    dr.rectangle(ctx, middleBuild);
    dr.rectangle(ctx, buildingTwo);
    dr.rectangle(ctx, middleBuildTwo);
    dr.rectangle(ctx, edgeOne);
    dr.rectangle(ctx, edgeTwo);
    dr.image(ctx, boxcage, middleBuild);
    dr.image(ctx, metalP, middleBuildTwo);
    dr.rectangle(ctx, bullet);

    // Maps the platform images onto the floating platforms and base platform

    for (let index = 0; index < platform.width; index += 89) {
        platC.x = index;
        dr.image(ctx, platC.img, platC)
    }

    for (let index = 0; index < building.width - 50; index += 89) {
        floatPlat.x = building.x + index;
        floatPlat.y = building.y;
        dr.image(ctx, floatPlat.img, floatPlat)

    }

    for (let index = 0; index < buildingTwo.width - 50; index += 89) {
        floatPlatTwo.x = buildingTwo.x + index;
        floatPlatTwo.y = buildingTwo.y
        dr.image(ctx, floatPlatTwo.img, floatPlatTwo)
    }
}