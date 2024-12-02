import { Level1 } from './scenes/class/levels/Level1';
import { Level2 } from './scenes/class/levels/Level2';
import { StartTangram } from './scenes/StartTangram';
import { Game } from 'phaser';


let proportionHeightByWidth = 0.58
let width = window.innerWidth * 1
let height = width * proportionHeightByWidth

if (height > window.innerHeight) {
  height = window.innerHeight
  width = height * proportionHeightByWidth * 3
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    pixelArt: true,
    backgroundColor: '#028af8',
    scene: [
        StartTangram,
        Level1,
        Level2,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
