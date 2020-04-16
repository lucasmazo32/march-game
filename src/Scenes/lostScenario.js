import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';

export default class LostScenario extends Phaser.Scene {
  constructor() {
    super('LostLevel');
  }

  init(data) {
    this.level = data.level;
  }

  preload() {
    this.load.image('background-loading', background);
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
  }

  create() {
    this.add.image(400, 300, 'background-loading');

    this.text = this.add.text(230, 20, `Level ${this.level} is hard`, { fontSize: 40, fill: '#1b1b1b' });
    this.text = this.add.text(140, 70, 'What do you want to do?', { fontSize: 40, fill: '#1b1b1b' });
    // Next Level
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Repeat', `Level-${this.level}`);

    // Current
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Main Menu', 'Title');
  }
}