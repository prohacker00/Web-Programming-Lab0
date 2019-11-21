// This is basically the function which shoots the bullet , moves it and disables shooting until the cooldown period
// is completed

module.exports.cooldown = function (bullet, object) {

    // Initialises the bullet. It only happens once per key press. Determines it's x and y coordinates and
    // Whether it should travel left or right depe
    var bulletMagnitude;
    if (bullet.bulletTimer <= 0) {

        bullet.x = object.x
        bullet.y = object.y + (object.height / 2)
        switch (bullet.leftOrRight) {
            case "left":
                console.log("Ur on the left!!!")
                bullet.speed = -Math.abs(bullet.speed)
                break;
            case "right":
                console.log("Ur on the right!")
                bullet.speed = Math.abs(bullet.speed)
                break;
            default:
                bulletMagnitude = bullet.speed
        }
    }


    bullet.bulletTimer++;

    bullet.x += bullet.speed

    if (bullet.bulletTimer >= 100) {
        bullet.bulletTimer = 0
        bullet.bulletTime = true;
    }

}