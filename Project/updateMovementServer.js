// function update(data) {
//         if (data.rightPressed) {
//             criminal.x += criminal.xSpeed;

//         } else if (data.leftPressed) {
            
//             criminal.x -= criminal.xSpeed;
//            }  

//         if (criminal.rightPressed || criminal.leftPressed) {
//         }

//         if (criminal.upPressed) {
//             this.jump(criminal)
//         } 

//         if (criminal.inAir && !criminal.upPressed) {
//         console.log("freefalling")
//         this.fall(criminal, criminal.falling);
//         } 

//         if (criminal.upPressed || criminal.inAir) {
            
        
//         }

//         // Police

//         if (police.rightPressed ) {
//             police.x += police.xSpeed;

//         }

//         if (police.leftPressed) {
//             police.x -= police.xSpeed;
//         }

//         if (policeSpacePressed) {
//             bullet.x += bullet.speed;
//         }

//         if (police.upPressed) {
//             this.jump(police)
//         } 
//         if (police.inAir && !police.upPressed) {
//             console.log("freefalling")
//             this.fall(police, police.falling);
//             } 

//     }

//     function jump(object1) {
//         object1.inAir = false
//         object1.y -= object1.gravity;
//         object1.gravity -= object1.ySpeed

//     } 

//     function fall(object1) {
        
//         object1.y += object1.falling;
//         object1.falling += object1.ySpeed

//     }


module.exports.update = function(movement , object) {
    const jump = require('./jump')
    if(movement.rightPressed) {
        object.x += object.xSpeed
    }

    if (movement.leftPressed) {
        object.x -= object.xSpeed;

    }

    if (movement.upPressed) {
        object.floating = false
        jump.jump(object);
        
    }
}