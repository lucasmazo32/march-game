/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;

export default class Level1 extends GameScene {
  constructor() {
    super('Level-1');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    // platform

    platform = this.physics.add.staticGroup();
    platform.create(769, 450, 'plat-med');
    platform.create(707, 450, 'plat-med');
    platform.create(645, 450, 'plat-med');
    platform.create(583, 450, 'plat-med');

    platform.create(450, 350, 'plat-med');
    platform.create(388, 350, 'plat-med');
    platform.create(326, 350, 'plat-med');

    platform.create(210, 250, 'plat-med');
    platform.create(148, 250, 'plat-med');
    platform.create(86, 250, 'plat-med');
    platform.create(24, 250, 'plat-med');

    // level 1 texts

    this.text = this.add.text(625, 5, 'Level 1', { fontSize: 40, fill: '#fff' });

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(1);
  }
}