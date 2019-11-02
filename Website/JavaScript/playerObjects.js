// Contains information about the objects used in the game

let GAME_WIDTH = canvas.getAttribute('width');
let GAME_HEIGHT = canvas.getAttribute('height');

const renderSpeed = 16.67;

var background = {
    x : 0,
    y : 0,
    width : GAME_WIDTH,
    height : GAME_HEIGHT,
    color : 'white'
}

var criminal = {
    x: 300,
    y: (GAME_HEIGHT - 150) - 100,
    width: 100,
    height: 100,
    color: 'red',
    xSpeed: 4,
    ySpeed: 0.25,       //Decreasing this makes the criminal more floaty
    originalGravity : 9.80865,      
    gravity: 9.80865,       // How far it can jump

}

var police = {
    x: 15,
    y: (GAME_HEIGHT - 150) - 100,
    width: 100,
    height: 100,
    color: 'blue',
    xSpeed: 4,
}

var platform = {
    x: 0,
    y: GAME_HEIGHT - 150,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "lightgreen",

}

var bullet = {
    x: police.x,
    y: police.y,
    width: 30,
    height: 10,
    color: 'yellow',
    speed: 6
}