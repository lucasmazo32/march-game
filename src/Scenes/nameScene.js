import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';

const inputField = document.querySelector('.name');

export default class NameScenario extends Phaser.Scene {
  constructor() {
    super('InputName');
  }

  preload() {
    this.load.image('background-loading', background);
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
  }

  create() {
    inputField.classList.toggle('closed');
    this.add.image(400, 300, 'background-loading');

    this.text = this.add.text(215, 20, 'First time playing?', { fontSize: 40, fill: '#1b1b1b' });
    this.text = this.add.text(140, 70, 'Write your name in here!', { fontSize: 40, fill: '#1b1b1b' });
    // Next Level
    this.gameButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Submit', 'Title', inputField);
  }
}