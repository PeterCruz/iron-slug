class Shot {
  constructor() {
    this.x = hero.x + hero.width / 2;
    this.y = hero.y + hero.height / 2;
    this.width = 30;
    this.height = 5;
    this.image1 = new Image();
    this.image1.src = "./images/shot/shot.png";
    this.image2 = new Image();
    this.image2.src = "./images/shot/shot-izq.png";
    this.image3 = new Image();
    this.image3.src = "./images/shot/shot-up.png";
    this.image4 = new Image();
    this.image4.src = "./images/shot/shot-down.png";
  }

  getDirection() {
    switch (hero.side) {
      case "right":
        this.side = "right";
        break;
      case "left":
        this.side = "left";
        break;
      case "up":
        this.side = "up";
        break;
      case "down":
        this.side = "down";
        break;
    }
  }

  getProperties() {
    switch (this.side) {
      case "right":
        this.image = this.image1;
        this.x = hero.x + hero.width / 2 + 45;
        this.y = hero.y + hero.height * 0.4;
        this.width = 30;
        this.height = 5;
        break;
      case "left":
        this.image = this.image2;
        this.x = hero.x - 45;
        this.y = hero.y + hero.height * 0.4;
        this.width = 30;
        this.height = 5;
        break;
      case "up":
        this.image = this.image3;
        this.x = hero.x + hero.width / 2;
        this.y = hero.y - hero.height * 0.4;
        this.width = 5;
        this.height = 30;
        break;
      case "down":
        this.image = this.image4;
        this.x = hero.x + hero.width / 2 - 10;
        this.y = hero.y + hero.height + 20;
        this.width = 5;
        this.height = 30;
        break;
    }
  }

  draw() {
    let pixels = 25;
    if (frames % 10 == 0) {
      switch (this.side) {
        case "left":
          this.x -= pixels;
          break;
        case "right":
          this.x += pixels;
          break;
        case "down":
          this.y += pixels;
          break;
        case "up":
          this.y -= pixels;
          break;
      }
    }

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function generateShots() {
  let shot = new Shot();
  shot.getDirection();
  shot.getProperties();
  shots.push(shot);
}

function drawingShots() {
  shots.forEach(function(shot) {
    shot.draw();
  });
}
