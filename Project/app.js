var {
    platform,
    floating_platforms,
    criminal
}  = require('./playerObjects.json')

var building = floating_platforms[0]
var buildingTwo = floating_platforms[1]

const express = require('express')
const socket = require('socket.io')

//App setup
const app = express();

let portNumber = 9999

// Creates a server at the designated port number. When the server
// is created, then a function is fired back

var server = app.listen(portNumber, () => {
    console.log("Listening to requests at port " + portNumber)
});

//Static files
app.use(express.static('client'))

// Socket setup
var io = socket(server);

io.on('connection', function (socket) {
    console.log(console.log("Made socket connection", socket.id))

    socket.on('criminalMove', function (data) {
        io.sockets.emit('send-criminalSpecs', criminal)
        if (data.rightPressed) {
            criminal.x += criminal.xSpeed;
            // console.log(criminal.x)

        } if (data.leftPressed) {
            criminal.x -= criminal.xSpeed;
            // console.log(criminal.x)

        }
        if (data.upPressed) {
            criminal.updateUpPressed = data.upPressed
            jump(criminal)
        }
        
        collisions()
    });

});

// setInterval(function () {
//     io.sockets.emit('send-criminalSpecs', criminal)
//     // console.log(criminal.upPressed)
//     collisions()
// }, 1000 / 60);


function jump(object1) {
    object1.inAir = false
    object1.y -= object1.gravity;
    object1.gravity -= object1.ySpeed

}

function collisions() {
    // if (collide(criminal, police)) {

    //     alert("You have been caught by the police! Refresh to play again!")
    //     return true

    // }

    // if (collide(criminal, bullet)) {

    //     bullet.y = 4000
    //     health--;
    //     if (health <= 0) {
    //         alert("You have been killed by the police! Refresh to play again!")
    //         return true
    //     }

    // }

    // Criminal 

    if (touches(criminal, platform)) {
        console.log("criminal touched the green platform")
        land(criminal, platform)

    }
    if (touches(criminal, building)) {
        console.log("criminal touched the red building")
        land(criminal, building)


    }
    if (touches(criminal, buildingTwo)) {
        console.log("criminal touched the second red building")
        land(criminal, buildingTwo)
    }

    if (!collide(criminal, building) && !collide(criminal, buildingTwo) && !collide(criminal, platform)) {
        criminal.inAir = true
        console.log("Not in air!")
        if (criminal.inAir && !criminal.updateUpPressed) {
            console.log("freefalling")
            fall(criminal, criminal.falling);
            }
    }

    // Police

    // if (touches(police, platform)) {
    //     land(police, platform)

    // }
    // if (touches(police, building)) {
    //     land(police, building)


    // }
    // if (touches(police, buildingTwo)) {
    //     land(police, buildingTwo)
    // }

    // if (!collide(police, building) && !collide(police, buildingTwo) && !collide(police, platform)) {
    //     police.inAir = true
    // }

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
    object1.updateUpPressed = !object1.updateUpPressed
    object1.inAir = false;
    object1.falling = 0;
    io.sockets.emit('updateUpPressed', object1.upPressed)

}

function touches(object1, object2) {
    return ((Math.ceil(object1.y) + object1.height <= object2.y + 20)  &&
            (object1.x >= object2.x || object1.x <= object2.x)) && collide(object1, object2) &&
        ((object1.gravity < 0) || object1.inAir)
} 

function fall(object1) {
        
    object1.y += object1.falling;
    object1.falling += object1.ySpeed

}