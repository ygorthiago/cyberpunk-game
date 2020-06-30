class InitialScreen {
  constructor(){

  }
  
  draw(){
    this._backgroundImage();
    this._text();
    this._button();
    frameRate(12);
  }
  
  _backgroundImage(){
    image(scenarioFarBuildingsImage, 0, 0, width, height); 
    image(scenarioBackBuildingsImage, 0, 0, width, height); 
    image(scenarioForegroundImage, 0, 0, width, height); 
    characterStandup.show();
  }
  
  _text(){
    textFont(initialScreenFont);
    textAlign(CENTER);
    fill('#000080');
    textSize(205);
    text('cyberpunk', width/2, height / 1.8  );
    fill('#e1c500');
    textSize(200);
    text('cyberpunk', width/2, height / 1.8  );
  }
  
  _button(){
    managerButton.draw();
    managerButton.y = height / 1.3;
    managerButton.x = width /2.4;
  }
  
}