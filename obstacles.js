function obstacle() {
context.clearRect(0, 0, canvas.width, canvas.height)  
obstacles.forEach(o => {
o.x -= 1
context.fillRect(o.x, o.y, o.width, o.height);      
})
requestAnimationFrame(obstacle);  
}