import Projectile from "./Projectile";
export default class Gun {
    constructor(game) {
        this.fireRate = 0.1;
        this.shotgunAmmoFired = 0;
        this.shotgunReaload = false;
        this.pistolAmmoFired = 0;
        this.pistolReaload = false;
        this.beamAmmoFired = 0;
        this.beamReaload = 0;
        this.beamRealoadInterval = 150;
        this.canUseBeam = false;
        this.beamAmmunition = 0;
    }

    shoot() {
        if (this.gun === 1) this.pistol()
        else if (this.gun === 2) this.shotgun();
        else if (this.gun === 3) this.beam();
    }

    pistol() {
        if (this.game.gameTime * 0.001 > this.lastProjectile + this.fireRate && this.pistolAmmoFired < this.ammunition) {
            this.pistolAmmoFired++;
            if (this.pistolAmmoFired === 10) this.pistolReaload = true;
            this.lastProjectile = this.game.gameTime * 0.001;
            this.projectiles.push(
                new Projectile(this.game, this.x + this.width, this.y + this.height / 2, 5, 0, 2, 4, 4));
        }
        else if (this.pistolAmmoFired >= this.ammunition && this.pistolReaload) {
            setTimeout(() => { this.pistolAmmoFired = 0; }, this.realoadTime);
            this.pistolReaload = false;
        }
        //else if (!this.pistolReaload && this.game.gameTime * 0.001 > this.lastProjectile + 3) this.pistolReaload = true;


    }
    pistolStats() {
        this.ammunition = 10;
        this.realoadTime = 1000;
        this.fireRate = 0.1;
    }

    shotgun() {
        if (this.game.gameTime * 0.001 > this.lastProjectile + this.fireRate && this.shotgunAmmoFired < this.ammunition) {
            this.shotgunAmmoFired++;
            if (this.shotgunAmmoFired === 2) this.shotgunReaload = true;
            this.lastProjectile = this.game.gameTime * 0.001;
            /*this.projectiles.push(
                new Projectile(this.game, this.x + this.width, this.y + this.height/2, 5, 0, 0.2));*/

            for (let i = 0; i < 16; i++) {
                let spread = Math.random() * 4 - 2;
                let shotgunpellet = new Projectile(this.game, this.x + this.width, this.y + this.height / 2, Math.random() + Math.sqrt(25 - spread * spread), spread, 0.4, 4, 4); //Math.sqrt(5 * 5 - spread * spread)
                setTimeout(() => { shotgunpellet.markedForDeletion = true }, 1000)
                this.projectiles.push(shotgunpellet)
            }
        }
        else if (this.shotgunAmmoFired >= this.ammunition && this.shotgunReaload) {
            setTimeout(() => { this.shotgunAmmoFired = 0; }, this.realoadTime);
            this.shotgunReaload = false;
        }
       // else if (!this.shotgunReaload && this.game.gameTime * 0.001 > this.lastProjectile + 3) this.shotgunReaload = true;
    }

    shotgunStats() {
        this.ammunition = 2;
        this.realoadTime = 4000;
        this.bulletsFired = this.shotgunAmmoFired;
        this.fireRate = 0.05;
    }

    beam() {
        if (this.game.gameTime * 0.001 > this.lastProjectile + this.fireRate && this.beamAmmoFired < this.beamAmmunition) {
            this.beamAmmoFired++;
            this.lastProjectile = this.game.gameTime * 0.001;
            let beamPart = new Projectile(this.game, this.x + this.width, this.y + this.height / 4, 5, 0, 0.5, this.game.width, 30);
            setTimeout(() => { beamPart.markedForDeletion = true }, 1)
            this.projectiles.push(beamPart)

        }
    }

    beamStats() {
        this.bulletsFired = this.beamAmmoFired;
        this.fireRate = 0.01;
    }
}