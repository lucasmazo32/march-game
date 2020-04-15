/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

export default class Level1 extends GameScene {
  constructor() {
    super('Level-2');
  }

  create() {
    super.create();
    this.text = this.add.text(300, 100, 'Level-2', { fontSize: 50, fill: '#1b1b1b' });
  }
}