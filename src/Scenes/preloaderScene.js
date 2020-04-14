import 'phaser';
import logo from '../assets/logo.png';
import greyBox from '../assets/ui/grey_box.png';
import blueBox from '../assets/ui/blue_boxCheckmark.png';
import theme from '../assets/TownTheme.mp3';
import blueBtn1 from '../assets/ui/blue_button02.png';
import blueBtn2 from '../assets/ui/blue_button03.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
  
  init () {
    this.readyCount = 0;
  }
 
  preload () {
    // add logo image
    this.add.image(400, 200, 'logo');
   
    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
   
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
   
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
   
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
   
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
   
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
   
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));
    
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
    
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);
    this.load.image('phaserLogo', logo);
    this.load.image('box', greyBox);
    this.load.image('checkedBox', blueBox);
    this.load.audio('bgMusic', [theme]);
  }
 
  create () {
  }
   
  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};