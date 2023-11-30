import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/ghostAnimation.png";
export default class Ghost extends Enemy {
    constructor(game) {
        super(game)
        this.width = 32;
        this.height = 30;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = Math.random() * -1.5 - 4;
        this.lives = 2;
        this.scorePoints = 1000;
        this.color = '#0f0';
        this.hasSprite = true;
        this.collisionDamage = 0.5;

        const image = new Image();
        image.src = spriteImage;
        this.image = image;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 9;
        this.fps = 9;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.flip = true;
        this.walkingFrames = 9;
        this.walkingPosition = 0;
        this.idleFrames = 9;
        this.idlePosition = 1;
        this.scale = 1.8;
        this.ofsetX = 0;
        this.ofsetY = 5;
    }


}