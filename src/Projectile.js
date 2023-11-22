export default class Projectile {

    constructor(game, x, y, speedX, speedY, damage, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.speedX = speedX;
        this.speedY = speedY;
        this.damage = damage;
        this.markedForDeletion = false;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > this.game.width) this.markedForDeletion = true;
    }

    draw(context) {
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}