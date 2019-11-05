class collision {

    collisions() {
        if (police.x < (criminal.x + criminal.width) && (police.x + police.width) > criminal.x && (police.y < (criminal.y + criminal.height) && ((police.y + police.height) > criminal.y))) {
            alert("You have been caught by the police! Refresh to play again!")
            return true;
            
        }
    }

}

 

