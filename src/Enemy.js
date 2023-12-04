export default class Enemy {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.markedForDeletion = false;
        this.collisionDamage = 1;
        this.hasSprite = false;
    }

    update(deltaTime) {
        this.x += this.speedX;
        if (this.x < 0 && !this.healthPotion) {
            this.markedForDeletion = true;
            this.game.life -= this.collisionDamage;
            if (this.game.life <= 0){
                this.game.gameOver = true;
                this.game.actuallyOver = true;
            }
        }

        if (this.speedX < 0) {
            this.flip = true
        } else if (this.speedX > 0) {
            this.flip = false
        }
        if (this.timer > this.interval) {
            this.frameX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }

        if (this.speedX === 0) {
            this.frameY = this.idlePosition;
            this.maxFrame = this.idleFrames;
        } else {
            this.frameY = this.walkingPosition;
            this.maxFrame = this.walkingFrames;
        }
        if (this.frameX >= this.maxFrame) {
            this.frameX = 0;
        }

    }

    draw(context) {
        if (!this.hasSprite) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height)
        }
        else {
            if (this.flip) {
                context.save()
                context.scale(-1, 1)
            }
            context.drawImage(
                this.image,
                this.frameX * this.width + this.ofsetX,
                this.frameY * this.height + this.ofsetY,
                this.width,
                this.height,
                this.flip ? this.x * -1 - this.width : this.x,
                this.y,
                this.width * this.scale,
                this.height * this.scale
            )
            context.restore()
        }

        if (this.game.debug) {
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