import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/garbageNotPixelArt.png";

export default class HealthPotion extends Enemy {
    constructor(game) {
        super(game)
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 40;
        this.height = 40;
        this.color = '#ba0202';
        this.scorePoints = 3000;
        this.speedX = -3;
        this.lives = -69;

        this.hasSprite = true;

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
        this.walkingFrames = 1;
        this.walkingPosition = 0;
        this.idleFrames = 9;
        this.idlePosition = 0;
        this.scale = 1;
        this.ofsetX = 0;
        this.ofsetY = 0;
    }
    effect() {
        this.game.life += 2;
    }

}