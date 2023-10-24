import Enemy from "./Enemy";

export default class HealthPotion extends Enemy{
    constructor(game){
        super(game)
        this.collisionDamage = 2;
        this.lives = 3;
        this.x = game.width;
        this.y = 60;
        this.width = 20;
        this.height = 20;
        this.color = '#9f0';
        this.scorePoints = 1000;
        this.speedX = -3;
    }

    setXY(enemy) {
        this.x = enemy.x;
        this.y = enemy.y;
        this.speedX = enemy.speedX;
    }
}