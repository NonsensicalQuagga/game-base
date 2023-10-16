import InputHandler from "./InputHandler";
import player from "./Player";
import UserInterface from "./UserInterface";
import Slime from "./Slime";
export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new InputHandler(this);
    this.ui = new UserInterface(this);
    this.keys = [];
    this.gameOver = false;
    this.gravity = 1;
    this.debug = false;
    this.gameTime = 0;

    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1000;

    this.player = new player(this);
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime;
    }
    this.player.update(deltaTime);

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }

    this.enemies.forEach((enemy) => enemy.update(deltaTime));
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
  }

  draw(context) {
    this.player.draw(context);
    this.ui.draw(context);
    this.enemies.forEach((enemy) => enemy.draw(context));
  }

  addEnemy() {
    this.enemies.push(new Slime(this))
  }

}
