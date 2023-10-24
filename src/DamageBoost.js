import Enemy from "./Enemy";

export default class DamageBoost extends Enemy{
    constructor(game){
        super(game)
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 20;
        this.height = 20;
        this.color = '#9f0';
        this.scorePoints = 10000;
        this.speedX = -3;
    }

    effect(){
        this.game.damageModifier = 2;
        setTimeout(() => damageModifier = 1, 30000)
    }
}