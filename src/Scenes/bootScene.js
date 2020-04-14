import 'phaser';
import logo from '../assets/logo.png';
import background from '../assets/objects/bk-loading.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);
    this.load.image('background-loading', background);
  }

  create() {
    this.scene.start('Preloader');
  }
}