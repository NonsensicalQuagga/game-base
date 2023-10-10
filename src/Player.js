export default class player{
    constructor(game){
        this.game = game;
        this.width = 32;
        this.height = 64;
        this.x = 50;
        this.y = 100;

        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 10;
    }

    update(deltaTime){
        if (this.game.keys.includes('ArrowLeft') &&
        !(this.x < 0)) this.speedX = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowRight') &&
        !(this.x + this.width > this.game.width)) this.speedX = this.maxSpeed;
        else this.speedX = 0;

        if (this.game.keys.includes('ArrowUp') &&
        !(this.y < 0) ) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown') &&
        !(this.y + this.height > this.game.height)) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        
        
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context){
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}