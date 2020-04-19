/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let mummy;
// chest
let fullChest;

export default class Level5 extends GameScene {
  constructor() {
    super('Level-5');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 5', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    // platform

    platform = this.physics.add.staticGroup();

    platform.create(210, 250, 'plat-med');
    platform.create(148, 250, 'plat-med');
    platform.create(86, 250, 'plat-med');
    platform.create(24, 250, 'plat-med');

    platform.create(769, 450, 'plat-med');
    platform.create(707, 450, 'plat-med');
    platform.create(645, 450, 'plat-med');
    platform.create(583, 450, 'plat-med');

    platform.create(521, 335, 'plat-med');
    platform.create(459, 335, 'plat-med');
    platform.create(397, 335, 'plat-med');
    platform.create(335, 335, 'plat-med');

    platform.create(769, 220, 'plat-med');
    platform.create(707, 220, 'plat-med');
    platform.create(645, 220, 'plat-med');

    platform.create(210, 450, 'plat-med');
    platform.create(148, 450, 'plat-med');
    platform.create(86, 450, 'plat-med');
    platform.create(24, 450, 'plat-med');

    // chest

    fullChest = this.physics.add.sprite(750, 150, 'full-chest');
    fullChest.setBounce(0.2);

    this.anims.create({
      key: 'opening',
      frames: this.anims.generateFrameNumbers('full-chest', { start: 0, end: 6 }),
      frameRate: 1,
    });

    fullChest.anims.play('opening', true);

    this.physics.add.collider(fullChest, platform);

    this.physics.add.overlap(this.player, fullChest, () => {
      super.chestFun(this.scoreText);
      fullChest.disableBody(true, true);
    });

    // mummy

    mummy = this.physics.add.sprite(540, 260, 'move-mummy');

    mummy.setGravityY(300);

    mummy.body.setSize(24, 32);
    mummy.body.setOffset(12, 32);

    this.anims.create({
      key: 'moving-mummy',
      frames: this.anims.generateFrameNumbers('move-mummy', { start: 6, end: 8 }),
      frameRate: 2,
      repeat: -1,
    });

    mummy.anims.play('moving-mummy', true);
    mummy.setCollideWorldBounds(true);
    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(5); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy, this.player, 4);
      },
      loop: true,
    });

    this.physics.add.collider(platform, mummy);
    this.physics.add.collider(this.ground, mummy);
    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(5);
  }
}