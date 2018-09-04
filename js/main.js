var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var gravity = 2;

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
  }

  draw() {
    if (this.x < -canvas.width) this.x = 0;
    ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image2,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

class Hero {
  constructor() {
    this.x = 10;
    this.y = 170;
    this.width = 60;
    this.height = 90;
    this.image0 = new Image();
    this.image0.src = "./images/hero/hero_stop.png";
    this.image1 = new Image();
    this.image1.src = "./images/hero/run/run1.png";
    this.image2 = new Image();
    this.image2.src = "./images/hero/run/run2.png";
    this.image3 = new Image();
    this.image3.src = "./images/hero/run/run3.png";
    this.image4 = new Image();
    this.image4.src = "./images/hero/run/run4.png";
    this.image5 = new Image();
    this.image5.src = "./images/hero/run/run5.png";
    this.image6 = new Image();
    this.image6.src = "./images/hero/run/run6.png";
    this.image7 = new Image();
    this.image7.src = "./images/hero/run/run7.png";
    this.image8 = new Image();
    this.image8.src = "./images/hero/run/run8.png";
    this.image9 = new Image();
    this.image9.src = "./images/hero/run/run9.png";
    this.image10 = new Image();
    this.image10.src = "./images/hero/run/run10.png";
    this.image11 = new Image();
    this.image11.src = "./images/hero/hero_up.png";
    this.image = this.image1;
    this.action = "stop";
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  draw() {
    switch (this.action) {
      case "stop":
        this.image = this.image0;
        break;
      case "see-up":
        this.image = this.image11;
        break;
      case "right":
        if (frames % 5 === 0) {
          switch (this.image) {
            case this.image1:
              this.image = this.image2;
              break;
            case this.image2:
              this.image = this.image3;
              break;
            case this.image3:
              this.image = this.image4;
              break;
            case this.image4:
              this.image = this.image5;
              break;
            case this.image5:
              this.image = this.image6;
              break;
            case this.image6:
              this.image = this.image7;
              break;
            case this.image7:
              this.image = this.image8;
              break;
            case this.image8:
              this.image = this.image9;
              break;
            case this.image9:
              this.image = this.image10;
              break;
            case this.image0:
            case this.image10:
              this.image = this.image1;
              break;
          }
        }
        break;
    }
    //console.log(this.action);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

//Instancias
var fondo = new Background();
var hero = new Hero();

//Helpers
function start() {
  interval = setInterval(update, 1000 / 60);
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw();
  hero.draw();
}

function gameOver() {
  clearInterval(interval);
  interval = undefined;
  ctx.font = "30px Avenir";
  ctx.fillText("Game Over", 190, 180);
}

function restart() {
  if (interval !== undefined) return;
  frames = 0;
  start();
}

addEventListener("keyup", function(e) {
  hero.action = "stop";
});

addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    //Ir izquierda
    case 37:
      hero.x > 10 ? (hero.x -= 5) : (hero.x = 10);
      break;
    //Mirar arriba
    case 38:
      hero.action = "see-up";
      break;
    //Ir derecha
    case 39:
      //Bajar escaleras
      if (hero.y < 440 && hero.x < 140) {
        hero.y += 10;
      }
      hero.x < canvas.width - hero.width
        ? (hero.x += 5)
        : (hero.x = canvas.width - hero.width);
      hero.action = "right";
      break;
    //Agacharse
    case 40:
      hero.action = "";
      break;
  }
});

start();
