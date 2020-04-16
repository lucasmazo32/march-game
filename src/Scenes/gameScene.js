/* eslint-disable class-methods-use-this */
import 'phaser';
import backgroundGame from '../assets/objects/bk-game.png';
import character from '../assets/characters/character.png';
import groundMed from '../assets/objects/plataform/WaveForest_Square.png';
import penguinSprite from '../assets/objects/penguin.png';

let player;
let ground;
let cursors;
let penguin;
let winningText;
let sceneTimer;

export default class GameScene extends Phaser.Scene {
  constructor(scene) {
    super(scene);
    this.scene = scene;
    this.player = player;
    this.ground = ground;
    this.cursors = cursors;
    this.penguin = penguin;
    this.winningText = winningText;
    //this.pointScore = '';
    this.sceneTimer = sceneTimer;
    this.scorePoints = 1000;
  }

  preload() {
    this.load.image('background-game', backgroundGame);
    this.load.spritesheet('character', character, {
      frameWidth: 32,
      frameHeight: 32,
      startFrame: 0,
      endFrame: 202,
    });
    this.load.image('ground', groundMed);
    this.load.spritesheet('penguin', penguinSprite, {
      frameWidth: 24,
      frameHeight: 32,
      startFrame: 0,
      endFrame: 11,
    });
  }


  create() {
    this.add.image(400, 300, 'background-game').setScale(2);

    // text

    this.winningText = this.add.text(330, 0, ' ', { fontSize: '40px', fill: '#fff' });
    //this.pointScore = this.add.text(0, 0, 'Score: 1000', { fontSize: '30px', fill: '#fff' });
    /*
    this.sceneTimer = this.time.addEvent({
      callback: this.timeScoreFunction,
      delay: 2000,
      loop: true,
    });
    */

    // ground Static group

    this.ground = this.physics.add.staticGroup();

    this.ground.create(32, 580, 'ground');
    this.ground.create(96, 580, 'ground');
    this.ground.create(160, 580, 'ground');
    this.ground.create(224, 580, 'ground');
    this.ground.create(288, 580, 'ground');
    this.ground.create(352, 580, 'ground');
    this.ground.create(416, 580, 'ground');
    this.ground.create(480, 580, 'ground');
    this.ground.create(544, 580, 'ground');
    this.ground.create(608, 580, 'ground');
    this.ground.create(672, 580, 'ground');
    this.ground.create(736, 580, 'ground');
    this.ground.create(800, 580, 'ground');

    // player

    this.player = this.physics.add.sprite(40, 500, 'character').setScale(2);

    this.player.body.setGravityY(200);

    this.player.body.setSize(16, 32);
    this.player.body.setOffset(8, 0);

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
    this.player.setCollideWorldBounds(true);

    // Penguin

    this.penguin = this.physics.add.sprite(20, 0, 'penguin').setScale(1.4);
    this.penguin.setCollideWorldBounds(true);


    this.anims.create({
      key: 'pengStand',
      frames: this.anims.generateFrameNumbers('penguin', { start: 6, end: 8 }),
      frameRate: 2,
      repeat: -1,
    });

    this.penguin.anims.play('pengStand', true);
    this.physics.add.collider(this.penguin, this.ground);

    // winning scenario

    this.physics.add.overlap(this.player, this.penguin, this.winningScenario);

    // collit

    this.physics.add.collider(this.player, this.ground);

    // cursors

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (cursors.left.isDown) {
      this.player.setAccelerationX(-350);
      this.player.setMaxVelocity(200, 500);
      this.player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.player.setAccelerationX(350);
      this.player.setMaxVelocity(200, 500);
      this.player.anims.play('right', true);
    } else {
      this.player.setAccelerationX(0);
      this.player.setVelocityX(0);
      this.player.anims.play('standing', true);
    }

    if (cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-350);
    }
  }

  winningScenario() {
    this.winningText.setText('You won!');
    console.log(winningText);
  }
/*
  timeScoreFunction() {
    this.scorePoints += -50;

    // console.log(this.pointScore);
  }
  */
}