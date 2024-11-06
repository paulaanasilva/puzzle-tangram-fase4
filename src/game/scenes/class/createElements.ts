// src/game/scenes/class/createElements.ts
import Phaser from 'phaser';
import UpdateElements from './updateElements';


export default class CreateElements {
    private scene: Phaser.Scene;
    private updateElements: UpdateElements;


    constructor(scene: Phaser.Scene, updateElements: UpdateElements) {
        this.scene = scene;
        this.updateElements = updateElements;
    }

    createTriangle() {
        const triangle = this.scene.add.image(200, 100, 'triangulo');
        triangle.setScale(0.5);
        triangle.setInteractive();
        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            this.updateElements.updateSelectionOutline(this.scene.selectedShape, this.scene.selectionOutline);
        });

        return triangle;
    }

    createRetangulo() {
		const retangulo = this.scene.add.image(400, 100, 'retangulo');
		retangulo.setScale(0.5);
		retangulo.setInteractive();
		this.scene.input.setDraggable(retangulo);

		retangulo.on('pointerdown', () => {
			this.scene.selectedShape = retangulo;
		});

		this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			gameObject.x = dragX;
			gameObject.y = dragY;
			this.updateElements.updateSelectionOutline(this.scene.selectedShape, this.scene.selectionOutline);
		});

		return retangulo;
	}

    createButton(x: number, y: number, text: string, callback: () => void) {
        const button = this.scene.add.text(x, y, text, {
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

        return button;
    }

	
}