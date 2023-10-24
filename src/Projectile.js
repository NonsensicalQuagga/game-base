export default class Projectile{
    constructor(game, x, y){
        this.game = game;
        this.width = 4;
        this.height = 4;
        this.x = x;
        this.y = y;

        this.speedX = 5;
        this.speedY = 0;
        this.damage = 1;
        this.markedForDeletion = false;
        this.damage = 1;

    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > this.game.width) this.markedForDeletion = true;
    }

    draw(context){
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}