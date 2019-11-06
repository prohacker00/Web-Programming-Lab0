class updateMovement extends collision {

    
    update() {
        if (criminal.rightPressed) {
            criminal.x += criminal.xSpeed;

        } else if (criminal.leftPressed) {
            criminal.x -= criminal.xSpeed;
        } 

        if (criminal.upPressed) {
            this.jump(criminal)
        } 

        if (criminal.inAir && !criminal.upPressed) {
        console.log("freefalling")
        this.fall(criminal, criminal.falling);
        } 

        // Police

        if (police.rightPressed) {
            police.x += police.xSpeed;

        }

        if (police.leftPressed) {
            police.x -= police.xSpeed;

        }

        if (policeSpacePressed) {
            bullet.x += bullet.speed;

        }

        if (police.upPressed) {
            this.jump(police)
        } 
        if (police.inAir && !police.upPressed) {
            console.log("freefalling")
            this.fall(police, police.falling);
            } 

    }

    jump(object1) {
        object1.inAir = false
        object1.y -= object1.gravity;
        object1.gravity -= object1.ySpeed

    } 


    fall(object1) {
        
        object1.y += object1.falling;
        object1.falling += object1.ySpeed

    }
}