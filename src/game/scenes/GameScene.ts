import { Scene } from 'phaser';
import UpdateElements from './class/updateElements';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';
import InputHandler from './class/inputHandler';
import Background from './class/background';



export class GameScene extends Scene {
	updateElements: UpdateElements;
	createElements: CreateElements;
	shapeActions: ShapeActions;
	inputHandler: InputHandler;
	background: Background;
	trianglePhaser: Phaser.GameObjects.Triangle;
	square: Phaser.GameObjects.Rectangle;
	outlinedSquare: Phaser.GameObjects.Rectangle;
	outlinedSquare2: Phaser.GameObjects.Rectangle;
	triangle: Phaser.GameObjects.Image;
	retangulo: Phaser.GameObjects.Image;
	botaoGirar: Phaser.GameObjects.Image;
	selectedShape: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;

	constructor() {
		super('GameScene');
		this.updateElements = new UpdateElements();
		this.createElements = new CreateElements(this, this.updateElements);
		this.shapeActions = new ShapeActions(this, this.updateElements);
		this.inputHandler = new InputHandler(this, this.shapeActions);
		this.background = new Background(this);
	}

	preload() {
		this.load.image('sky', 'assets/sky.png')
		this.load.image('triangulo', 'assets/triangulo.png')
		this.load.image('retangulo', 'assets/retangulo.png')
		this.load.image('mosaic', 'assets/mosaic.jpg')
		this.load.image('GirarObjeto', 'assets/GirarObjetos.png');
	}

	create() {
		this.background.createBackground();

        this.outlinedSquare = this.createElements.createOutlinedSquare();
        this.outlinedSquare2 = this.createElements.createOutlinedSquare2();

        this.square = this.createElements.createSquare([this.outlinedSquare.rect, this.outlinedSquare2.rect]);
		this.square = this.createElements.createSquare([this.outlinedSquare.rect, this.outlinedSquare2.rect]);



		const buttonX = this.scale.width * 0.9; // 100 pixels da borda direita
		const buttonY = this.scale.height * 0.9; // 100 pixels da borda inferior

		this.botaoGirar = this.createElements.createButton(1300, 500, () => {
			this.shapeActions.rotateSelectedShape();
		});

		this.selectionOutline = this.add.graphics();

		this.inputHandler.setupInputHandlers();

		// Adicione um listener para redimensionamento da tela
		this.scale.on('resize', this.resize, this);
	}

	resize(gameSize: Phaser.Structs.Size) {
		const width = gameSize.width;
		const height = gameSize.height;

		const buttonX = width * 0.9; // 100 pixels da borda direita
		const buttonY = height * 0.9; // 100 pixels da borda inferior

		if (this.botaoGirar) {
			this.botaoGirar.setPosition(buttonX, buttonY);
		}
	}									
}
