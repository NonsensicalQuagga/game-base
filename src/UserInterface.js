export default class UserInterface{
    constructor(game){
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Arial'
        this.color = 'white'
    }

    draw(context){
        context.save();
        context.fillStyle = this.color;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';

        context.textAlign = 'left';
        context.font = `${this.fontSize}px ${this.fontFamily}`
        context.fillText(
            `Time: ${(this.game.gameTime * 0.001).toFixed(1)}`,
            20,
            60
        );
        if(this.game.player.gun === 1) 
        context.fillText(  
          `Bullets: ${(this.game.player.ammunition - this.game.player.pistolAmmoFired)} / ${(this.game.player.ammunition)}`,
          20,
          90
      );
          else if(this.game.player.gun === 2){
            context.fillText(  
              `Shells: ${(this.game.player.ammunition - this.game.player.shotgunAmmoFired)} / ${(this.game.player.ammunition)}`,
              20,
              90
            );
          }
          else if(this.game.player.gun === 3){
            context.fillText(  
              `Energy: ${(this.game.player.beamAmmunition - this.game.player.beamAmmoFired)} / ${(this.game.player.beamAmmunition)}`,
              20,
              90
            );
          }
          else if(this.game.player.gun === 4){
            context.fillText(  
              `Bullets: ${(this.game.player.ammunition - this.game.player.assaultRifleAmmoFired)} / ${(this.game.player.ammunition)}`,
              20,
              90
            );
          }
          else if(this.game.player.gun === 5){
            context.fillText(  
              `Shells: ${(this.game.player.autoShotgunAmmo - this.game.player.autoShotgunAmmoFired)} / ${(this.game.player.autoShotgunAmmo)}`,
              20,
              90
            );
          }



        context.fillText(
          `Score: ${(this.game.score)}`,
          20,
          30
      );
      context.fillText(
        `hp: ${(this.game.life)}`,
        20,
        460
    );
    if(this.game.paused){
      context.textAlign = 'center'
      context.font = `50px ${this.fontFamily}`
      context.fillText(
          'Paused',
          this.game.width/2,
          this.game.height/2 -60
      );
      context.font = `20px ${this.fontFamily}`
      context.fillText(
          'Press p to start again.',
          this.game.width/2,
          this.game.height/2 -30
      );
      context.font = `20px ${this.fontFamily}`
      context.fillText(
          'Move with arrow keys.',
          this.game.width/2,
          this.game.height/2 
      );
      context.font = `20px ${this.fontFamily}`
      context.fillText(
          'Shoot with spacebar.',
          this.game.width/2,
          this.game.height/2 + 30
      );
      context.font = `20px ${this.fontFamily}`
      context.fillText(
          'Swap gun with q or e.',
          this.game.width/2,
          this.game.height/2 + 60 
      );}

        if(this.game.actuallyOver){
            context.textAlign = 'center'
            context.font = `50px ${this.fontFamily}`
            context.fillText(
                'Game Over',
                this.game.width/2,
                this.game.height/2 
            );
            context.font = `20px ${this.fontFamily}`
            context.fillText(
                'Press o to start again.',
                this.game.width/2,
                this.game.height/2 + 30 
            );
        }
        if (this.game.debug) {
            context.font = `15px Arial`
            context.textAlign = 'right'
            context.fillText(`x: ${this.game.player.x}`, this.game.width - 20, 25);
            context.fillText(`y: ${this.game.player.y}`, this.game.width - 20, 50);
            context.fillText(
              `speedX: ${this.game.player.speedX}`,
              this.game.width - 20,
              75
            );
            context.fillText(
              `speedY: ${this.game.player.speedY}`,
              this.game.width - 20,
              100
            );
            context.fillText(
              `maxSpeed: ${this.game.player.maxSpeed}`,
              this.game.width - 20,
              125
            );
            context.fillText(
              `damageboost: ${this.game.damageModifier}`,
              this.game.width - 20,
              150
            );
            context.fillText(`keys: ${this.game.keys}`, this.game.width - 20, 175);
          }
      
          context.restore();
    }
}