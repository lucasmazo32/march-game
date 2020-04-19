/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let mummy;
let fullChest;

export default class Level1 extends GameScene {
  constructor() {
    super('Level-4');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 4', { fontSize: 40, fill: '#fff' });

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

    platform.create(521, 350, 'plat-med');
    platform.create(459, 350, 'plat-med');
    platform.create(397, 350, 'plat-med');
    platform.create(335, 350, 'plat-med');

    platform.create(707, 300, 'plat-med');
    platform.create(645, 300, 'plat-med');
    platform.create(583, 300, 'plat-med');

    platform.create(769, 200, 'plat-med');
    platform.create(707, 200, 'plat-med');
    platform.create(645, 200, 'plat-med');

    platform.create(210, 450, 'plat-med');
    platform.create(148, 450, 'plat-med');
    platform.create(86, 450, 'plat-med');
    platform.create(24, 450, 'plat-med');

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

    mummy = this.physics.add.sprite(540, 300, 'steady-mummy');

    mummy.body.setSize(24, 32);
    mummy.body.setOffset(12, 32);

    this.anims.create({
      key: 'standing-mummy',
      frames: this.anims.generateFrameNumbers('steady-mummy', { start: 6, end: 8 }),
      frameRate: 2,
      repeat: -1,
    });

    mummy.anims.play('standing-mummy', true);
    this.physics.add.collider(platform, mummy);

    this.physics.add.overlap(this.player, mummy, () => { super.loosingScenario(4); });

    // colide

    this.physics.add.collider(this.player, platform);
    this.physics.add.collider(this.penguin, platform);
  }

  winningScenario() {
    super.winningScenario(4);
  }
}