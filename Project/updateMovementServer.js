module.exports.update = function (movement, object) {
    const jump = require('./jump')
    if (movement.rightPressed) {
        object.x += object.xSpeed
    }

    if (movement.leftPressed) {
        object.x -= object.xSpeed;

    }

    if (movement.upPressed) {
        object.inAir = true;
        object.floating = false
        jump.jump(object);

    }
}