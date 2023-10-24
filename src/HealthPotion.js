import Enemy from "./Enemy";

export default class HealthPotion extends Enemy{
    constructor(game){
        super(game)
        this.collisionDamage = 2;
        this.x = game.width;
        this.y = 60;
        this.width = 20;
        this.height = 20;
        this.color = '#ba0202';
        this.scorePoints = 3000;
        this.speedX = -3;
    }
effect(){};
    
}