function preload() {
  scenarioFarBuildingsImage = loadImage('images/scenarios/far-buildings.png');
  scenarioBackBuildingsImage = loadImage('images/scenarios/back-buildings.png');
  scenarioForegroundImage = loadImage('images/scenarios/foreground.png');

  initialScreenImage = loadImage('images/scenarios/initial-screen.jpg');
  initialScreenFont = loadFont('images/assets/kill-the-noise-font.otf');
  
  lifeImage = loadImage('images/assets/heart.png');
  
  characterImage = loadImage('images/character/molly.png');
  characterJumpImage = loadImage('images/character/molly-jump.png');
  characterStandupImage = loadImage('images/character/molly-standup.png');
  characterRunDamageImage = loadImage('images/character/molly_run_damage.png');
  characterJumpDamageImage = loadImage('images/character/molly-jump-damage.png');

  enemyBipedalUnitImage = loadImage('images/enemies/bipedal-unit.png');
  enemyMechUnitImage = loadImage('images/enemies/mech-unit.png');
  enemyDroneImage = loadImage('images/enemies/drone.png');
  enemySpaceshipImage = loadImage('images/enemies/spaceship.png');

  soundtrack = loadSound('sounds/music-game.mp3');
  initialScreenMusic = loadSound('sounds/initial-screen-music.mp3');
  takenDamageSound = loadSound('sounds/taken_damage.mp3');
  
  tape = loadJSON('scripts/tape/tape.json');

  gameOverImage = loadImage('images/assets/gameover.png');
}