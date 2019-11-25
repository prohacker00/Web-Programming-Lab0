// This is basically the function which shoots the bullet , moves it and disables shooting until the cooldown period
// is completed

// FYI the cooldown on the client is useless

module.exports.cooldown = function (bullet, object) {

    /* Initialises the bullet. It only happens once per key press. Determines it's x and y coordinates and
       Whether it should travel left or right depending on the last key that was pressed */
    var bulletMagnitude;
    if (bullet.bulletTimer <= 0) {
        bullet.x = object.x
        bullet.y = object.y + (object.height / 2)
        switch (bullet.leftOrRight) {
            case "left":
                bullet.x = object.x - 35
                bullet.speed = -Math.abs(bullet.speed)
                break;
            case "right":
                    bullet.x = object.x + 35
                bullet.speed = Math.abs(bullet.speed)
                break;
            default:
                bulletMagnitude = bullet.speed
        }
    }


    bullet.bulletTimer++;

    bullet.x += bullet.speed

    // When bullet.bulletTime becomes true, something is called in the app.js which basically stops the bullet
    // Movement

    if (bullet.bulletTimer >= 100) {
        bullet.bulletTimer = 0
        bullet.x = 4000
        bullet.y = 4000
        bullet.bulletTime = true;
    }

}