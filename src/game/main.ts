import { GameScene } from './scenes/GameScene';
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
        GameScene
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
