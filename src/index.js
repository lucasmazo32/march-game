import './style/style.scss';
import 'phaser';
import config from './Config/config';
import BootScene from './Scenes/bootScene';
import PreloaderScene from './Scenes/preloaderScene';
import TitleScene from './Scenes/titleScene';
import OptionsScene from './Scenes/optionsScene';
import CreditsScene from './Scenes/creditScene';
import LevelsScene from './Scenes/levelsScene';
import Level1 from './Scenes/Level/level1';
import Level2 from './Scenes/Level/level2';
import Level3 from './Scenes/Level/level3';
import Level4 from './Scenes/Level/level4';
import Level5 from './Scenes/Level/level5';
import Level6 from './Scenes/Level/level6';
import Level7 from './Scenes/Level/level7';
import LeaderChoose from './Scenes/leaderChoose';
import NameScenario from './Scenes/nameScene';
import LeaderBoard from './Scenes/leaderBoard';
import CheckName from './Scenes/checkNameScene';
import WinScenario from './Scenes/winScenario';
import LostScenario from './Scenes/lostScenario';
import Model from './model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Levels', LevelsScene);
    this.scene.add('Level-1', Level1);
    this.scene.add('Level-2', Level2);
    this.scene.add('Level-3', Level3);
    this.scene.add('Level-4', Level4);
    this.scene.add('Level-5', Level5);
    this.scene.add('Level-6', Level6);
    this.scene.add('Level-7', Level7);
    this.scene.add('LeaderBoard', LeaderBoard);
    this.scene.add('LeaderChoose', LeaderChoose);
    this.scene.add('WinLevel', WinScenario);
    this.scene.add('LostLevel', LostScenario);
    this.scene.add('InputName', NameScenario);
    this.scene.add('CheckName', CheckName);
    this.scene.start('Boot');
  }
}

window.game = new Game();