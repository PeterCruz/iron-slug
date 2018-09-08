class Mummie {
  constructor() {
    this.y = 430;
    this.width = 60;
    this.height = 90;
    this.image1 = new Image();
    this.image1.src = "./images/mummie/momia1.png";
    this.image2 = new Image();
    this.image2.src = "./images/mummie/momia2.png";
    this.image3 = new Image();
    this.image3.src = "./images/mummie/momia3.png";
    this.image4 = new Image();
    this.image4.src = "./images/mummie/momia4.png";
    this.image5 = new Image();
    this.image5.src = "./images/mummie/momia5.png";
    this.image6 = new Image();
    this.image6.src = "./images/mummie/momia6.png";
    this.image7 = new Image();
    this.image7.src = "./images/mummie/momia7.png";
    this.image8 = new Image();
    this.image8.src = "./images/mummie/momia8.png";
    this.image9 = new Image();
    this.image9.src = "./images/mummie/momia9.png";
    this.image10 = new Image();
    this.image10.src = "./images/mummie/momia10.png";
    this.image11 = new Image();
    this.image11.src = "./images/mummie/momia11.png";
    this.image12 = new Image();
    this.image12.src = "./images/mummie/momia12.png";
    this.image13 = new Image();
    this.image13.src = "./images/mummie/momia13.png";
    this.image14 = new Image();
    this.image14.src = "./images/mummie/momia14.png";
    this.image15 = new Image();
    this.image15.src = "./images/mummie/momia15.png";
    this.image16 = new Image();
    this.image16.src = "./images/mummie/momia1-izq.png";
    this.image17 = new Image();
    this.image17.src = "./images/mummie/momia2-izq.png";
    this.image18 = new Image();
    this.image18.src = "./images/mummie/momia3-izq.png";
    this.image19 = new Image();
    this.image19.src = "./images/mummie/momia4-izq.png";
    this.image20 = new Image();
    this.image20.src = "./images/mummie/momia5-izq.png";
    this.image21 = new Image();
    this.image21.src = "./images/mummie/momia6-izq.png";
    this.image22 = new Image();
    this.image22.src = "./images/mummie/momia7-izq.png";
    this.image23 = new Image();
    this.image23.src = "./images/mummie/momia8-izq.png";
    this.image24 = new Image();
    this.image24.src = "./images/mummie/momia9-izq.png";
    this.image25 = new Image();
    this.image25.src = "./images/mummie/momia10-izq.png";
    this.image26 = new Image();
    this.image26.src = "./images/mummie/momia11-izq.png";
    this.image27 = new Image();
    this.image27.src = "./images/mummie/momia12-izq.png";
    this.image28 = new Image();
    this.image28.src = "./images/mummie/momia13-izq.png";
    this.image29 = new Image();
    this.image29.src = "./images/mummie/momia14-izq.png";
    this.image30 = new Image();
    this.image30.src = "./images/mummie/momia15-izq.png";
    this.action = "stop";
  }

  draw() {
    switch (this.action) {
      case "right":
        if (frames % 10 === 0) {
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
            case this.image10:
              this.image = this.image11;
              break;
            case this.image11:
              this.image = this.image12;
              break;
            case this.image12:
              this.image = this.image13;
              break;
            case this.image13:
              this.image = this.image14;
              break;
            case this.image14:
              this.image = this.image15;
              break;
            default:
              this.image = this.image1;
              break;
          }
        }
        break;
      case "left":
        if (frames % 10 === 0) {
          switch (this.image) {
            case this.image16:
              this.image = this.image17;
              break;
            case this.image17:
              this.image = this.image18;
              break;
            case this.image18:
              this.image = this.image19;
              break;
            case this.image19:
              this.image = this.image20;
              break;
            case this.image20:
              this.image = this.image21;
              break;
            case this.image21:
              this.image = this.image22;
              break;
            case this.image22:
              this.image = this.image23;
              break;
            case this.image23:
              this.image = this.image24;
              break;
            case this.image24:
              this.image = this.image25;
              break;
            case this.image25:
              this.image = this.image26;
              break;
            case this.image26:
              this.image = this.image27;
              break;
            case this.image27:
              this.image = this.image28;
              break;
            case this.image28:
              this.image = this.image29;
              break;
            case this.image29:
              this.image = this.image30;
              break;
            default:
              this.image = this.image16;
              break;
          }
        }
        break;
    }

    if (frames % 10 == 0) {
      if (this.action == "left") {
        this.x -= 5;
      } else {
        this.x += 5;
      }
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  getDirection() {
    if (hero.x > this.x) {
      this.action = "right";
    } else {
      this.action = "left";
    }
  }
}

var mummies = [];

function generateMummies() {
  if (mummies.length < maxMummies) {
    if (frames % 100 === 0 || frames % 70 === 0 || frames % 170 == 0) {
      let mummie = new Mummie();
      mummie.x = Math.floor(Math.random() * canvas.width - 100 + 50);
      mummies.push(mummie);
    }
  }
}

function drawingMummies() {
  mummies.forEach(function(mummie) {
    mummie.getDirection();
    mummie.draw();
    if (hero.collision(mummie)) {
      fondo.gameOver();
    }
  });
}
