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
    this.image1 = new Image();
    this.image1.src = "./images/hero/run/run1.png";
    this.image2 = new Image();
    this.image2.src = "./images/hero/run/run2.png";
    this.image = this.image1;
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
  hero.image.src = "./images/hero/hero_stop.png";
});

addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    //Ir izquierda
    case 37:
      hero.x > 10 ? (hero.x -= 5) : (hero.x = 10);
      break;
    //Mirar arriba
    case 38:
      hero.image.src = "./images/hero/hero_up.png";
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
      hero.image.src = "./images/hero/hero_right.png";
      break;
    //Agacharse
    case 40:
      hero.image.src = "./images/hero/hero_down.png";
      break;
  }
});

start();
