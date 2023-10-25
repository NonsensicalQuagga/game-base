import Enemy from "./Enemy";

export default class Boss extends Enemy{
    constructor(game){
        super(game)
        this.width = 50;
        this.height = 100;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = -0.5;
        this.lives = 25;
        this.scorePoints = 8000;
        this.color = '#089c54';
        this.collisionDamage = 5;
    }

}