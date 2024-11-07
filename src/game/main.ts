import { GameScene } from './scenes/GameScene';
import { Game } from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
	width: 800,
	height: 600,
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

    return new Game({ ...config, parent });

}

export default StartGame;
