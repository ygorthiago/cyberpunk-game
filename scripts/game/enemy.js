class Enemy extends Animation {
  constructor(matriz, image, x, variationY, length, heightChar, widthSprite, heightSprite, speed) {
    super(matriz, image, x, variationY, length, heightChar, widthSprite, heightSprite)
    
    // this.variationY = variationY;
    // this.y = height - heightChar - this.variationY;
    
    this.speed = speed;
    this.x = width;
    
  }
  
  move(){
    this.x -= this.speed;
    
    if(this.x < -this.length - this.delay){
      this.x = width;
    }
  }
  
  appears(){
    this.x = width;
  }
  
}
  