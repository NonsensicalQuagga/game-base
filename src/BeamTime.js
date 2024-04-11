import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/pumpkinJosef.png";

export default class BeamTime extends Enemy {
    constructor(game) {
        super(game);
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 50;
        this.height = 50;
        this.color = '#08c9c3';
        this.scorePoints = 20000;
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
        this.ofsetX = 5;
        this.ofsetY = 10;
    }

    effect() {
        this.game.player.gun = 3;
        this.game.player.beamStats();
        this.game.player.canUseBeam = true;
        this.game.player.beamAmmunition += 100;
        this.game.player.autoShotgunAmmo += 30;
    }
}