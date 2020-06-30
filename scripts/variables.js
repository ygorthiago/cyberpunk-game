let scenarioForeground;
let scenarioForegroundImage;
let scenarioFarBuildings;
let scenarioFarBuildingsImage;
let scenarioBackBuildings;
let scenarioBackBuildingsImage;
let scenarios = [];

let atualScene = 'initialScreen';
let scenes;
let game;
let initialScreen;
let initialScreenImage;
let initialScreenFont;
let lifeImage;
let pointing;
let managerButton;
let restartButton;
let life;
let tape;
let pressStartImage;

let character;
let characterImage;
let characterJump;
let characterJumpImage;
let characterStandup;
let characterStandupImage;
let characterRunDamageImage;
let characterJumpDamageImage;

let enemyBipedalUnit;
let enemyBipedalUnitImage;
let enemyMechUnit;
let enemyMechUnitImage;
let enemyDroneHigh;
let enemyDroneMid;
let enemyDroneImage;
let enemySpaceship;
let enemySpaceshipImage;

const enemies = [];

let takenDamageSound;
let soundtrack;
let initialScreenMusic;

let gameOverImage;
let gameOverSound;

const matrizCharacter = [
      [0, 0],
      [200, 0],
      [400, 0],
      [600, 0],
      [0, 200],
      [200, 200],
      [400, 200],
      [600, 200],
      [0, 400],
      [200, 400],
      [400, 400],
      [600, 400],
      [0, 600],
      [200, 600],
      [400, 600],
      [600, 600],
      [0, 800],
      [200, 800],
      [400, 800],
      [600, 800]
    ];
const matrizCharacterJump = [
      [0, 0],
      [200, 0],
      [400, 0],
      [600, 0],
      [0, 208],
      [200, 208],
      [400, 208],
      [600, 208],
      [0, 416],
      [200, 416],
      [400, 416],
      [600, 416],
      [0, 624],
      [200, 624],
      [400, 624],
      [600, 624],
      [0, 832],
      [200, 832],
      [400, 832],
      [600, 832]
    ];
const matrizCharacterStandup = [
      [0, 0],
      [160, 0],
      [320, 0],
      [480, 0],
      [640, 0],
      [0, 168],
      [160, 168],
      [320, 168],
      [480, 168],
      [640, 168]
    ];

const matrizEnemyMechUnit = [
      [0, 0],
      [96, 0],
      [192, 0],
      [288, 0],
      [384, 0],
      [480, 0],
      [576, 0],
      [672, 0],
      [768, 0],
      [864, 0]
    ];
const matrizBipedalMechUnit = [
      [0, 0],
      [80, 0],
      [160, 0],
      [240, 0],
      [320, 0],
      [400, 0],
      [480, 0],
    ];

const matrizEnemyDrone = [
      [0, 0],
      [55, 0],
      [110, 0],
      [165, 0],
    ];

const matrizEnemySpaceship = [
      [0, 0],
      [106, 0],
      [212, 0],
      [318, 0],
      [424, 0],
      [530, 0],
      [636, 0],
      [742, 0],
    ];