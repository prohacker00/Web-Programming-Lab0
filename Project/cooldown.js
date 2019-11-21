module.exports.cooldown = function (bullet, object) {
    // if (movement.downPressed) {
    //     console.log("Fire!")
    //     bullet.bulletTimer += 1
    //     bullet.x += bullet.speed
    //     if (bullet.bulletTimer > 100) {
    //         bullet.bulletTimer = 0
    //         bullet.bulletTime = true;
    //         movement.downPressed = false

    //     }
    // }

    if (bullet.bulletTimer <= 0) {
        bullet.x = object.x
        bullet.y = object.y + (object.height / 2)
    } 
        bullet.bulletTimer++;
        
        bullet.x += bullet.speed

        if (bullet.bulletTimer >= 100) {
            bullet.bulletTimer = 0
            bullet.bulletTime = true;
        }
    
}