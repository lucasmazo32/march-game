import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';

export default class LevelsScene extends Phaser.Scene {
  constructor() {
    super('Levels');
  }

  preload() {
    this.load.image('background-loading', background);
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
  }

  create() {
    this.add.image(400, 300, 'background-loading');

    this.text = this.add.text(200, 20, 'Choose one level!', { fontSize: 40, fill: '#1b1b1b' });

    // Levels
    this.Level1 = new Button(this, config.width / 2, config.height / 2 - 200, 'blueButton1', 'blueButton2', 'Level 1', 'Level-1');
    this.Level2 = new Button(this, config.width / 2, config.height / 2 - 150, 'blueButton1', 'blueButton2', 'Level 2', 'Level-2');
    this.Level3 = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Level 3', 'Level-3');
    this.Level4 = new Button(this, config.width / 2, config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Level 4', 'Level-4');
    this.Level5 = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Level 5', 'Level-5');
    this.Level6 = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Level 6', 'Level-6');
    this.Level7 = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Level 7', 'Level-7');
  }
}