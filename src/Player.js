import Projectile from "./Projectile";
export default class player{
    constructor(game){
        this.game = game;
        this.width = 32;
        this.height = 64;
        this.x = 50;
        this.y = 100;

        this.projectiles = []
        this.lastProjectile = this.game.gameTime;
        this.ammunition = 10;
        this.bulletsFired = 0;
        this.realoadTime = 1000;  //milliseconds
        this.canReaload = false;

        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 7;
        
    }

    update(deltaTime){
        if (this.game.keys.includes('ArrowLeft') &&
        !(this.x <= 0)) this.speedX = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowRight') &&
        !(this.x + this.width >= this.game.width)) this.speedX = this.maxSpeed;
        else this.speedX = 0;

        if (this.game.keys.includes('ArrowUp') &&
        !(this.y <= 0) ) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown') &&
        !(this.y + this.height >= this.game.height)) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        
        
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.game.keys.includes(' ')) this.shoot();

        this.projectiles.forEach(projectile => {
            projectile.update();
        });
        this.projectiles = this.projectiles.filter(
        (projectile) => !projectile.markedForDeletion)
    }

    draw(context){
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height);

        this.projectiles.forEach((projectile) => {
            projectile.draw(context);
          })
    }

    shoot(){
        if(this.game.gameTime * 0.001 > this.lastProjectile + 0.1 && this.bulletsFired < this.ammunition){
            this.bulletsFired++;
            this.canReaload = true;
            this.lastProjectile = this.game.gameTime * 0.001;
            this.projectiles.push(
                new Projectile(this.game, this.x + this.width, this.y + this.height/2));
        }
        else if (this.bulletsFired >= this.ammunition && this.canReaload){
            setTimeout(() => {this.bulletsFired = 0;}, this.realoadTime);
            this.canReaload = false;
        } 
    }

}