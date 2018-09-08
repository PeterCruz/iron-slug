var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var gravity = 0.05;
var keys = {};
var maxMummies = 1;
var shots = [];

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
  generateMummies();
  drawingMummies();
  drawingShots();
}

function restart() {
  if (interval !== undefined) return;
  frames = 0;
  start();
}

addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
  if (hero.side == "left") {
    hero.action = "stop-left";
    return;
  }
  //NOTA AQUI DEBE REGRESAR AL ESTADO INMEDIATO ANTERIOR
  hero.action = "stop";
});

addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
  //Saltar
  if (keys[32]) {
    hero.vx = 0;
    //Evitar que se salga de la pantalla
    if (hero.y > 200) {
      hero.y -= 250;
      hero.jump = true;
    }
  }
  // Saltar, apuntar abajo y disparar
  if (keys[32] && keys[40] && keys[83]) {
    hero.action = "shot-down";
    generateShots();
    return;
  }
  //Disparar arriba
  if (keys[38] && keys[83]) {
    generateShots();
    if (hero.side == "left") {
      hero.action = "shot-up-left";
      return;
    }
    hero.action = "shot-up-right";
    return;
  }
  //Ir izquierda
  if (keys[37]) {
    hero.x > 10 ? (hero.x -= 5) : (hero.x = 10);
    hero.action = "left";
  }
  //Mirar arriba
  if (keys[38]) {
    if (hero.side == "left") {
      hero.action = "see-up-left";
      return;
    }
    hero.action = "see-up";
  }
  //Ir derecha
  if (keys[39]) {
    //Bajar escaleras
    if (hero.y < 440 && hero.x < 140) {
      hero.y += 10;
    }
    hero.x < canvas.width - hero.width
      ? (hero.x += 5)
      : (hero.x = canvas.width - hero.width);
    hero.action = "right";
  }
  //Saltar y avanzar derecha
  if (keys[32] && keys[39]) {
    if (hero.jump) {
      hero.x < canvas.width - hero.width
        ? (hero.vx = 3)
        : (hero.x = canvas.width - hero.width);
      return;
    }
  }
  //Saltar y avanzar izquierda
  if (keys[32] && keys[37]) {
    if (hero.jump) {
      hero.x > 10 ? (hero.vx = -3) : (hero.x = 10);
      return;
    }
  }
  //Disparar
  if (keys[83]) {
    if (hero.side == "left") {
      generateShots();
      //Disparo detenido
      if (!keys[37] && !keys[39]) {
        hero.action = "stop-shot-left";
        return;
      }
      hero.action = "shot-left";
      return;
    }
    generateShots();
    //Disparo detenido
    if (!keys[37] && !keys[39]) {
      hero.action = "stop-shot-right";
      return;
    }
    hero.action = "shot-right";
  }
});

start();
