function collisions() {
    // if (this.collide(criminal, police)) {

    //     alert("You have been caught by the police! Refresh to play again!")
    //     return true

    // }

    if (this.collide(criminal, bullet)) {

        bullet.y = 4000
        health--;
        if (health <= 0) {
            alert("You have been killed by the police! Refresh to play again!")
            return true
        }

    }

    // Criminal 

    if (this.touches(criminal, platform)) {
        console.log("soeaszs")
        this.land(criminal, platform)

    }
    if (this.touches(criminal, building)) {
        this.land(criminal, building)


    }
    if (this.touches(criminal, buildingTwo)) {
        this.land(criminal, buildingTwo)
    }

    if (!this.collide(criminal, building) && !this.collide(criminal, buildingTwo) && !this.collide(criminal, platform)) {
        criminal.inAir = true
    }

    // Police

    if (this.touches(police, platform)) {
        this.land(police, platform)

    }
    if (this.touches(police, building)) {
        this.land(police, building)


    }
    if (this.touches(police, buildingTwo)) {
        this.land(police, buildingTwo)
    }

    if (!this.collide(police, building) && !this.collide(police, buildingTwo) && !this.collide(police, platform)) {
        police.inAir = true
    }



}

function collide(object1, object2) {
    return object2.x <= (object1.x + object1.width) && (object2.x + object2.width) >=
        object1.x && (object2.y <= (object1.y + object1.height) && ((object2.y + object2.height) >= object1.y))
}



function land(object1, object2) {
    console.log("Landed!")
    object1.y = object2.y - object1.width
    object1.gravity = object1.originalGravity;
    object1.upPressed = false;
    object1.inAir = false;
    object1.falling = 0

}


function touches(object1, object2) {
    return ((Math.ceil(object1.y) + object1.height <= object2.y + 20) &&
            (object1.x >= object2.x || object1.x <= object2.x)) && this.collide(object1, object2) &&
        ((object1.gravity < 0) || object1.inAir)
}