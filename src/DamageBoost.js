import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/pumpkinNemo.png";

export default class DamageBoost extends Enemy {
    constructor(game) {
        super(game)
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 32;
        this.height = 32;
        this.color = '#a135d4';
        this.scorePoints = 5000;
        this.speedX = -3;
        this.damageincrease = 0.5;
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
        this.game.damageModifier += this.damageincrease;
        setTimeout(() => { if (!(this.game.damageModifier <= 1)) { this.game.damageModifier -= this.damageincrease } }, 30000)
    }
}