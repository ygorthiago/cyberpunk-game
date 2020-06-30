class GameOver {
  constructor(image) {
    this.image = image;
    this.x1 = 0;
    }
  
  show(){
    image(this.image, 200, 500, 200, 56);
  }
}