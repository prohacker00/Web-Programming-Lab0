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

var middleBuild = {
    x: (GAME_WIDTH / 2) - 70,
    y: -120 + platform.y,
    width: 140,
    height: 120,
    color: "black",
}

var middleBuildTwo = {
    x: (GAME_WIDTH / 2) - 140,
    y: 120,
    width: 280,
    height: 30,
    color: "blue",
}

var building = {
    x: (GAME_WIDTH / 2) - 450,
    y: 220,
    width: 300,
    height: 60,
    color: "brown",
}

var buildingTwo = {
    x: (GAME_WIDTH / 2) + 150,
    y: 220,
    width: 300,
    height: 60,
    color: "yellow",
}

var edgeOne = {
    x: 0,
    y: 0,
    width: 10,
    height: GAME_HEIGHT,
    color: "black",
}

var edgeTwo = {
    x: GAME_WIDTH - 10,
    y: 0,
    width: 10,
    height: GAME_HEIGHT,
    color: "black",
}

var criminal = {}

var criminalSprites = {
    imageR: document.getElementById("crimR"),
    imageL: document.getElementById("crimL"),
    imageS: document.getElementById("crimS"),
}

var policeSprites = {
    imageR: document.getElementById("poliR"),
    imageL: document.getElementById("poliL"),
    imageS: document.getElementById("poliS"),
}


var platC = {
    img: document.getElementById("plat"),
    x: 0,
    y: platform.y
}

var floatPlat = {
    img: document.getElementById("floating"),
    x: 0,
    y: 0,
}

var floatPlatTwo = {
    img: document.getElementById("floating"),
    x: 0,
    y: 0,
}

var criminalMove = {
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
}

var policeMove = {
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
    spacePressed: false,
}

var police = {
    // image: document.getElementById("poliR"),
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

var bulletVSCop = false;

var newSpeed = criminal.xSpeed / 2

var health = 5;

var criminalImageStatus;

var policeImageStatus;