class Pointing {
  constructor(){
    this.points = 0;
    this.pointsForLifeExtra = this.points;
  }
  
  show(){
    textFont(initialScreenFont);
    textAlign(RIGHT);
    fill('#000080');
    textSize(105);
    text(parseInt(this.points), width -60, 100);
    fill('#e1c500');
    textSize(100);
    text(parseInt(this.points), width -60, 100);    
  }
  
  addPoint(){
    this.points += 0.1;
  }
  
  pointExtra(){
    this.pointsForLifeExtra += 0.1
    if (this.pointsForLifeExtra >= 100){
      life.gainLife();
      this.pointsForLifeExtra = 0;
    }
  
  }
  lifeExtraMessage(){
      setTimeout(() => {
      textFont(initialScreenFont);
      textAlign(CENTER);
      textSize(50);
      text('100 pontos! Voce ganhou uma vida extra', width/2, height / 2.5);          
      }, 2000);
  }
  
}