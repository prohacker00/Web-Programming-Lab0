// This moves the players accordingly 

module.exports.update = function (movement, object, bullet) {
    const cool = require('./cooldown.js')

    const jump = require('./jump')

    if(!movement.rightPressed && !movement.leftPressed) {
        object.direction = "still"
    }
    if (movement.rightPressed) {
        object.x += object.xSpeed
        bullet.leftOrRight = "right";
        object.direction = "right";
    }

    if (movement.leftPressed) {
        object.x -= object.xSpeed;
        bullet.leftOrRight = "left"
        object.direction = "left";

    }

    if (movement.upPressed) {
        object.inAir = true;
        object.floating = false
        if (!object.isFreeFalling) {
            jump.jump(object);
        }
    }

    if (movement.downPressed) {
        cool.cooldown(bullet , object);
    } 
}