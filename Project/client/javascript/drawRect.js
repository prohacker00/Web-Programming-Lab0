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

        if (health == 5) {
            ctx.fillStyle = "#00FF00"
        }

        if (health == 4) {
            ctx.fillStyle = "#5EFF00"
        }

        if (health == 3) {
            ctx.fillStyle = "#F7FF00"
        }

        if (health == 2) {
            ctx.fillStyle = "#FFA200"
        }

        if (health == 1) {
            ctx.fillStyle = "#FF0000"
        }
        
        ctx.fillRect(20, 20, health*80, 20);
        
        }

    healthBarCriminal(ctx, health) {
        
        if (health == 5) {
            ctx.fillStyle = "#00FF00"
        }

        if (health == 4) {
            ctx.fillStyle = "#5EFF00"
        }

        if (health == 3) {
            ctx.fillStyle = "#F7FF00"
        }

        if (health == 2) {
            ctx.fillStyle = "#FFA200"
        }

        if (health == 1) {
            ctx.fillStyle = "#FF0000"
        }
        ctx.fillRect(730, 20, health*80, 20);
        
        }
}



