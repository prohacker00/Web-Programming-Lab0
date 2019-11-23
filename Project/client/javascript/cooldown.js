class cooldown {

    bulletCooldown() {
        if (criminalMove.downPressed) {

            bulletTimer += 1
            crimbullet.x += crimbullet.speed
            bulletAvailable = "Not available"
            if (bulletTimer > 100) {
                bulletAvailable = "Bullet is available!"
                bulletTimer = 0
                bulletTime = true;
                criminalMove.downPressed = false

            } 
        }
    }

    bulletCooldown() {
        if (policeMove.spacePressed) {

            bulletTimer += 1
            crimbullet.x += crimbullet.speed
            bulletAvailable = "Not available"
            if (bulletTimer > 100) {
                bulletAvailable = "Bullet is available!"
                bulletTimer = 0
                bulletTime = true;
                policeMove.spacePressed = false

            } 
        }
    }
    }
