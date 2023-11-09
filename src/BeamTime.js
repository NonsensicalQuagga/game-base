import Enemy from "./Enemy";

export default class BeamTime extends Enemy{
    constructor(game){
        super(game);
        this.collisionDamage = 0;
        this.x = game.width;
        this.y = 60;
        this.width = 20;
        this.height = 20;
        this.color = '#08c9c3';
        this.scorePoints = 20000;
        this.speedX = -3;
        this.damageincrease = 0.5;
        this.lives = -69;
    }

    effect(){
        this.game.player.gun = 3;
        this.game.player.beamStats();
        this.game.player.canUseBeam = true;
        this.game.player.beamAmmunition += 100;
    }
}