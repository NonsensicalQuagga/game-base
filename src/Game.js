import InputHandler from "./InputHandler";
import player from "./Player";
export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new InputHandler(this)
    this.keys = [];
    this.enemies = [];
    this.gameOver = false;
    this.gravity = 1;
    this.debug = false;

    this.player = new player(this);
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime;
    }
    this.player.update(deltaTime);
  }

  draw(context) {
    this.player.draw(context);
  }
}
