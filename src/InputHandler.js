export default class InputHandler {
    constructor(game){
        this.game = game
        window.addEventListener('keydown', (event) => {
            console.log(event.key)
            if((event.key === 'ArrowUp' || 
            event.key === 'ArrowDown' || 
            event.key === 'ArrowLeft' ||
            event.key === 'ArrowRight' ||
            event.key === ' ') &&
            this.game.keys.indexOf(event.key) === -1)
            this.game.keys.push(event.key);
            
            //if (event.key === ' ') this.game.player.shoot();
            
            if (event.key === 'd') this.game.debug = !this.game.debug;

            if (event.key === 'o'){
                this.game.gameOver = !this.game.gameOver;
                if (!this.game.gameOver){ 
                    this.game.life = 3;
                    this.game.score = 0;
                    this.game.gameTime = 0;
                    this.game.enemies = [];
                    this.game.player.lastProjectile = 0;
                    this.game.player.bulletsFired = 0;
                    this.game.player.projectiles = [];
                    this.game.player.x = 50;
                    this.game.player.y = 100;
                }
            }
            
            if(event.key === 'b'){
                this.game.addBoss();
                console.log("spawn boss")
            }

            if(event.key === 'h'){
                this.game.addHealthPotion();
                console.log("spawn health potion")
            }

            if(event.key === 'j'){
                this.game.addDamageBoost();
                console.log("spawn damage boost")
            }

            if(event.key === 'q'){
                if(this.game.player.gun === 1) this.game.player.gun = 2;
                else this.game.player.gun = 1;
                console.log("swap gun")
            }

        })
        window.addEventListener('keyup', (event) => {
            if (this.game.keys.indexOf(event.key) > -1) {
              this.game.keys.splice(this.game.keys.indexOf(event.key), 1)
            }
        })   
    }
}