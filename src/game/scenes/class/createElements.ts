import { Scene } from 'phaser';


export default class createElements extends Scene {

    createButton(x, y, text, callback) {
		const button = this.add.text(x, y, text, {
			fontSize: '32px',
			fill: '#fff',
			backgroundColor: '#000',
			padding: { x: 10, y: 5 },
		}).setInteractive();

		button.on('pointerdown', callback);

		button.on('pointerover', () => {
			button.setStyle({ fill: '#ff0' });
		});

		button.on('pointerout', () => {
			button.setStyle({ fill: '#fff' });
		});
	}
        
}