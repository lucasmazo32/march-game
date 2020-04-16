import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';

export default class LostScenario extends Phaser.Scene {
  constructor(level) {
    super('LostLevel');
    this.level = level;
  }

  preload() {
    this.add.image(400, 300, 'background-loading');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play Again', `Level-${this.level}`);

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'See other levels', `Level-${this.level}`);
  }
}