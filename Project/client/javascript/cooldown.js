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

    if (policeSpacePressed) {

        bulletTimer += 1
        bullet.x += crimbullet.speed
        bulletAvailable = "Not available"
        if (bulletTimer > 100) {
            bulletAvailable = "Bullet is available!"
            bulletTimer = 0
            bulletTime = true;
            criminalMove.downPressed = false

        } 
    }
    }
