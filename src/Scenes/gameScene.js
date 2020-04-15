import 'phaser';
import logo from '../assets/logo.png';
import backgroundGame from '../assets/objects/bk-game.png';
import character from '../assets/characters/character.png';

let player;

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
  }


  create() {
    this.add.image(400, 300, 'background-game').setScale(2);
    this.add.image(400, 200, 'logo');

    player = this.add.sprite(40, 100, 'character');

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

    player.anims.play('jump-left', true);
  }
}