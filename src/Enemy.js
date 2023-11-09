export default class Enemy{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.markedForDeletion = false;
        this.collisionDamage = 1;
        this.hasSprite = false;
    }

    update(){
        this.x += this.speedX;
        if(this.x < 0 && !this.healthPotion){ 
            this.markedForDeletion = true;
            this.game.life -= this.collisionDamage;
            if(this.game.life <= 0) this.game.gameOver = true;
        }
        if (this.speedX !== 0) {
            this.frameY = this.idlePosition;
            this.maxFrame = this.idleFrames;
          } else {
            this.frameY = this.walkingPosition;
            this.maxFrame = this.walkingFrames;
          }

    }

    draw(context){
        if(!this.hasSprite){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height)}
        else{    
              context.drawImage(
                this.image,
                this.frameX * this.width,
                this.frameY * this.height,
                this.width,
                this.height,
                this.flip ? this.x * -1 - this.width : this.x,
                this.y,
                this.width ,
                this.height
              )
        }

        if(this.game.debug){
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.fillStyle = 'black'
            context.font = '20px Arial'
            context.fillText(this.lives, this.x, this.y - 5)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
        }
    }


    // for powerups 
    setPosition(enemy) {
        this.x = enemy.x;
        this.y = enemy.y;
        this.speedX = enemy.speedX;
    }
}