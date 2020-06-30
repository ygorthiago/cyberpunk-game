class Animation {
  constructor(matriz, image, x, variationY, length, heightChar, lengthSprite, heightSprite) {
    this.matriz = matriz;
    this.image = image;
    this.length = length;
    this.heightChar = heightChar;
    this.x = x;
    this.variationY = variationY;
    this.y = height - this.heightChar - this.variationY;
    this.lengthSprite = lengthSprite;
    this.heightSprite = heightSprite;
    
    this.actualFrame = 0;
  }

  show() {

//     let x = this.actualFrame % 4 * 512;
//     let y = Math.floor(this.actualFrame / 4) * 286;

    image(this.image,
      this.x, this.y,
      this.length, this.heightChar,
      this.matriz[this.actualFrame][0], this.matriz[this.actualFrame][1],
      this.lengthSprite, this.heightSprite);

    this.animation();
  }
  
  animation(){
    this.actualFrame++;
    
    if(this.actualFrame >= this.matriz.length) {
      this.actualFrame = 0;
    }
  }  

}