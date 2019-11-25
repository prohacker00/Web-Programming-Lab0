module.exports.collisions = function (player, police, platform, building, buildingTwo, middleBuild, middleBuildTwo, edgeOne, edgeTwo, bullet, crimbullet) {

    if (collide(player, bullet)) {

        player.health--;
        bullet.y = 4000
    }

    if (collide(police, bullet)) {

        police.health--;
        bullet.y = 4000
    }

    /* Check if the criminal touches ANY platform, then proceeds to land the criminal safely
    The touches here ensure the player objects can land safely when they touch a platform */

    if (touches(player, platform)) {
        console.log("criminal touched the puuuurple platform")
        land(player, platform)
    }
    if (touches(player, building)) {
        console.log("criminal touched the brown building")
        land(player, building)

    }
    if (touches(player, buildingTwo)) {
        console.log("criminal touched the yellow building")
        land(player, buildingTwo)
    }

    if (touches(player, middleBuild)) {
        console.log("criminal touched the big black building")
        land(player, middleBuild)
    }

    if (touches(player, middleBuildTwo)) {
        console.log("criminal touched the thin blue building")
        land(player, middleBuildTwo)
    }

    /* Checks if the criminal is not colliding with anything, this is to ensure that 
       the criminal can freefall safely when it exits the boundaries of any platform
       or building */

    if (!collide(player, building) && !collide(player, buildingTwo) &&
        !collide(player, platform) && !collide(player, middleBuild) &&
        !collide(player, middleBuildTwo) && player.floating) {
        player.inAir = true
        player.isFreeFalling = true
        console.log("Not in air!");

    }

    if (player.isFreeFalling) {

        console.log("freefalling")
        fall(player);

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
        police.isFreeFalling = true;
    }

    if (police.isFreeFalling) {
        fall(police);
    }


    if (player.x <= edgeOne.x) {
        player.x = 0;
    }

    if (police.x <= edgeOne.x) {
        police.x = 0;
    }

    if ((police.x + police.width) >= edgeTwo.x) {
        police.x = 1150 - (police.width)
    }

    if ((player.x + player.width) >= edgeTwo.x) {
        player.x = 1150 - (player.width)
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
        return (object1.x == (object2.width + object2.x) || (object1.x + object1.width) == object2.x)
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
        object1.isFreeFalling = false
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