/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let fullChest;
// coin
let coin;
let mummy;
let mummy1;

export default class Level10 extends GameScene {
  constructor() {
    super('Level-10');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(600, 5, 'Level 10', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });


    // platform

    platform = this.physics.add.staticGroup();

    platform.create(31, 400, 'plat-med');

    platform.create(589, 450, 'plat-med');
    platform.create(651, 450, 'plat-med');
    platform.create(713, 450, 'plat-med');
    platform.create(775, 450, 'plat-med');

    platform.create(500, 350, 'plat-med');

    platform.create(651, 250, 'plat-med');
    platform.create(713, 250, 'plat-med');
    platform.create(775, 250, 'plat-med');

    platform.create(265, 150, 'plat-med');
    platform.create(327, 150, 'plat-med');
    platform.create(389, 150, 'plat-med');
    platform.create(451, 150, 'plat-med');
    platform.create(513, 150, 'plat-med');
    platform.create(575, 150, 'plat-med');

    platform.create(93, 250, 'plat-med');
    platform.create(155, 250, 'plat-med');
    platform.create(217, 250, 'plat-med');
    platform.create(279, 250, 'plat-med');

    // chest

    fullChest = this.physics.add.sprite(750, 350, 'full-chest');
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

    // coin

    coin = this.physics.add.group();
    coin.create(290, 200, 'coin');
    coin.create(350, 0, 'coin');
    coin.create(550, 0, 'coin');

    this.physics.add.collider(coin, platform);
    this.physics.add.overlap(this.player, coin, (thisPlayer, thisCoin) => {
      super.coinFun(this.scoreText);
      thisCoin.disableBody(true, true);
    }, null, this);

    // mummy

    mummy = this.physics.add.sprite(440, 60, 'move-mummy');

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
    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(10); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy, this.player, 4);
      },
      loop: true,
    });

    this.physics.add.collider(platform, mummy);
    this.physics.add.collider(this.ground, mummy);
    // mummy1

    mummy1 = this.physics.add.sprite(780, 365, 'move-mummy');

    mummy1.setGravityY(300);

    mummy1.body.setSize(24, 32);
    mummy1.body.setOffset(12, 32);

    mummy1.anims.play('moving-mummy', true);
    mummy1.setCollideWorldBounds(true);
    this.physics.add.overlap(this.player, mummy1, () => { super.loosingScenario(10); });

    this.time.addEvent({
      delay: 20,
      callback: () => {
        this.physics.accelerateToObject(mummy1, this.player, 10);
      },
      loop: true,
    });

    this.physics.add.collider(platform, mummy1);
    this.physics.add.collider(this.ground, mummy1);

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(10, false);
  }
}