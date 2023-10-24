import InputHandler from "./InputHandler";
import player from "./Player";
import UserInterface from "./UserInterface";
import Slime from "./Slime";
import Background from "./Background";
import Boss from "./Boss";
import HealthPotion from "./HealthPotion";
export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new InputHandler(this);
    this.ui = new UserInterface(this);
    this.background = new Background(this);
    this.keys = [];
    this.gameOver = false;
    this.gravity = 1;
    this.debug = false;
    this.gameTime = 0;
    this.score = 0;

    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1300;
    this.powerUps = [];

    this.player = new player(this);
    this.life = 3;

    this.speed = 1
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime;
    }

    this.background.update();

    this.player.update(deltaTime);

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      let random = Math.random()
      if(Math.random() > 0.9){
        this.addBoss();
        console.log("Boss time")
      } 
        else this.addSlime();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }

    this.powerUps.forEach((powerUp) =>  {
      powerUp.update(deltaTime)
      if(this.checkCollision(this.player, powerUp)){  
        powerUp.markedForDeletion = true;
        this.life -= powerUp.collisionDamage;
        this.score += powerUp.scorePoints;
      }
    })

    this.enemies.forEach((enemy) =>  {
      enemy.update(deltaTime)
      if(this.checkCollision(this.player, enemy)){ 
        
        if(enemy.lives - 20 <= 0)  enemy.markedForDeletion = true;
        else enemy.lives -= 20;
        this.life -= enemy.collisionDamage;
        this.score += enemy.scorePoints;
        if(this.life <= 0) this.gameOver = true;
      }
      
      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          projectile.markedForDeletion = true;
          enemy.lives -= projectile.damage;
          if(enemy.lives <= 0){
            enemy.markedForDeletion = true;
            this.score += enemy.scorePoints;
          } 
          
        }
      });
    });

    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    this.powerUps = this.powerUps.filter((powerUp) => !powerUp.markedForDeletion);
  }

  draw(context) {
    this.background.draw(context);
    this.player.draw(context);
    this.ui.draw(context);
    this.enemies.forEach((enemy) => enemy.draw(context));
    this.powerUps.forEach((enemy) => enemy.draw(context));
  }

  addSlime() {
    this.enemies.push(new Slime(this))
  }

  addBoss(){
    this.enemies.push(new Boss(this))
  }

  addHealthPotion(){
    this.powerUps.push(new HealthPotion(this))
  }

  checkCollision(object1, object2){
    return(
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    )
  }

}
