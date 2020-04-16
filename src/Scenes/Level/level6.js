/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
// chest
let fullChest;
let openChest;
let chestCond = false;
let remOverlap;
// mummy
let mummy;
// coin
let coin;

export default class Level6 extends GameScene {
  constructor() {
    super('Level-6');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 6', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    // platform

    platform = this.physics.add.staticGroup();

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
    platform.create(459, 350, 'plat-med');
    platform.create(397, 350, 'plat-med');


    platform.create(465, 250, 'plat-med');
    platform.create(403, 250, 'plat-med');
    platform.create(341, 250, 'plat-med');
    platform.create(279, 250, 'plat-med');
    platform.create(217, 250, 'plat-med');
    platform.create(155, 250, 'plat-med');
    platform.create(93, 250, 'plat-med');
    platform.create(31, 250, 'plat-med');

    platform.create(769, 150, 'plat-med');
    platform.create(707, 150, 'plat-med');
    platform.create(645, 150, 'plat-med');
    platform.create(583, 150, 'plat-med');
    platform.create(521, 150, 'plat-med');

    // chest

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

    this.physics.add.collider(fullChest, platform);

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

    // coin

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    coin = this.physics.add.group();
    coin.create(100, 420, 'coin');
    coin.create(50, 420, 'coin');
    coin.create(75, 420, 'coin');

    this.physics.add.collider(coin, platform);
    this.physics.add.overlap(this.player, coin, (thisPlayer, thisCoin) => {
      super.coinFun(this.scoreText);
      thisCoin.disableBody(true, true);
    }, null, this);

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
    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(6); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy, this.player, 6);
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
    super.winningScenario(6);
  }
}