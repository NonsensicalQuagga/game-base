import InputHandler from "./InputHandler";
import player from "./Player";
import UserInterface from "./UserInterface";
import Ghost from "./Ghost";
import Background from "./Background";
import Boss from "./Boss";
import HealthPotion from "./HealthPotion";
import DamageBoost from "./DamageBoost";
import BeamTime from "./BeamTime";
import Witch from "./Witch";
export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new InputHandler(this);
    this.ui = new UserInterface(this);
    this.background = new Background(this);
    this.keys = [];
    this.gameOver = true;
    this.actuallyOver = false;
    this.paused = true;
    this.gravity = 1;
    this.debug = false;
    this.gameTime = 0;
    this.score = 0;

    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 800;
    this.powerUps = [];

    this.player = new player(this);
    this.life = 3;
    this.damageModifier = 1;

    this.speed = 1;
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime;
      
      this.background.update();

    this.player.update(deltaTime);

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      let random = Math.random();
      if (random > 0.9) this.addBoss();
      else if (random > 0.85) this.ghostRush();
      else this.addWitch();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }

    this.powerUps.forEach((powerUp) => {
      powerUp.update(deltaTime);
      if (this.checkCollision(this.player, powerUp)) {
        powerUp.markedForDeletion = true;
        this.life += powerUp.collisionDamage;
        this.score -= powerUp.scorePoints;
        powerUp.effect();
      }
    });

    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime);
      if (this.checkCollision(this.player, enemy)) {
        if (enemy.lives - 20 * this.damageModifier <= 0)
          enemy.markedForDeletion = true;
        else enemy.lives -= 20 * this.damageModifier;
        this.life -= enemy.collisionDamage * this.damageModifier;
        this.score += enemy.scorePoints;
        if (this.life <= 0){
          this.gameOver = true;
          this.actuallyOver = true;
        } 
      }

      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          projectile.markedForDeletion = true;
          enemy.lives -= projectile.damage * this.damageModifier;
          if (enemy.lives <= 0) {
            if (Math.random() > 0.95) {
              let newPowerUp;
              let random = Math.random() * 9;
              if (random >= 0 && random < 5)
                newPowerUp = new HealthPotion(this);
              else if (random >= 5 && random < 8)
                newPowerUp = new DamageBoost(this);
              else if (random >= 8 && random <= 9)
                newPowerUp = new BeamTime(this);
              newPowerUp.setPosition(enemy);
              this.powerUps.push(newPowerUp);
            }
            enemy.markedForDeletion = true;
            this.score += enemy.scorePoints;
          }
        }
      });
    });
    
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    this.powerUps = this.powerUps.filter(
      (powerUp) => !powerUp.markedForDeletion
      );
    }
  }

  draw(context) {
    this.background.draw(context);
    this.player.draw(context);
    this.ui.draw(context);
    this.enemies.forEach((enemy) => enemy.draw(context));
    this.powerUps.forEach((enemy) => enemy.draw(context));
  }

  addGhost() {
    this.enemies.push(new Ghost(this));
  }

  addWitch() {
    this.enemies.push(new Witch(this));
  }

  addBoss() {
    this.enemies.push(new Boss(this));
  }

  addHealthPotion() {
    this.powerUps.push(new HealthPotion(this));
  }

  addDamageBoost() {
    this.powerUps.push(new DamageBoost(this));
  }

  addBeam() {
    this.powerUps.push(new BeamTime(this));
  }

  checkCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    );
  }

  ghostRush() {
    let random = Math.random() * 3 + 1;
    for (let i = 0; i < random; i++) {
      setTimeout(() => {
        this.addGhost();
      }, i * 200);
    }
  }
}
