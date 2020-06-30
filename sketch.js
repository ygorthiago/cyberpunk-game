function setup() {
  createCanvas(820, 367);//(2000, 972);
  
  game = new Game();
  initialScreen = new InitialScreen();
  game.setup();
  scenes = {
    game,
    initialScreen,
  };
  
  managerButton = new ManagerButton('Start', width/2, height/2, 'game');
      
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[atualScene].draw();
}