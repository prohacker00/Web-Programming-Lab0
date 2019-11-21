// This is basically the function which shoots the bullet , moves it and disables shooting until the cooldown period
// is completed

module.exports.cooldown = function (bullet, object) {
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