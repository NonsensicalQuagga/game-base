import Enemy from "./Enemy";

export default class Boss extends Enemy{
    constructor(game){
        super(game)
        this.width = 50;
        this.height = 100;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = -0.5;
        this.lives = 20;
        this.scorePoints = 10000;
        this.color = '#0f0';
    }

}