import { Scene } from 'phaser';
import ScoreLabel from '../ui/ScoreLabel';
import BombSpawner from './BombSpawner';


const GROUND_KEY = 'ground'
const DUDE_KEY = 'dude'
const STAR_KEY = 'star'
const BOMB_KEY = 'bomb'

export class GameScene extends Scene {
	triangle: Phaser.GameObjects.Image;
	retangulo: Phaser.GameObjects.Image;
	selectedShape: Phaser.GameObjects.Image | null = null;
	selectionOutline: Phaser.GameObjects.Graphics | null = null;

	constructor() {
		super('GameScene');
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

		// Adiciona evento de clique na cena para desmarcar a seleção
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
			this.updateSelectionOutline();
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
			this.updateSelectionOutline();
		});

		return retangulo;
	}

	selectShape(shape: Phaser.GameObjects.Image) {
		this.selectedShape = shape;
		this.updateSelectionOutline();
	}

	deselectShape() {
        this.selectedShape = null;
        if (this.selectionOutline) {
            this.selectionOutline.clear();
        }
    }

	updateSelectionOutline() {
		if (this.selectionOutline && this.selectedShape) {
			this.selectionOutline.clear();
			this.selectionOutline.lineStyle(2, 0xff0000);

			const rect = new Phaser.Geom.Rectangle(
				-this.selectedShape.displayWidth / 2,
				-this.selectedShape.displayHeight / 2,
				this.selectedShape.displayWidth,
				this.selectedShape.displayHeight
			);

			this.selectionOutline.strokeRectShape(rect);
			this.selectionOutline.setPosition(this.selectedShape.x, this.selectedShape.y);
			this.selectionOutline.setRotation(this.selectedShape.rotation);
		} else if (this.selectionOutline) {
            this.selectionOutline.clear();
        }
	}

	rotateSelectedShape() {
		if (this.selectedShape) {
			this.selectedShape.rotation += Phaser.Math.DegToRad(90);
			this.updateSelectionOutline();
		}
	}

}
