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
    y: (GAME_HEIGHT - 145),
    width: 45,
    height: 45,
    color: 'red',
    xSpeed: 4,
    ySpeed: 0.25,       //Decreasing this makes the criminal more floaty
    originalGravity : 9.80865,
    gravity: 9.80865,       // How far it can jump

}

var police = {
    x: 15,
    y: (GAME_HEIGHT - 145) ,
    width: 45,
    height: 45,
    color: 'blue',
    xSpeed: 4,
}

var platform = {
    x: 0,
    y: GAME_HEIGHT - 100,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    color: "lightgreen",

}

var bullet = {
    x: police.x,
    y: police.y,
    width: 45,
    height: 6,
    color: police.color,
    speed: 6
}