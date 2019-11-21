class cooldown {

    bulletCooldown() {
        if (criminalMove.downPressed) {

            bulletTimer += 1
            bullet.x += bullet.speed
            bulletAvailable = "Not available"
            if (bulletTimer > 100) {
                bulletAvailable = "Bullet is available!"
                bulletTimer = 0
                bulletTime = true;
                criminalMove.downPressed = false

            } 
        }
    }
}