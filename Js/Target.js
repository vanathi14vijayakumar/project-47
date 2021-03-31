class Target{
    constructor(x,y){
        this.x = x
        this.y = y
        
        this.body = createSprite(x,y,40,40)

    }
    level2Target(){
        
    }

    display(){
        
        if(player.body.isTouching(this.body)&&gameState == "play"){
            player.body.setVelocity(0,0)
            gameState = "play2"
            enemy .destroyMonsters()
            this.body.destroy();
            //level2Target()
            
        }
        drawSprites();

    }

}