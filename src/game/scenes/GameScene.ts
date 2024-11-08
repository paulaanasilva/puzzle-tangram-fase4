import { Scene } from 'phaser';
import UpdateElements from './class/updateElements';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';
import InputHandler from './class/inputHandler';


export class GameScene extends Scene {
    updateElements: UpdateElements;
	createElements: CreateElements;
	shapeActions: ShapeActions;
	inputHandler: InputHandler;


	trianglePhaser: Phaser.GameObjects.Triangle;
	square: Phaser.GameObjects.Rectangle;
	outlinedSquare: Phaser.GameObjects.Rectangle;
	triangle: Phaser.GameObjects.Image;
	retangulo: Phaser.GameObjects.Image;
	selectedShape: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;

	constructor() {
		super('GameScene');
        this.updateElements = new UpdateElements();
		this.createElements = new CreateElements(this, this.updateElements);
		this.shapeActions = new ShapeActions(this, this.updateElements);
		this.inputHandler = new InputHandler(this, this.shapeActions);
	}

	preload() {
		this.load.image('sky', 'assets/sky.png')
		this.load.image('triangulo', 'assets/triangulo.png')
		this.load.image('retangulo', 'assets/retangulo.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		//this.triangle = this.createElements.createTriangle();
		//this.retangulo = this.createElements.createRetangulo();
		this.trianglePhaser = this.createElements.createTrianglePhaser();
		//this.square = this.createElements.createSquare();
		//this.outlinedSquare = this.createElements.createOutlinedSquare();

		const outlinedSquare = this.createElements.createOutlinedSquare();
		this.square = this.createElements.createSquare(outlinedSquare.rect);

		this.createElements.createButton(400, 500, 'Clique Aqui', () => {
			this.shapeActions.rotateSelectedShape();
		});

		this.selectionOutline = this.add.graphics();

		this.inputHandler.setupInputHandlers();
	}
}
