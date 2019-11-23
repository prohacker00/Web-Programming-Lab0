// Contains information about the objects used in the game


let GAME_WIDTH = canvas.getAttribute('width');
let GAME_HEIGHT = canvas.getAttribute('height');

const heightAdjust = 50

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
    color: "transparent"
}

var building = {
    x: (GAME_WIDTH / 2) - 440,
    y: 220,
    width: 276,
    height: 60,
    color: "brown",
}

var buildingTwo = {
    x: (GAME_WIDTH / 2) + 160,
    y: 220,
    width: 276,
    height: 60,
    color: "yellow",
}

var edgeOne = {
    x: 0,
    y: 0,
    width: 0,
    height: GAME_HEIGHT,
    color: "black",
}

var edgeTwo = {
    x: GAME_WIDTH,
    y: 0,
    width: 0,
    height: GAME_HEIGHT,
    color: "black",
}

var criminal = {}

var criminalSprites = {
    imageR: document.getElementById("crimR"),
    imageL: document.getElementById("crimL"),
    imageS: document.getElementById("crimS"),
}

var backgroundCanvas = document.getElementById("back")

var policeSprites = {
    imageR: document.getElementById("poliR"),
    imageL: document.getElementById("poliL"),
    imageS: document.getElementById("poliS"),
}

var metalP = document.getElementById("metalpl");
 var boxcage = document.getElementById("cagee");


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
    downPressed: false,
}

var policeMove = {
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
    spacePressed: false,
}

var police = {}

var bullet = {}

var crimbullet = {}

var bulletTimer = 0;

var bulletAvailable = "A bullet is ready"

var bulletVSCriminal = false;

var bulletVSCop = false;

var newSpeed = criminal.xSpeed / 2

var health = 5;

var criminalImageStatus;

var policeImageStatus;