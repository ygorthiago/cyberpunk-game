class Life {
  constructor(max, initial){
    this.max = max;
    this.initial = initial;
    this.life = this.initial;
   
    this.width = 50;
    this.height = 50;
    this.initialX = 20;
    this.y = 20;
  }
  
  draw(){
    for(let i = 0; i < this.life; i++){
      const margin = i * 35;
      const position = this.initialX * (i + 1);
      
      
      image(lifeImage, position + margin, this.y, this.width, this.height);
    }
    
  }
  
  gainLife(){
    if(this.life <= this.max) {
      this.life++;
    }
  }
  
  loseLife(){
    this.life--;
  }
  
}