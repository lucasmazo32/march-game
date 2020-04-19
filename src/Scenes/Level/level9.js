/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let mummy;
let mummy1;
let mummy2;
// chest
let fullChest;
// coin
let coin;

export default class Level9 extends GameScene {
  constructor() {
    super('Level-9');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 9', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    // platform

    platform = this.physics.add.staticGroup();

    platform.create(458, 100, 'plat-med');
    platform.create(396, 100, 'plat-med');
    platform.create(334, 100, 'plat-med');
    platform.create(272, 100, 'plat-med');
    platform.create(210, 100, 'plat-med');
    platform.create(148, 100, 'plat-med');
    platform.create(86, 100, 'plat-med');
    platform.create(24, 100, 'plat-med');

    platform.create(31, 450, 'plat-med');
    platform.create(93, 450, 'plat-med');
    platform.create(155, 450, 'plat-med');
    platform.create(217, 450, 'plat-med');
    platform.create(279, 450, 'plat-med');

    platform.create(589, 400, 'plat-med');
    platform.create(651, 400, 'plat-med');
    platform.create(713, 400, 'plat-med');
    platform.create(775, 400, 'plat-med');

    platform.create(623, 300, 'plat-med');
    platform.create(685, 300, 'plat-med');

    platform.create(420, 200, 'plat-med');
    platform.create(482, 200, 'plat-med');

    platform.create(31, 350, 'plat-med');
    platform.create(93, 350, 'plat-med');

    platform.create(220, 250, 'plat-med');
    platform.create(282, 250, 'plat-med');

    platform.create(651, 180, 'plat-med');
    platform.create(713, 180, 'plat-med');
    platform.create(775, 180, 'plat-med');

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

    // mummy

    mummy = this.physics.add.sprite(640, 460, 'move-mummy');

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
    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(9); });

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
    this.physics.add.overlap(this.player, mummy1, () => { super.loosingScenario(9); });

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

    mummy2 = this.physics.add.sprite(690, 200, 'steady-mummy');

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

    this.physics.add.overlap(this.player, mummy2, () => { super.loosingScenario(9); });

    // coin

    coin = this.physics.add.group();
    coin.create(750, 0, 'coin');
    coin.create(650, 0, 'coin');

    this.physics.add.collider(coin, platform);
    this.physics.add.overlap(this.player, coin, (thisPlayer, thisCoin) => {
      super.coinFun(this.scoreText);
      thisCoin.disableBody(true, true);
    }, null, this);


    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(9);
  }
}