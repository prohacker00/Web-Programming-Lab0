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

    // The code above is for bullet collision detection. Still a work in progress...

    /* Check if the criminal touches ANY platform, then proceeds to land the criminal safely
    The touches here ensure the player objects can land safely when they touch a platform */

    if (touches(criminal, platform)) {
        console.log("criminal touched the puuuurple platform")
        land(criminal, platform)
    }
    if (touches(criminal, building)) {
        console.log("criminal touched the brown building")
        land(criminal, building)

    }
    if (touches(criminal, buildingTwo)) {
        console.log("criminal touched the yellow building")
        land(criminal, buildingTwo)
    }

    if (touches(criminal, middleBuild)) {
        console.log("criminal touched the big black building")
        land(criminal, middleBuild)
    }

    if (touches(criminal, middleBuildTwo)) {
        console.log("criminal touched the thin blue building")
        land(criminal, middleBuildTwo)
    }

    /* Checks if the criminal is not colliding with anything, this is to ensure that 
       the criminal can freefall safely when it exits the boundaries of any platform
       or building */

    if (!collide(criminal, building) && !collide(criminal, buildingTwo) &&
        !collide(criminal, platform) && !collide(criminal, middleBuild) &&
        !collide(criminal, middleBuildTwo) && criminal.floating) {
        criminal.inAir = true
        criminal.ugh = true
        console.log("Not in air!");

    }

    if (criminal.ugh) {

        console.log("freefalling")
        fall(criminal);

    }

    // For the police

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

    if (!collide(police, building) && !collide(police, buildingTwo) &&
        !collide(police, platform) && !collide(police, middleBuild) &&
        !collide(police, middleBuildTwo) && police.floating) {
        police.inAir = true;
        police.ugh = true;
    }

    if (police.ugh) {
        fall(police);
    }

    /* This function tells you whether an object touches another object (Note: this is different than collide)
       this will not return true if two objects are inside each other, this only tells you if a player is touching
       the top surface of another object (hence the name touches lmao) */

    function touches(object1, object2) {
        return ((Math.ceil(object1.y) + object1.height <= object2.y + 10) &&
                (object1.x >= object2.x || object1.x <= object2.x)) && collide(object1, object2) &&
            ((object1.gravity < 0) || object1.inAir)
    }

    function horizontalTouches(object1, object2) {
        return (object1.x == (object2.width + object2.x) || (object1.x + object1.width) == object2.x )
    }

    /* Collide tells you whether two objects are colliding. Will return true if two objects are inside each other.
       Think of it like a car collision */

    function collide(object1, object2) {
        return object2.x <= (object1.x + object1.width) &&
            (object2.x + object2.width) >= object1.x &&
            (object2.y <= (object1.y + object1.height) &&
                ((object2.y + object2.height) >= object1.y))
    }

    // Safely lands the player objects onto the desired platform, and disables some variables

    function land(object1, object2) {
        console.log("Landed!")
        object1.ugh = false
        object1.y = object2.y - object1.height;
        object1.gravity = object1.originalGravity;
        object1.floating = true;
        object1.upPressed = false;
        object1.updateUpPressed = true
        object1.inAir = false;
        object1.falling = 0;
    }

    /* Enables the player to freefall once they have exited a platform WITHOUT jumping. Note that once a player
    freefalls, they cannot jump */

    function fall(object1) {
        object1.y += object1.falling;
        object1.falling += object1.ySpeed
    }
}