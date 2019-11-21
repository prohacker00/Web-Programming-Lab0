module.exports.update = function (movement, object, bullet) {
    const cool = require('./cooldown.js')


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
        if (!object.ugh) {
            jump.jump(object);
        }

    }

    if (movement.downPressed) {
        console.log("A bullet has been launched")
        cool.cooldown(bullet , object);

    }
}