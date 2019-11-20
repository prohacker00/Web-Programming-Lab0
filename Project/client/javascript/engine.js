// This file has the engine to start the game, which runs at 60 frames per second

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var socket = io.connect('http://localhost:9999')

const FPS = 60;

const renderSpeed = 1000 / FPS;

const dr = new drawRect();

const cd = new cooldown();

var score = 0;

var gameStart = setInterval(drawPlayers, renderSpeed);

function drawPlayers() {

    socket.on('send-policeSpecs' , function(data) {
        police = data
    })

    socket.on('send-criminalSpecs' , function(data) {
        criminal = data
    })

    if (!criminalMove.leftPressed && !criminalMove.rightPressed) {
        criminalImageStatus = criminalSprites.imageS;
    }

    if (!policeMove.leftPressed && !policeMove.rightPressed) {
        policeImageStatus = policeSprites.imageS;
    }

    score++;

    document.getElementById("score").innerHTML = Math.floor(score);

    document.getElementById("bullets").innerHTML = bulletAvailable;

    document.getElementById("health").innerHTML = health

    // myObjectSpeed.update();

    dr.rectangle(ctx, background)

    dr.rectangle(ctx, building)
    dr.rectangle(ctx, middleBuild)
    dr.rectangle(ctx, buildingTwo)
    dr.rectangle(ctx, middleBuildTwo)
    dr.rectangle(ctx, bullet)

    dr.rectangle(ctx, edgeOne)
    dr.rectangle(ctx, edgeTwo)


    dr.image(ctx, criminalImageStatus, criminal)
    dr.image(ctx, policeImageStatus, police)


    for (let index = 0; index < platform.width; index += 89) {
        platC.x = index;
        dr.image(ctx , platC.img, platC)
    }

    for (let index = 0; index < building.width; index += 89) {
        floatPlat.x = building.x + index;
        floatPlat.y = building.y;
        dr.image(ctx , floatPlat.img , floatPlat)
        
    }

    for (let index = 0; index < buildingTwo.width; index += 89) {
        floatPlatTwo.x = buildingTwo.x + index;
        floatPlatTwo.y = buildingTwo.y
        dr.image(ctx , floatPlatTwo.img , floatPlatTwo)
    }

    socket.emit('playersMove', {
        criminal : criminalMove,
        police : policeMove
    })

    socket.on('updateUpPressed', function(data) {
        criminalMove.upPressed = data;
    })

    socket.on('updateUpPressedPolice', function(data) {
        policeMove.upPressed = data
    })

    cd.bulletCooldown()

}