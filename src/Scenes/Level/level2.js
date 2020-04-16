/* eslint-disable class-methods-use-this */
import 'phaser';
import GameScene from '../gameScene';

let platform;
let coin;

export default class Level1 extends GameScene {
  constructor() {
    super('Level-2');
  }

  preload() {
    super.preload();
    super.setScoreDefault();
  }

  create() {
    super.create();
    this.text = this.add.text(625, 5, 'Level 2', { fontSize: 40, fill: '#fff' });

    this.time.addEvent({
      delay: 300,
      callback: super.scoreFun,
      args: [this.scoreText, -5],
      repeat: 199,
    });

    coin = this.physics.add.group();
    coin.create(750, 0, 'coin');
    coin.create(650, 0, 'coin');

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
    this.physics.add.collider(coin, platform);

    // Extra points with coin

    this.physics.add.overlap(this.player, coin, (thisPlayer, thisCoin) => {
      super.coinFun(this.scoreText);
      thisCoin.disableBody(true, true);
    }, null, this);
  }

  winningScenario() {
    super.winningScenario(2);
  }
}