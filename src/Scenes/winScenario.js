import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';

export default class WinScenario extends Phaser.Scene {
  constructor() {
    super('WinLevel');
  }

  init(data) {
    this.level = data.level;
  }

  preload() {
    this.load.image('background-loading', background);
  }

  create() {
    this.add.image(400, 300, 'background-loading');
    // Next Level
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play Again', `Level-${this.level}`);

    // Current
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Next level', `Level-${this.level + 1}`);
  }
}