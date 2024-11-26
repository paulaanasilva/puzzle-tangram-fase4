import { GameScene } from './scenes/GameScene';
import { Level1 } from './scenes/class/levels/Level1';
import { Level2 } from './scenes/class/levels/Level2';
import { Game } from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0, y: 300 }
		}
	},
    scene: [
        Level1,
        Level2,
    ]
};

const StartGame = (parent: string) => {
    const game = new Game({ ...config, parent });

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });

    return game;
}

export default StartGame;
