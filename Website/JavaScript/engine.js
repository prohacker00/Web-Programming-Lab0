// Still not working, please refer to the drawplayers inside the index

class engine {
    drawPlayers() {

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

const drawRectangle = new drawRect();

        const drawRect = new drawRectangle();

    if (rightPressed) {
        criminal.x += 5;
       
    } else if (leftPressed) {
        criminal.x -= 5;
    }

    if (policeRightPressed) {
        police.x += 3.09;
    }

    if (policeLeftPressed) {
        police.x -= 3.09;
    }

    if (policeSpacePressed) {
        bullet.x = bullet.x + 20
        bullet.y = police.y;

    }


    //collision detection
    if (police.x < (criminal.x + criminal.width) && (police.x + police.width) > criminal.x && (police.y < (criminal.y + criminal.height) && ((police.y + police.height) > criminal.y))) {

        alert("You have been caught by the police! Refresh to play again!")
        clearInterval(gameStart)
    }

    //Players speed decreases as they jump, hence enabling a gravity like effect
    if (upPressed) {
        criminal.y -= criminal.gravity;
        criminal.gravity -= 0.2
        console.log(Math.ceil(criminal.y) + ' ' + criminal.gravity)

        if (Math.ceil(criminal.y) >= 550) {
            upPressed = false;
            criminal.gravity = 8
            return;
        }

    }

    drawRectangle.drawRect(ctx, 0, 0, GAME_WIDTH, GAME_HEIGHT, 'white')
    drawRectangle.drawRect(ctx, platform.x, platform.y, platform.width, platform.height, platform.color)
    drawRectangle.drawRect(ctx, criminal.x, criminal.y, criminal.width, criminal.height, criminal.color)
    drawRectangle.drawRect(ctx, police.x, police.y, police.width, police.height, police.color)
    drawRectangle.drawRect(ctx, bullet.x, bullet.y, 30, 20, 'yellow')

}

}