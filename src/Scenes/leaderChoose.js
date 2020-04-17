import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';

export default class LevelsScene extends Phaser.Scene {
  constructor() {
    super('LeaderChoose');
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
    this.Level1 = new Button(this, config.width / 2 - 100, config.height / 2 - 160, 'blueButton1', 'blueButton2', 'Level 1', 'LeaderBoard', false, { level: 1, fromGame: false, final: false });
    this.Level2 = new Button(this, config.width / 2 + 100, config.height / 2 - 160, 'blueButton1', 'blueButton2', 'Level 2', 'LeaderBoard', false, { level: 2, fromGame: false, final: false });
    this.Level3 = new Button(this, config.width / 2 - 100, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Level 3', 'LeaderBoard', false, { level: 3, fromGame: false, final: false });
    this.Level4 = new Button(this, config.width / 2 + 100, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Level 4', 'LeaderBoard', false, { level: 4, fromGame: false, final: false });
    this.Level5 = new Button(this, config.width / 2 - 100, config.height / 2 - 40, 'blueButton1', 'blueButton2', 'Level 5', 'LeaderBoard', false, { level: 5, fromGame: false, final: false });
    this.Level6 = new Button(this, config.width / 2 + 100, config.height / 2 - 40, 'blueButton1', 'blueButton2', 'Level 6', 'LeaderBoard', false, { level: 6, fromGame: false, final: false });
    this.Level7 = new Button(this, config.width / 2 - 100, config.height / 2 + 20, 'blueButton1', 'blueButton2', 'Level 7', 'LeaderBoard', false, { level: 7, fromGame: false, final: false });
    this.Level8 = new Button(this, config.width / 2 + 100, config.height / 2 + 20, 'blueButton1', 'blueButton2', 'Level 8', 'LeaderBoard', false, { level: 8, fromGame: false, final: false });
    this.Level9 = new Button(this, config.width / 2 - 100, config.height / 2 + 80, 'blueButton1', 'blueButton2', 'Level 9', 'LeaderBoard', false, { level: 9, fromGame: false, final: false });
    this.Level10 = new Button(this, config.width / 2 + 100, config.height / 2 + 80, 'blueButton1', 'blueButton2', 'Level 10', 'LeaderBoard', false, { level: 10, fromGame: false, final: true });
    // Main menu
    this.menu = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}