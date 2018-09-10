class Hero {
  constructor() {
    this.x = 10;
    this.y = 170;
    this.vx = 0;
    this.vy = 1;
    this.jump = false;
    this.width = 60;
    this.height = 90;
    this.side = "";
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
    this.image12 = new Image();
    this.image12.src = "./images/hero/run/run1-izq.png";
    this.image13 = new Image();
    this.image13.src = "./images/hero/run/run2-izq.png";
    this.image14 = new Image();
    this.image14.src = "./images/hero/run/run3-izq.png";
    this.image15 = new Image();
    this.image15.src = "./images/hero/run/run4-izq.png";
    this.image16 = new Image();
    this.image16.src = "./images/hero/run/run5-izq.png";
    this.image17 = new Image();
    this.image17.src = "./images/hero/run/run6-izq.png";
    this.image18 = new Image();
    this.image18.src = "./images/hero/run/run7-izq.png";
    this.image19 = new Image();
    this.image19.src = "./images/hero/run/run8-izq.png";
    this.image20 = new Image();
    this.image20.src = "./images/hero/run/run9-izq.png";
    this.image21 = new Image();
    this.image21.src = "./images/hero/run/run10-izq.png";
    this.image22 = new Image();
    this.image22.src = "./images/hero/hero_stop-izq.png";
    this.image23 = new Image();
    this.image23.src = "./images/hero/hero_up-izq.png";
    this.image24 = new Image();
    this.image24.src = "./images/hero/shot/shot1.png";
    this.image25 = new Image();
    this.image25.src = "./images/hero/shot/shot2.png";
    this.image26 = new Image();
    this.image26.src = "./images/hero/shot/shot3.png";
    this.image27 = new Image();
    this.image27.src = "./images/hero/shot/shot4.png";
    this.image28 = new Image();
    this.image28.src = "./images/hero/shot/shot1-izq.png";
    this.image29 = new Image();
    this.image29.src = "./images/hero/shot/shot2-izq.png";
    this.image30 = new Image();
    this.image30.src = "./images/hero/shot/shot3-izq.png";
    this.image31 = new Image();
    this.image31.src = "./images/hero/shot/shot4-izq.png";
    this.image32 = new Image();
    this.image32.src = "./images/hero/shot/shot-up1.png";
    this.image33 = new Image();
    this.image33.src = "./images/hero/shot/shot-up2.png";
    this.image34 = new Image();
    this.image34.src = "./images/hero/shot/shot-up3.png";
    this.image35 = new Image();
    this.image35.src = "./images/hero/shot/shot-up4.png";
    this.image36 = new Image();
    this.image36.src = "./images/hero/shot/shot-up1-izq.png";
    this.image37 = new Image();
    this.image37.src = "./images/hero/shot/shot-up2-izq.png";
    this.image38 = new Image();
    this.image38.src = "./images/hero/shot/shot-up3-izq.png";
    this.image39 = new Image();
    this.image39.src = "./images/hero/shot/shot-up4-izq.png";
    this.image40 = new Image();
    this.image40.src = "./images/hero/shot/shot-down1.png";
    this.image41 = new Image();
    this.image41.src = "./images/hero/shot/shot-down2.png";
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
        this.width = 60;
        this.height = 90;
        this.image = this.image0;
        this.side = "right";
        break;
      case "stop-left":
        this.width = 60;
        this.height = 90;
        this.image = this.image22;
        this.side = "left";
        break;
      case "see-up":
        this.width = 60;
        this.height = 95;
        this.image = this.image11;
        this.side = "right";
        break;
      case "see-up-left":
        this.width = 60;
        this.height = 95;
        this.image = this.image23;
        this.side = "left";
        break;
      case "shot-up-right":
        this.width = 60;
        this.height = 90;
        this.side = "up";
        if (frames % 10 === 0) {
          switch (this.image) {
            case this.image32:
              this.image = this.image33;
              break;
            case this.image33:
              this.image = this.image34;
              break;
            case this.image34:
              this.image = this.image35;
              break;
            default:
              this.image = this.image32;
              break;
          }
        }
        break;
      case "shot-up-left":
        this.width = 60;
        this.height = 95;
        this.side = "up";
        if (frames % 10 === 0) {
          switch (this.image) {
            case this.image36:
              this.image = this.image37;
              break;
            case this.image37:
              this.image = this.image38;
              break;
            case this.image38:
              this.image = this.image39;
              break;
            default:
              this.image = this.image36;
              break;
          }
        }
        break;
      case "left":
        this.width = 60;
        this.height = 90;
        this.side = "left";
        if (frames % 5 === 0) {
          switch (this.image) {
            case this.image12:
              this.image = this.image13;
              break;
            case this.image13:
              this.image = this.image14;
              break;
            case this.image14:
              this.image = this.image15;
              break;
            case this.image15:
              this.image = this.image16;
              break;
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
            default:
              this.image = this.image12;
              break;
          }
        }
        break;
      case "right":
        this.width = 60;
        this.height = 90;
        this.side = "right";
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
            default:
              this.image = this.image1;
              break;
          }
        }
        break;
      case "shot-right":
        this.width = 90;
        this.height = 90;
        this.side = "right";
        if (frames % 10 === 0) {
          switch (this.image) {
            case this.image24:
              this.image = this.image25;
              break;
            case this.image25:
              this.image = this.image26;
              break;
            case this.image26:
              this.image = this.image27;
              break;
            default:
              this.image = this.image24;
              break;
          }
        }
        break;
      case "stop-shot-right":
        this.width = 90;
        this.height = 90;
        this.side = "right";
        this.image = this.image24;
        break;
      case "shot-left":
        this.width = 90;
        this.height = 90;
        this.side = "left";
        if (frames % 10 === 0) {
          switch (this.image) {
            case this.image28:
              this.image = this.image29;
              break;
            case this.image29:
              this.image = this.image30;
              break;
            case this.image30:
              this.image = this.image31;
              break;
            default:
              this.image = this.image28;
              break;
          }
        }
        break;
      case "stop-shot-left":
        this.width = 90;
        this.height = 90;
        this.side = "left";
        this.image = this.image28;
        break;
      case "shot-down":
        this.width = 90;
        this.height = 90;
        this.side = "down";
        if (frames % 10 === 0)
          this.image =
            this.image === this.image40 ? this.image41 : this.image40;
        break;
    }
    if (this.jump) {
      this.jump = false;
      if (this.y < canvas.height - 280) {
        this.vy += gravity;
        this.y += this.vy;
        this.x += this.vx;
        this.jump = true;
      }
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
