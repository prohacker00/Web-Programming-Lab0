// This class contains a function to draw rectangles (which are used to represent the police and the criminal)

class drawRect {

    rectangle(ctx, model) {  
        ctx.fillStyle = model.color;
        ctx.fillRect(model.x,model.y,model.width,model.height);
        }

    
}



