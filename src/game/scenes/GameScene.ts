import { Scene } from 'phaser';
import UpdateElements from './class/updateElements';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';

export class GameScene extends Scene {

    updateElements: UpdateElements;
	createElements: CreateElements;
	shapeActions: ShapeActions;


	triangle: Phaser.GameObjects.Image;
	retangulo: Phaser.GameObjects.Image;
	selectedShape: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;

	constructor() {
		super('GameScene');
        this.updateElements = new UpdateElements();
		this.createElements = new CreateElements(this, this.updateElements);
		this.shapeActions = new ShapeActions(this, this.updateElements);
	}

	preload() {
		this.load.image('sky', 'assets/sky.png')
		this.load.image('triangulo', 'assets/triangulo.png')
		this.load.image('retangulo', 'assets/retangulo.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		this.triangle = this.createElements.createTriangle();
		this.retangulo = this.createElements.createRetangulo();

		this.createElements.createButton(400, 500, 'Clique Aqui', () => {
			this.shapeActions.rotateSelectedShape();
		});

		this.selectionOutline = this.add.graphics();

		this.input.on('pointerdown', (_, currentlyOver: Phaser.GameObjects.GameObject[]) => {
			if (currentlyOver.length === 0) {
				this.shapeActions.deselectShape();
			}
		});
	}

}
