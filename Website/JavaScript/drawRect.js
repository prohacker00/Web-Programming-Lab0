class drawRect {

drawRect(ctx, model) {  
    ctx.fillStyle = model.color;
    ctx.fillRect(model.x,model.y,model.width,model.height)
    }

}
