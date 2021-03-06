import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import background from '../assets/objects/bk-loading.png';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';
import setScore from '../API/setScore';

export default class WinScenario extends Phaser.Scene {
  constructor() {
    super('WinLevel');
  }

  init(data) {
    this.level = data.level;
    this.score = data.score;
    this.final = data.final;
  }

  preload() {
    this.load.image('background-loading', background);
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
  }

  create() {
    const scoreSetting = async () => {
      await setScore(this.score, this.level);
    };

    scoreSetting();

    this.add.image(400, 300, 'background-loading');

    this.text = this.add.text(160, 20, `Level ${this.level} accomplished!`, { fontSize: 40, fill: '#1b1b1b' });
    this.text = this.add.text(200, 70, `Your score is ${this.score}!`, { fontSize: 40, fill: '#1b1b1b' });

    // Play again
    this.playAgain = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Play Again', `Level-${this.level}`, false, {}, 1.5);

    // See leaderboard
    this.leaderBoard = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Leader Board', 'LeaderBoard', false, { level: this.level, final: this.final, fromGame: true }, 1.5);

    // Next level
    if (!this.final) {
      this.nextLevel = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Next Level', `Level-${this.level + 1}`, false, {}, 1.5);
    }
  }
}