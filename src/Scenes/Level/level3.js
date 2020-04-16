/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let fullChest;
let openChest;
let chestCond = false;
let remOverlap;

export default class Level1 extends GameScene {
  constructor() {
    super('Level-3');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 3', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    fullChest = this.physics.add.sprite(750, 0, 'full-chest');
    fullChest.setBounce(0.2);

    this.anims.create({
      key: 'opening',
      frames: this.anims.generateFrameNumbers('full-chest', { start: 0, end: 6 }),
      frameRate: 1,
    });

    this.anims.create({
      key: 'collected',
      frames: this.anims.generateFrameNumbers('full-chest', { start: 7, end: 7 }),
      frameRate: 1,
    });

    fullChest.anims.play('opening', true);

    // platform

    platform = this.physics.add.staticGroup();

    platform.create(210, 150, 'plat-med');
    platform.create(148, 150, 'plat-med');
    platform.create(86, 150, 'plat-med');
    platform.create(24, 150, 'plat-med');

    platform.create(210, 350, 'plat-med');
    platform.create(148, 350, 'plat-med');
    platform.create(86, 350, 'plat-med');
    platform.create(24, 350, 'plat-med');

    platform.create(310, 450, 'plat-med');
    platform.create(248, 450, 'plat-med');
    platform.create(186, 450, 'plat-med');
    platform.create(124, 450, 'plat-med');

    platform.create(360, 250, 'plat-med');
    platform.create(298, 250, 'plat-med');
    platform.create(236, 250, 'plat-med');
    platform.create(174, 250, 'plat-med');

    platform.create(586, 250, 'plat-med');
    platform.create(524, 250, 'plat-med');

    platform.create(769, 150, 'plat-med');
    platform.create(707, 150, 'plat-med');
    platform.create(645, 150, 'plat-med');
    platform.create(583, 150, 'plat-med');

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
    this.physics.add.collider(fullChest, platform);

    // overlap

    remOverlap = this.physics.world;

    openChest = this.physics.add.overlap(this.player, fullChest, () => {
      if (chestCond) {
        remOverlap.removeCollider(openChest);
        return;
      }
      super.chestFun(this.scoreText);
      fullChest.anims.play('collected', true);
      chestCond = true;
    });
  }

  winningScenario() {
    super.winningScenario(3);
  }
}