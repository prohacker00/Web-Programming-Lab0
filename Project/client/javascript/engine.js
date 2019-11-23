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

var gameStart = setInterval(drawPlayers, renderSpeed);

function drawPlayers() {

    // Recieves data from the server about the player objects, the police and the criminal

    socket.on('send-criminalPlayer', function(data) {
        playerNumber = data
    })

    socket.on('send-policeSpecs', function (data) {
        police = data
    })

    socket.on('send-criminalSpecs', function (data) {
        criminal = data
    })

    socket.on('send-bulletSpecs', function(data) {
        bullet = data
    })

    socket.on('send-crimbulletSpecs', function(data) {
        crimbullet = data
    })

    // Sets criminal OR police sprites to still when left nor right is pressed

    if (!criminalMove.leftPressed && !criminalMove.rightPressed) {
        criminalImageStatus = criminalSprites.imageS;
    }

    if (!policeMove.leftPressed && !policeMove.rightPressed) {
        policeImageStatus = policeSprites.imageS;
    }

    // Score , health and bullet availability here.

    score++;

    document.getElementById("bullets").innerHTML = bulletAvailable;

    // Draws the necessary objects, such as the players and the platforms

    
    dr.imagecanvas(ctx, backgroundCanvas, 0, 0)
    
    dr.rectangle(ctx, building);
    dr.rectangle(ctx, middleBuild);
    dr.rectangle(ctx, buildingTwo);
    dr.rectangle(ctx, middleBuildTwo);
    dr.rectangle(ctx, bullet);
    dr.rectangle(ctx, crimbullet);
    dr.rectangle(ctx, edgeOne);
    dr.rectangle(ctx, edgeTwo);
    
    dr.image(ctx, boxcage, middleBuild);
    dr.image(ctx, metalP, middleBuildTwo);

    dr.healthBarPol(ctx, police.health);
    dr.healthBarCriminal(ctx, criminal.health);

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

    dr.image(ctx, criminalImageStatus, criminal);
    dr.image(ctx, policeImageStatus, police);

    // Tells the server if an input is detected

    socket.emit('playersMove', {
        criminal: criminalMove,
        police: policeMove
    })

    // Because we don't have a keyUpHandler for jumping / shooting , because these operations require just a press
    // to be executed 

    socket.on('updateUpPressed', function (data) {
        criminalMove.upPressed = data;
    })

    socket.on('updateDownPressed', function (data) {
        criminalMove.downPressed = data;
    })

    socket.on('updateSpacePressed' , function(data) {
        policeMove.spacePressed = data;
    })

    socket.on('updateUpPressedPolice', function (data) {
        policeMove.upPressed = data;
    })

}