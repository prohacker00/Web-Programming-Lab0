// This class contains a function to draw rectangles and images

class drawRect {

    rectangle(ctx, model) {  
        ctx.fillStyle = model.color;
        ctx.fillRect(model.x , model.y  ,model.width , model.height);
    }

    image(ctx,img,model) {
    ctx.drawImage(img , model.x , model.y);
    }

    imagecanvas(ctx,img,x,y) {
        ctx.drawImage(img, x, y)
    }

    healthBarPol(ctx, health) {
        ctx.fillStyle="#FF0000";
        ctx.fillRect(20, 20, health*80, 20);
        
        }

    healthBarCriminal(ctx, health) {
        ctx.fillStyle="#FF0000";
        ctx.fillRect(730, 20, health*80, 20);
        
        }
}



