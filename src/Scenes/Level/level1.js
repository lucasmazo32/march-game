/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';
import platformMed from '../../assets/objects/plataform/WaveForest_HalfSquare.png';

let platform;

export default class Level1 extends GameScene {
  constructor() {
    super('Level-1');
  }

  preload() {
    super.preload();
    this.load.image('plat-med', platformMed);
  }

  create() {
    super.create();

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

    // level 1 text

    this.text = this.add.text(635, 5, 'Level 1', { fontSize: 40, fill: '#fff' });

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }
}