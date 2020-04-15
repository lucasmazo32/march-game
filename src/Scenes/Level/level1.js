/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

export default class Level1 extends GameScene {
  constructor() {
    super('Level-1');
  }

  create() {
    super.create();
    this.text = this.add.text(100, 100, 'Level-1', { fontSize: 50, fill: '#1b1b1b' });
    window.setTimeout(() => {
      this.ready();
    }, 5000);
  }

  ready() {
    this.scene.start('Level-2');
  }
}