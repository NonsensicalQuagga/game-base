import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/Sprites x2.png";
export default class Boss extends Enemy {
    constructor(game) {
        super(game)
        this.width = 63;
        this.height = 50;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = Math.random() * -0.5 - 0.7;
        this.lives = 3;
        this.scorePoints = 1000;
        this.color = '#089c54';
        this.collisionDamage = 1;
        this.hasSprite = true;

        const image = new Image();
        image.src = spriteImage;
        this.image = image;

        this.frameX = 0;
        this.frameY = 7;
        this.maxFrame = 1;
        this.fps = 4;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.flip = true;
        this.walkingFrames = 4;
        this.walkingPosition = 4;
        this.idleFrames = 4;
        this.idlePosition = 4;
        this.scale = 1;
        this.ofsetX = -7;
        this.ofsetY = 5;
    }

}