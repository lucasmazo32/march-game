import 'phaser';
import Button from '../Objects/button';
import config from '../Config/config';
import logo from '../assets/logo.png'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.add.image(400, 300, 'background-loading');
    this.load.image('marchLogo', logo);
  }

  create() {
    this.add.image(config.width / 2, 100, 'marchLogo');
    // First level
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Play First Level', 'Level-1', false, {}, 1.8);

    // Choose level
    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 20, 'blueButton1', 'blueButton2', 'Choose Level', 'Levels', false, {}, 1.8);

    // LeaderBoard
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 90, 'blueButton1', 'blueButton2', 'Leader Board', 'LeaderChoose', false, {}, 1.8);

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 160, 'blueButton1', 'blueButton2', 'Options', 'Options', false, {}, 1.8);

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 230, 'blueButton1', 'blueButton2', 'Credits', 'Credits', false, {}, 1.8);

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}