class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image1 = new Image();
    this.image1.src = "./images/background/cueva1.png";
    this.image2 = new Image();
    this.image2.src = "./images/background/cueva2.png";
    this.image3 = new Image();
    this.image3.src = "./images/background/cueva3.png";
    this.stage = this.image1;
  }

  gameOver() {
    setTimeout(gameOverMessage, 500);
  }

  draw(stage) {
    switch(stage) {
      case 1:
        this.stage = this.image1;
        break;
      case 2:
        this.stage = this.image2;
        break;
      case 3:
        this.stage = this.image3;
        break;
    }
    if (this.x < -canvas.width) this.x = 0;
    ctx.drawImage(this.stage, this.x, this.y, this.width, this.height);
  }
}

function gameOverMessage() {
  clearInterval(interval);
  interval = undefined;
  ctx.font = "50px Avenir";
  ctx.fillStyle = "white";
  ctx.fillText("Game Over", 190, 180);
}
