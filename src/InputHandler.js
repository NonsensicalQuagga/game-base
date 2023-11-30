export default class InputHandler {
    constructor(game) {
        this.game = game
        window.addEventListener('keydown', (event) => {
            console.log(event.key)
            if ((event.key === 'ArrowUp' ||
                event.key === 'ArrowDown' ||
                event.key === 'ArrowLeft' ||
                event.key === 'ArrowRight' ||
                event.key === ' ') &&
                this.game.keys.indexOf(event.key) === -1)
                this.game.keys.push(event.key);

            //if (event.key === ' ') this.game.player.shoot();

            if (event.key === 'd') this.game.debug = !this.game.debug;
            
            if (event.key === 'p' && !this.game.actuallyOver) {
                this.game.paused = !this.game.paused;
                this.game.gameOver = !this.game.gameOver;
            }

            if (event.key === 'o' && !this.game.paused) {
                this.game.gameOver = !this.game.gameOver;
                this.game.actuallyOver = !this.game.actuallyOver;
                if (!this.game.gameOver) {
                    this.game.life = 3;
                    this.game.score = 0;
                    this.game.gameTime = 0;
                    this.game.enemies = [];
                    this.game.damageModifier = 1;
                    this.game.player.lastProjectile = 0;
                    this.game.player.projectiles = [];
                    this.game.player.x = 50;
                    this.game.player.y = 100;
                    this.game.player.shotgunAmmoFired = 0;
                    this.game.player.pistolAmmoFired = 0;
                    this.game.player.beamAmmoFired = 0;
                    this.game.player.beamAmmunition = 0;
                    this.game.player.gun = 1;
                    this.game.player.pistolStats();
                    this.game.player.canUseBeam = false;
                }
            }

            if (event.key === 'b') {
                this.game.addBoss();
                console.log("spawn boss")
            }
            if (event.key === 'n') {
                this.game.ghostRush();
                console.log("spawn ghost")
            }

            if (event.key === 'h') {
                this.game.addHealthPotion();
                console.log("spawn health potion")
            }

            if (event.key === 'j') {
                this.game.addDamageBoost();
                console.log("spawn damage boost")
            }
            if (event.key === 'k') {
                this.game.addBeam();
                console.log("spawn beam")
            }

            if (event.key === 'q') {
                if (this.game.player.gun === 1) {
                    this.game.player.gun = 2;
                    this.game.player.shotgunStats();
                }
                else if (this.game.player.gun === 2) {
                    this.game.player.gun = 1;
                    this.game.player.pistolStats();
                }
                else {
                    this.game.player.gun = 1;
                    this.game.player.pistolStats();
                }
                console.log("swap gun")
            }

            if (event.key === 'e') if (this.game.player.beamAmmoFired <= this.game.player.beamAmmunition - 10 && this.game.player.canUseBeam) {
                this.game.player.gun = 3;
                this.game.player.beamStats();
            }


        })
        window.addEventListener('keyup', (event) => {
            if (this.game.keys.indexOf(event.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(event.key), 1)
            }
        })
    }
}