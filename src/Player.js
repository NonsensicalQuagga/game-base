import Gun from "./Gun";
import spriteImage from "./assets/sprites/Idle Run (78x58).png";
export default class player extends Gun {
  constructor(game) {
    super(game);
    this.game = game;
    this.width = 78;
    this.height = 58;
    this.x = 50;
    this.y = 100;

    this.projectiles = []
    this.lastProjectile = this.game.gameTime;

    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 7;

    const image = new Image();
    image.src = spriteImage;
    this.image = image;

    this.frameX = 0;
    this.frameY = 1;
    this.maxFrame = 8;
    this.fps = 20;
    this.timer = 0;
    this.interval = 1000 / this.fps;
    this.flip = false;


  }

  update(deltaTime) {
    if (this.game.keys.includes('a') &&
      !(this.x <= 0)) this.speedX = -this.maxSpeed;
    else if (this.game.keys.includes('d') &&
      !(this.x + this.width >= this.game.width)) this.speedX = this.maxSpeed;
    else this.speedX = 0;

    if (this.game.keys.includes('w') &&
      !(this.y <= 0)) this.speedY = -this.maxSpeed;
    else if (this.game.keys.includes('s') &&
      !(this.y + this.height >= this.game.height)) this.speedY = this.maxSpeed;
    else this.speedY = 0;


    this.x += this.speedX;
    this.y += this.speedY;

    if (this.speedX !== 0) {
      this.frameY = 1;
      this.maxFrame = 8;
    } else {
      this.frameY = 0;
      this.maxFrame = 11;
    }

    if (this.game.keys.includes(' ')) this.shoot();

    this.projectiles.forEach(projectile => {
      projectile.update();
    });
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion)

    if (this.timer > this.interval) {
      this.frameX++;
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }

    // reset frameX when it reaches maxFrame
    if (this.frameX >= this.maxFrame) {
      this.frameX = 0;
    }
  }

  draw(context) {
    /* context.fillStyle = '#f00';
     context.fillRect(this.x, this.y, this.width, this.height);*/

    this.projectiles.forEach((projectile) => {
      projectile.draw(context);
    })

    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'black'
      context.font = '12px Arial'
      context.fillText(this.frameX, this.x, this.y - 5)
      context.fillText(this.grounded, this.x + 20, this.y - 5)
    }

    context.drawImage(
      this.image,
      this.frameX * this.width + 8,
      this.frameY * this.height + 14,
      this.width,
      this.height,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width * 2,
      this.height * 2
    )
  }



}