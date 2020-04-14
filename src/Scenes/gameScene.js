import 'phaser';
import logo from '../assets/logo.png';
import backgroundGame from '../assets/objects/bk-game.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', logo);
    this.load.image('background-game', backgroundGame);
  }

  create() {
    this.add.image(400, 300, 'background-game').setScale(2);
    this.add.image(400, 200, 'logo');
  }
}