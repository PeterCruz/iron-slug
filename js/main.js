var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var gravity = 0.05;
var keys = {};
var maxMummies = 3;
var shots = [];
var stage = 1;
var isMusicOff = true;

//Sounds
var misionMusic = new Audio();
misionMusic.src = "./music/mision.mp3";
var startMusic = new Audio();
startMusic.src = "./music/start.mp3";
var completedMusic = new Audio();
completedMusic.src = "./music/completed.mp3";
var gameOverMusic = new Audio();
gameOverMusic.src = "./music/game-over.mp3";
var heroDeadMusic = new Audio();
heroDeadMusic.src = "./music/hero-dead.mp3";
var shotMusic = new Audio();
shotMusic.src = "./music/shot.mp3";

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
  fondo.draw(stage);
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

function checkHeroIsDead() {
  if(hero.image == hero.image43 || hero.image == hero.image45) {
    misionMusic.pause();
    gameOverMusic.play();
    clearInterval(interval);
    interval = undefined;
    setTimeout(function(){
      ctx.drawImage(fondo.image4, 0, 0, canvas.width, canvas.height);
    }, 1800);
  }
}

addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
  if (hero.side == "left") {
    hero.action = "stop-left";
    return;
  }
  if(!keys[83]) {
    shotMusic.pause();
  }
  //NOTA AQUI DEBE REGRESAR AL ESTADO INMEDIATO ANTERIOR
  hero.action = "stop";
});

addEventListener("keydown", function(e) {
  if (isMusicOff) {
    startMusic.play();
    misionMusic.play();
    isMusicOff = false;
  }
  keys[e.keyCode] = true;
  //Reiniciar el juego
  if (keys[82]) {
    location.reload();
  }
  //Bloquear cualquier movimiento si ya fue atrapado
  if (hero.isDead) return;
  //Saltar y bloquear que no haya dobles saltos
  if (keys[32] && hero.jump == false) {
    hero.vx = 0;
    //Subir a la primer piedra
    //Solo cuando este en stop y abajo de la piedra
    if (
      stage == 1 &&
      hero.x > 1070 &&
      hero.x < 1160 &&
      hero.y <= 445 &&
      hero.y >= 260 &&
      hero.location != "first-rock"
    ) {
      hero.limitToJump = 260;
      hero.jump = true;
      hero.location = "first-rock";
      return;
    }

    //Evitar que se salga de la pantalla
    if (hero.y > 200) {
      switch(stage) {
        case 1:
        break;
        case 2:
        case 3:
        let temp = hero.y;
        hero.jump = true;
        hero.limitToJump = temp;
        break;
      }
      hero.y -= 250;
      hero.jump = true;
    }
  }
  // Saltar, apuntar abajo y disparar
  if (keys[32] && keys[40] && keys[83]) {
    shotMusic.play();
    hero.action = "shot-down";
    generateShots();
    return;
  }
  //Disparar arriba
  if (keys[38] && keys[83]) {
    shotMusic.play();
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
    if (hero.x > 10) {
      hero.x -= 5;
      //Avanzar en segundo escenario
      if (stage == 2) {
        if (hero.x > 240) hero.y += 1;
      }
      //Avanzar en tercer escenario
      if (stage == 3) {
        (hero.x > 860 && hero.x < 1045) ? hero.y += 3 : hero.y += 1;
      }
    } else {
      hero.x = 10;
    }
    hero.action = "left";

    //Caerse de la piedra
    if (hero.location == "first-rock" && hero.x >= 1018 && hero.x < 1023) {
      hero.jump = true;
      hero.limitToJump = 430;
      hero.location = "floor";
    }
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
    if (stage == 1 && hero.y < 440 && hero.x < 140) {
      hero.y += 10;
    }
    if (hero.x < canvas.width - hero.width) {
      hero.x += 5;
      //Avanzar en segundo escenario
      if (stage == 2) {
        if (hero.x > 240) hero.y -= 1;
      }
      //Avanzar en tercer escenario
      if (stage == 3) {
        (hero.x > 860 && hero.x < 1045) ? hero.y -= 3 : hero.y -= 1;
      }
    } else {
      hero.x = canvas.width - hero.width;
    }

    //Pasar al stage 3
    if (stage == 2 && hero.x > 1420) {
      this.setTimeout(function() {
        stage = 3;
        hero.x = 0;
        hero.y = 480;
        hero.location = "third-stage";
        deleteMummies();
        deleteShots();
      }, 1000);
      return;
    }

    //llegar al fin del tercer escenario
    if (stage == 3 && hero.x > 1420) {
      misionMusic.pause();
      completedMusic.play();
      clearInterval(interval);
      interval = undefined;
      setTimeout(function(){
        ctx.drawImage(fondo.image5, 0, 0, canvas.width, canvas.height);
      }, 1800);
    }

    hero.action = "right";

    //Caerse de la piedra
    if (hero.location == "first-rock" && hero.x >= 1125 && hero.x < 1150) {
      hero.jump = true;
      hero.limitToJump = 430;
      hero.location = "floor";
    }
  }
  //Saltar y avanzar derecha
  if (keys[32] && keys[39]) {
    if (stage == 1 && hero.location == "first-rock") {
      hero.jump = true;
      hero.limitToJump = 140;
      hero.x = 1205;
      this.setTimeout(function() {
        stage = 2;
        hero.x = 0;
        hero.y = 400;
        hero.location = "second-stage";
        deleteMummies();
        deleteShots();
      }, 1000);
      return;
    }

    //Escenario 2, que al saltar ascienda poco a poco
    if (stage == 2) {
      hero.limitToJump -= 15;
    }

    if (hero.jump) {
      hero.x < canvas.width - hero.width
        ? (hero.vx = 3)
        : (hero.x = canvas.width - hero.width);
      return;
    }
  }
  //Saltar y avanzar izquierda
  if (keys[32] && keys[37]) {
    //Escenario 2, que al saltar descienda poco a poco
    if (stage == 2) {
      hero.limitToJump += 15;
    }

    if (hero.jump) {
      if (hero.x > 10) {
        hero.vx = -3;
        if (stage == 2) {
          if (hero.x > 240) hero.vy += 3;
        }
      } else {
        hero.x = 10;
      }
      return;
    }
  }
  //Disparar
  if (keys[83]) {
    shotMusic.play();
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
