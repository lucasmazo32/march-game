import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';
import getData from '../API/getScore';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  init(data) {
    this.level = data.level;
    this.fromGame = data.fromGame;
    this.final = data.final;
  }

  preload() {
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
  }

  create() {
    this.text = this.add.text(150, 20, `Level ${this.level} Leader Board!`, { fontSize: 40, fill: '#fff' });

    const leaderText = async () => {
      const leadersArray = await getData(this.level);
      let count = 1;
      if (leadersArray.length !== 0) {
        leadersArray.forEach(userNScore => {
          this.text = this.add.text(150, 40 + count * 35, `${count}. ${userNScore.user}: ${userNScore.score}`, { fontSize: 40, fill: '#fff' });
          count += 1;
        });
      } else {
        this.text = this.add.text(230, 150, 'No leaders yet!', { fontSize: 40, fill: '#fff' });
        this.text = this.add.text(205, 250, 'Be the first one!', { fontSize: 40, fill: '#fff' });
      }
    };

    leaderText();

    if (this.fromGame && !this.final) {
      // Next level
      this.playAgain = new Button(this, config.width / 2, config.height / 2 + 180, 'blueButton1', 'blueButton2', 'Replay', `Level-${this.level}`, false, {}, 1.5);
      // Play Again
      this.nextLevel = new Button(this, config.width / 2, config.height / 2 + 250, 'blueButton1', 'blueButton2', 'Next Level', `Level-${this.level + 1}`, false, {}, 1.5);
    } else if (this.fromGame && this.final) {
      // Next level
      this.playAgain = new Button(this, config.width / 2, config.height / 2 + 180, 'blueButton1', 'blueButton2', 'Replay', `Level-${this.level}`);
      // Play Again
      this.nextLevel = new Button(this, config.width / 2, config.height / 2 + 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    } else {
      // Next level
      this.playAgain = new Button(this, config.width / 2, config.height / 2 + 180, 'blueButton1', 'blueButton2', "Beat 'em", `Level-${this.level}`);
      // Play Again
      this.nextLevel = new Button(this, config.width / 2, config.height / 2 + 250, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    }
  }
}