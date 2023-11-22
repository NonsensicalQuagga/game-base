import Enemy from "./Enemy";

export default class DamageBoost extends Enemy {
    constructor(game) {
        super(game)
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 20;
        this.height = 20;
        this.color = '#a135d4';
        this.scorePoints = 5000;
        this.speedX = -3;
        this.damageincrease = 0.5;
        this.lives = -69;
    }

    effect() {
        this.game.damageModifier += this.damageincrease;
        setTimeout(() => { if (!(this.game.damageModifier <= 1)) { this.game.damageModifier -= this.damageincrease } }, 30000)
    }
}