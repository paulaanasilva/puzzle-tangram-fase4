import { Scene } from 'phaser';
import UpdateElements from './class/updateElements';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';

export class GameScene extends Scene {

    updateElements: UpdateElements;
	createElements: CreateElements;
	shapeActions: ShapeActions;

	trianglePhaser: Phaser.GameObjects.Triangle;
	square: Phaser.GameObjects.Rectangle;
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
		this.load.image('girar', 'assets/girar.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		const roda = this.add.image(600, 400, 'girar').setScale(0.5)
		roda.setInteractive()

		this.input.on('pointermove', pointer => {
			if (!pointer.isDown) {
				const angle = Phaser.Math.Angle.Between(roda.x, roda.y, pointer.worldX, pointer.worldY);
				roda.setRotation(angle);
			}
		});


		this.triangle = this.createElements.createTriangle();
		this.retangulo = this.createElements.createRetangulo();
		this.trianglePhaser = this.createElements.createTrianglePhaser();
		this.square = this.createElements.createSquare();

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
