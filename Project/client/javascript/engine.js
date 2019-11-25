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
var picture2;

var playerOccupied = false;

var signDiv = document.getElementById('signDiv');
var game = document.getElementById('canvas-content');
var userName = document.getElementById('userName');
var passWord = document.getElementById('passWord');
var loginButton = document.getElementById('loginButton');
var signupButton = document.getElementById('signupButton');

loginButton.onclick = function () {

    socket.emit('login', {
        username: userName.value,
        password: passWord.value
    })

}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

socket.on('loginDetails', function (data) {

    if (data.success) {
        signDiv.style.display = 'none';
        game.style.display = '';
        alert("Successful sign in.");
        socket.emit('loggedIn');
    }
    else {
        alert("Incorrect Details");
    }

});

signupButton.onclick = function () {
    console.log(passWord.value + userName.value)
    socket.emit('signup', {
        username: userName.value,
        password: passWord.value
    })

}

socket.on('uniqueError', function (data) {
    if(data.success == true) {
        alert("New account created");
    }
    else {
        alert("User is already in the database");
    }

});

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

            console.log(player.direction)
            switch (player.direction) {
                case "still":
                    picture = criminalSprites.imageS
                    break;
                case "right":
                    picture = criminalSprites.imageR
                    break;

                case "left":
                    picture = criminalSprites.imageL;
                    break;

                default:
                    break;
            }


            dr.rectangle(ctx, bullet)
            dr.image(ctx, picture, player);
            dr.healthBarCriminal(ctx, player.health);

            // Game over for criminal

            if (player.health === 0) {
                dr.text(ctx, "Police won!")
                socket.emit('newGame', "police")
            }


            // If this is a policeman  
        } else if (player.color === "blue") {

            switch (player.direction) {
                case "still":

                    picture2 = policeSprites.imageS
                    break;
                case "right":

                    picture2 = policeSprites.imageR
                    break;

                case "left":

                    picture2 = policeSprites.imageL;
                    break;

                default:
                    break;
            }

            dr.rectangle(ctx, crimbullet);
            dr.healthBarPol(ctx, player.health);

            // Game over for police

            if (player.health === 0) {
                dr.text(ctx, "Criminals won!")
                socket.emit('newGame', "criminal")



            }

            dr.image(ctx, picture2, player);

        }

        socket.on('updateUpPressed', function (data) {
            playersMove.upPressed = data;
        })

        

        socket.on('updateDownPressed', function (data) {
            playersMove.downPressed = data;
        })
    }
})

setInterval(() => {
    socket.emit('playersMove', playersMove)
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