import 'phaser';
import logo from '../assets/logo.png';
import backgroundGame from '../assets/objects/bk-game.png';
import { character, groundMed } from './Helper/game';

let player;
let ground;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
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

    this.anims.create({
      key: 'jump-right',
      frames: this.anims.generateFrameNumbers('character', { start: 65, end: 70 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump-left',
      frames: this.anims.generateFrameNumbers('character', { start: 169, end: 174 }),
      frameRate: 10,
      repeat: -1,
    });

    // collitions

    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, ground);
  }
}