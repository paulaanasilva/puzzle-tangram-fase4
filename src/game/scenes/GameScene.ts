import { Scene } from 'phaser';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';
import InputHandler from './class/inputHandler';
import Background from './class/background';



export class GameScene extends Scene {
	createElements: CreateElements;
	shapeActions: ShapeActions;
	inputHandler: InputHandler;
	background: Background;
	defaultOutlinedSquare: Phaser.GameObjects.Rectangle;
	botaoGirar: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;

	constructor() {
		super('GameScene');
		this.createElements = new CreateElements(this);
		this.shapeActions = new ShapeActions(this);
		this.inputHandler = new InputHandler(this, this.shapeActions);
		this.background = new Background(this);
	}

	preload() {
		this.load.image('mosaic', 'assets/mosaic.jpg');
		this.load.image('GirarObjeto', 'assets/GirarObjetos.png');
	}

	create() {
		this.background.createBackground();

		//Criou o quadrado destino
		this.defaultOutlinedSquare = this.createElements.createDefaultOutlinedSquare();

        this.createElements.createTriangle(this.defaultOutlinedSquare.rect);
        this.createElements.createSquare(this.defaultOutlinedSquare.rect);
		this.createElements.createTrapezoid(this.defaultOutlinedSquare.rect);

		const buttonX = this.scale.width * 0.9; // 100 pixels da borda direita
		const buttonY = this.scale.height * 0.9; // 100 pixels da borda inferior

		this.botaoGirar = this.createElements.createButton(1300, 500, () => {
			this.shapeActions.rotateSelectedShape();
		});

		this.selectionOutline = this.add.graphics();

		
		this.inputHandler.setupInputHandlers();

		// Adicione um listener para redimensionamento da tela
		this.scale.on('resize', this.resize, this);

		// Create dots every 100px in X and Y
		for (let x = 0; x < this.scale.width; x += 50) {
			for (let y = 0; y < this.scale.height; y += 50) {
				const dot = this.add.circle(x, y, 2, 0x000000);
				dot.setScrollFactor(0);
			}
		}

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
