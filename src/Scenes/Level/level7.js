/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
// chest
let fullChest;
// mummy
let mummy;
// mummy1
let mummy1;
// mummy1
let mummy2;

export default class Level7 extends GameScene {
  constructor() {
    super('Level-7');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 7', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    // platform

    platform = this.physics.add.staticGroup();

    platform.create(458, 150, 'plat-med');
    platform.create(396, 150, 'plat-med');
    platform.create(334, 150, 'plat-med');
    platform.create(272, 150, 'plat-med');
    platform.create(210, 150, 'plat-med');
    platform.create(148, 150, 'plat-med');
    platform.create(86, 150, 'plat-med');
    platform.create(24, 150, 'plat-med');

    platform.create(458, 450, 'plat-med');
    platform.create(396, 450, 'plat-med');
    platform.create(334, 450, 'plat-med');
    platform.create(272, 450, 'plat-med');
    platform.create(210, 450, 'plat-med');
    platform.create(148, 450, 'plat-med');
    platform.create(86, 450, 'plat-med');
    platform.create(24, 450, 'plat-med');

    platform.create(769, 350, 'plat-med');
    platform.create(707, 350, 'plat-med');
    platform.create(645, 350, 'plat-med');
    platform.create(583, 350, 'plat-med');
    platform.create(521, 350, 'plat-med');

    platform.create(769, 250, 'plat-med');
    platform.create(707, 150, 'plat-med');
    platform.create(645, 250, 'plat-med');
    platform.create(583, 150, 'plat-med');
    platform.create(521, 250, 'plat-med');

    // chest

    fullChest = this.physics.add.sprite(750, 50, 'full-chest');
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

    mummy = this.physics.add.sprite(640, 160, 'move-mummy');

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
    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(7); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy, this.player, 6);
      },
      loop: true,
    });

    this.physics.add.collider(platform, mummy);
    this.physics.add.collider(this.ground, mummy);
    // mummy1

    mummy1 = this.physics.add.sprite(40, 365, 'move-mummy');

    mummy1.setGravityY(300);

    mummy1.body.setSize(24, 32);
    mummy1.body.setOffset(12, 32);

    mummy1.anims.play('moving-mummy', true);
    mummy1.setCollideWorldBounds(true);
    this.physics.add.overlap(this.player, mummy1, () => { super.loosingScenario(7); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy1, this.player, 6);
      },
      loop: true,
    });

    this.physics.add.collider(platform, mummy1);
    this.physics.add.collider(this.ground, mummy1);
    // mummy 2

    mummy2 = this.physics.add.sprite(630, 200, 'steady-mummy');

    mummy2.body.setSize(24, 32);
    mummy2.body.setOffset(12, 32);

    this.anims.create({
      key: 'standing-mummy',
      frames: this.anims.generateFrameNumbers('steady-mummy', { start: 6, end: 8 }),
      frameRate: 2,
      repeat: -1,
    });

    mummy2.anims.play('standing-mummy', true);
    this.physics.add.collider(platform, mummy2);

    this.physics.add.overlap(this.player, mummy2, () => { super.loosingScenario(7); });

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(7);
  }
}