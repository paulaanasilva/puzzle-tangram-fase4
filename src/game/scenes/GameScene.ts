import { Scene } from 'phaser';
import UpdateElements from './class/updateElements';

export class GameScene extends Scene {

    updateElements: UpdateElements;

	triangle: Phaser.GameObjects.Image;
	retangulo: Phaser.GameObjects.Image;
	selectedShape: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;

	constructor() {
		super('GameScene');
        this.updateElements = new UpdateElements();
	}

	preload() {
		this.load.image('sky', 'assets/sky.png')
		this.load.image('triangulo', 'assets/triangulo.png')
		this.load.image('retangulo', 'assets/retangulo.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		this.triangle = this.createTriangle();
		this.retangulo = this.createRetangulo();

		this.createButton(400, 500, 'Clique Aqui', () => {
			this.rotateSelectedShape();
		});

		this.selectionOutline = this.add.graphics();

		this.input.on('pointerdown', (pointer, currentlyOver) => {
			if (currentlyOver.length === 0) {
				this.deselectShape();
			}
		});
	}

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

	createTriangle() {
		const triangle = this.add.image(200, 100, 'triangulo');
		triangle.setScale(0.5);
		triangle.setInteractive();
		this.input.setDraggable(triangle);

		triangle.on('pointerdown', () => {
			this.selectedShape = triangle;
		});

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			gameObject.x = dragX;
			gameObject.y = dragY;
			this.updateElements.updateSelectionOutline(this.selectedShape, this.selectionOutline);
		});

		return triangle;
	}

	createRetangulo() {
		const retangulo = this.add.image(400, 100, 'retangulo');
		retangulo.setScale(0.5);
		retangulo.setInteractive();
		this.input.setDraggable(retangulo);

		retangulo.on('pointerdown', () => {
			this.selectedShape = retangulo;
		});

		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			gameObject.x = dragX;
			gameObject.y = dragY;
			this.updateElements.updateSelectionOutline(this.selectedShape, this.selectionOutline);
		});

		return retangulo;
	}

	selectShape(shape: Phaser.GameObjects.Image) {
		this.selectedShape = shape;
		this.updateElements.updateSelectionOutline(this.selectedShape, this.selectionOutline);
	}

	deselectShape() {
        this.selectedShape = null;
        if (this.selectionOutline) {
            this.selectionOutline.clear();
        }
    }

	rotateSelectedShape() {
		if (this.selectedShape) {
			this.selectedShape.rotation += Phaser.Math.DegToRad(90);
			this.updateElements.updateSelectionOutline(this.selectedShape, this.selectionOutline);
		}
	}

}
