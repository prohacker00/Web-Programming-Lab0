class objectSpeed {
    updateMovement() {
        if (rightPressed) {
            criminal.x += criminal.xSpeed;
    
        } else if (leftPressed) {
            criminal.x -= criminal.xSpeed;
        }
    
        if (policeRightPressed) {
            police.x += police.xSpeed;
        }
    
        if (policeLeftPressed) {
            police.x -= police.xSpeed;
        }
    
        if (policeSpacePressed) {
            bullet.x = bullet.x + 20
            bullet.y = police.y;
    
        }
    
        //Players speed decreases as they jump, hence enabling a gravity like effect
        if (upPressed) {
            criminal.y -= criminal.gravity;
            criminal.gravity -= criminal.ySpeed
    
            if (Math.ceil(criminal.y) >= 550) {
                upPressed = false;
                criminal.gravity = criminal.originalGravity;
                return;
            }
    
        }
    }
}