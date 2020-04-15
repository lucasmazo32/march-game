/* eslint-disable class-methods-use-this */
import 'phaser';
import logo from '../assets/logo.png';
import backgroundGame from '../assets/objects/bk-game.png';
import character from '../assets/characters/character.png';
import groundMed from '../assets/objects/plataform/WaveForest_Square.png';

let player;
let ground;
let cursors;

export default class GameScene extends Phaser.Scene {
  constructor(scene) {
    super(scene);
    this.scene = scene;
  }

  preload() {
    // load images
    this.load.image('logo', logo);
    this.load.image('background-game', backgroundGame);
    this.load.spritesheet('character', character, {
      frameWidth: 32,
      frameHeight: 32,
      startFrame: 0,
      endFrame: 202,
    });
    this.load.image('ground', groundMed);
  }


  create() {
    this.add.image(400, 300, 'background-game').setScale(2);

    // ground Static groupd

    ground = this.physics.add.staticGroup();

    ground.create(32, 580, 'ground');
    ground.create(96, 580, 'ground');
    ground.create(160, 580, 'ground');
    ground.create(224, 580, 'ground');
    ground.create(288, 580, 'ground');
    ground.create(352, 580, 'ground');
    ground.create(416, 580, 'ground');
    ground.create(480, 580, 'ground');
    ground.create(544, 580, 'ground');
    ground.create(608, 580, 'ground');
    ground.create(672, 580, 'ground');
    ground.create(736, 580, 'ground');
    ground.create(800, 580, 'ground');

    // player

    player = this.physics.add.sprite(40, 100, 'character').setScale(2);

    player.body.setGravityY(300);

    this.anims.create({
      key: 'standing',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 12 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('character', { start: 13, end: 20 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', { start: 117, end: 124 }),
      frameRate: 10,
      repeat: -1,
    });
    player.setCollideWorldBounds(true);

    // collitions

    this.physics.add.collider(player, ground);

    // cursors

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (cursors.left.isDown) {
      player.setAccelerationX(-350);
      player.setMaxVelocity(200, 500);
      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setAccelerationX(350);
      player.setMaxVelocity(200, 500);
      player.anims.play('right', true);
    } else {
      player.setAccelerationX(0);
      player.setVelocityX(0);
      player.anims.play('standing', true);
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }
  }
}