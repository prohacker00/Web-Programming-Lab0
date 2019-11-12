// Contains information about the objects used in the game


let GAME_WIDTH = canvas.getAttribute('width');
let GAME_HEIGHT = canvas.getAttribute('height');

const heightAdjust = 50
var lastUpdateTime = (new Date()).getTime();

var background = {
    x: 0,
    y: 0,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: 'white'
}

var platform = {
    x: 0,
    y: GAME_HEIGHT - heightAdjust,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "lightgreen",

}

var building = {
    x: (GAME_WIDTH / 2) - 300/2,
    y: 330,
    width : 300,
    height : 60,
    color : "red",
}

var buildingTwo = {
    x: (GAME_WIDTH / 2) + 150,
    y: 220,
    width : 300,
    height : 60,
    color : "red",
}

// var criminal = {
//     imageR: document.getElementById("crimR"),
//     imageL: document.getElementById("crimL"),
//     imageS: document.getElementById("crimS"),
//     width: 50,
//     height: 50,
//     x: 300,
//     y: platform.y - 50,
//     color: 'red',
//     xSpeed: 4.5,
//     ySpeed: 0.25,     //Decreasing this makes the criminal more floaty
//     originalGravity: 8,
//     gravity: 8,     // How far it can jump
//     inAir : false,
//     rightPressed : false,
//     leftPressed : false,
//     upPressed : false,
//     falling : 0,

// }

var criminal = {}

var criminalSprites = {
    imageR: document.getElementById("crimR"),
    imageL: document.getElementById("crimL"),
    imageS: document.getElementById("crimS"),
}

var criminalMove = {
    rightPressed : false,
    leftPressed : false,
    upPressed : false,
}

var police = {
    image: document.getElementById("poliR"),
    x: 15,
    y: (platform.y - 50),
    width: 50,
    height: 50,
    color: 'blue',
    xSpeed: 4.5,
    ySpeed: 0.25,    
    originalGravity: 8,
    gravity: 8,     
    inAir : false,
    rightPressed : false,
    leftPressed : false,
    upPressed : false,
    spacePressed : false,
    falling : 0,
}

var bullet = {
    x: 0,
    y: -400,
    width: 45,
    height: 6,
    color: 'black',
    speed: 20
}

var bulletTimer = 0;

var bulletAvailable = "A bullet is ready"

var bulletVSCriminal = false;

var newSpeed = criminal.xSpeed / 2

var health = 5;
