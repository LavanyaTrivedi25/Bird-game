class Obstacle {

    constructor(x){

        this.body = createSprite(x,500)
        
        var rand = random([1,2])
        switch(rand){
            case 1 : this.body.addImage(obstacle1Image);
            this.body.scale = 0.7; break;
            case 2 : this.body.addImage(obstacle2Image);
            this.body.scale = 0.4; break;
        }
    }
}