class Game {
  constructor() {
    this.index = 0;
    this.map = tape.map;
   }

  setup() {
    scenarioFarBuildings = new Scenario(scenarioFarBuildingsImage, 2);
    scenarioBackBuildings = new Scenario(scenarioBackBuildingsImage, 5);
    scenarioForeground = new Scenario(scenarioForegroundImage, 10);
    
    pointing = new Pointing();
    
    life = new Life(tape.configurations.maxLife, tape.configurations.initialLife);
    
    character = new Character(matrizCharacter, characterImage, 30, 0, 125, 135, 200, 200);
    characterStandup = new Character(matrizCharacterStandup, characterStandupImage, 30, 10, 125, 135, 200, 168);
    
    const enemyBipedalUnit = new Enemy(matrizBipedalMechUnit, enemyBipedalUnitImage, 0, 0, 180, 172, 80, 64, 20);
    const enemyMechUnit = new Enemy(matrizEnemyMechUnit, enemyMechUnitImage, 0, 0, 203, 190, 96, 80, 20);
    const enemyDroneHigh = new Enemy(matrizEnemyDrone, enemyDroneImage, 0, 200, 62.5, 61, 55, 52, 30)
    const enemyDroneMid = new Enemy(matrizEnemyDrone, enemyDroneImage, 0, 95, 62.5, 61, 55, 52, 30)
    const enemySpaceship = new Enemy(matrizEnemySpaceship, enemySpaceshipImage, 0, 200, 212, 156, 106, 77, 30)

    scenarios.push(scenarioFarBuildings);
    scenarios.push(scenarioBackBuildings);
    scenarios.push(scenarioForeground);

    enemies.push(enemyBipedalUnit);
    enemies.push(enemyMechUnit);
    enemies.push(enemyDroneHigh);
    enemies.push(enemyDroneMid);
    enemies.push(enemySpaceship);

  }
  
  _restartButton() {
    restartButton = new ResetButton('Restart', width/2.6, height/1.3, 'initial screen'); 
    restartButton.draw();
    restartButton.y = height / 1.7;
    restartButton.x = width / 2.6;
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump();
    }
  }

  draw() {
    frameRate(28);
    scenarios.forEach(scenario => {
      scenario.show();
      scenario.move();
    })    
    pointing.addPoint();
    pointing.pointExtra();
    
    character.applyGravity();

    const currentLine = this.map[this.index] ;
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.x < - enemy.length;

    enemy.show();
    enemy.move();
    
    character.show();
    pointing.show();
    life.draw();

    if (visibleEnemy) {
      
      this.index++;
      enemy.appears();
      if (this.index > this.map.length -1) {
        this.index = 0;
      }
      enemy.speed = currentLine.speed;
    }


    if (character.isColliding(enemy)) {
      life.loseLife();
      takenDamageSound.play();
      character.isInvincible();

      
      if(life.life === 0){
      life.life -=1;
      image(gameOverImage, width / 2 - 250, height / 3, 535, 129);
      noLoop();
      soundtrack.stop();
        this._restartButton()
         }
      
    }
  }

}