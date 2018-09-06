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
