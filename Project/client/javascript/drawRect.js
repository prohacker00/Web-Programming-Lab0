// This class contains a function to draw rectangles and images

class drawRect {

    rectangle(ctx, model) {  
        ctx.fillStyle = model.color;
        ctx.fillRect(model.x , model.y  ,model.width , model.height);
    }

    image(ctx,img,model) {
    ctx.drawImage(img , model.x , model.y);

    }
}



