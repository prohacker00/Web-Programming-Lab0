// This is the method used to make the player jump

module.exports.jump =  function(object1) {
    object1.inAir = false
    object1.y -= object1.gravity;
    object1.gravity -= object1.ySpeed
}