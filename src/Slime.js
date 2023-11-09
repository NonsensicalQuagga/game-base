import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/ghostEnemy.png";
export default class Slime extends Enemy{
    constructor(game){
        super(game)
        this.width = 32;
        this.height = 32;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = Math.random() * -1.5 - 0.5;
        this.lives = 3;
        this.scorePoints = 100;
        this.color = '#0f0';
        this.hasSprite = true;

        const image = new Image();
        image.src = spriteImage;
        this.image = image;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 1;
        this.fps = 20;
        this.timer = 0;
        this.interval = 1000/this.fps;
        this.flip = false;
        this.walkingFrames = 1;
        this.walkingPosition = 0;
        this.idleFrames = 1;
        this.idlePosition = 0;
    }
    

}