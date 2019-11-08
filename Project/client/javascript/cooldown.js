class cooldown {

    bulletCooldown() {
        if (policeSpacePressed) {

            bulletTimer += 1
            bulletAvailable = "Not available"
            if (bulletTimer > 100) {
                bulletAvailable = "Bullet is available!"
                bulletTimer = 0
                bulletTime = true;
                policeSpacePressed = false

            } 
        }
    }
}