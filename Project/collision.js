module.exports.collisions = function (criminal, police, platform, building, buildingTwo, middleBuild, middleBuildTwo) {


    // if (collide(criminal, bullet)) {

    //     bullet.y = 4000
    //     health--;
    //     if (health <= 0) {
    //         alert("You have been killed by the police! Refresh to play again!")
    //         return true
    //     }

    // }

    // Criminal 

    // Check if the criminal touches ANY platform, then proceeds to land the criminal
    // safely

    if (touches(criminal, platform)) {
        console.log("criminal touched the green platform")
        land(criminal, platform)

    }
    if (touches(criminal, building)) {
        console.log("criminal touched the red building")
        land(criminal, building)

    }
    if (touches(criminal, buildingTwo)) {
        console.log("criminal touched the vv red building")
        land(criminal, buildingTwo)
    }

    if (touches(criminal, middleBuild)) {
        console.log("criminal touched the big black building")
        land(criminal, middleBuild)
    }

    if (touches(criminal, middleBuildTwo)) {
        console.log("criminal touched the cc red building")
        land(criminal, middleBuildTwo)
    }

    // Checks if the criminal is not colliding with anything, this is to ensure that 
    // the criminal can freefall safely when it exists the boundaries of any platform
    // or building

    if (!collide(criminal, building) && !collide(criminal, buildingTwo) &&
     !collide(criminal, platform) && !collide(criminal,middleBuild) && 
     !collide(criminal,middleBuildTwo)) {
        criminal.inAir = true
        console.log("Not in air!")
        if (criminal.inAir && criminal.floating) {
            console.log("freefalling")
            fall(criminal);
        }
    }

    // Police

    if (touches(police, platform)) {
        land(police, platform)

    }
    if (touches(police, building)) {
        land(police, building)

    }
    if (touches(police, buildingTwo)) {
        land(police, buildingTwo)
    }

    if (touches(police, middleBuild)) {
        land(police, middleBuild)
    }

    if (touches(police, middleBuildTwo)) {
        land(police, middleBuildTwo)
    }

    if (!collide(police, building) && !collide(police, buildingTwo) && !collide(police, platform)) {
        police.inAir = true
    }

    function touches(object1, object2) {
        return ((Math.ceil(object1.y) + object1.height <= object2.y + 20) &&
                (object1.x >= object2.x || object1.x <= object2.x)) && collide(object1, object2) &&
            ((object1.gravity < 0) || object1.inAir)
    }

    function collide(object1, object2) {
        return object2.x <= (object1.x + object1.width) && (object2.x + object2.width) >=
            object1.x && (object2.y <= (object1.y + object1.height) && ((object2.y + object2.height) >= object1.y))
    }

    function land(object1, object2) {
        console.log("Landed!")
        object1.y = object2.y - object1.height;
        object1.gravity = object1.originalGravity;
        object1.upPressed = false;
        object1.updateUpPressed = true
        object1.inAir = false;
        object1.falling = 0;
    }

    function fall(object1) {
        object1.y += object1.falling;
        object1.falling += object1.ySpeed
    }
}

module.exports.b = function () {
    console.log("No!")
}