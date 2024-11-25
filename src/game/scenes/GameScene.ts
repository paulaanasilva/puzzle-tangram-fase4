import { Scene } from 'phaser';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';
import InputHandler from './class/inputHandler';
import Background from './class/background';
import createButton from './class/createButton';
import createTargetElements from './class/createTargetElements';



export class GameScene extends Scene {
	createButton: createButton;
	createElements: CreateElements;
	shapeActions: ShapeActions;
	inputHandler: InputHandler;
	background: Background;
	defaultOutlinedSquare: Phaser.GameObjects.Rectangle;
	botaoGirar: Phaser.GameObjects.Image;
	selectionOutline: Phaser.GameObjects.Graphics;
	createTargetElements: createTargetElements;

	constructor() {
		super('GameScene');
		this.createElements = new CreateElements(this);
		this.createTargetElements = new createTargetElements(this);
		this.createButton = new createButton(this);
		this.shapeActions = new ShapeActions(this);
		this.inputHandler = new InputHandler(this, this.shapeActions);
		this.background = new Background(this);
	}

	preload() {
		this.load.image('mosaic', 'assets/mosaic.jpg');
		this.load.image('GirarObjeto', 'assets/GirarObjetos.png');
		this.load.image('giraEsquerda', 'assets/giro10grausEsquerda.png');
		this.load.image('giraDireita', 'assets/giro10grausDireita.png');
	}

	create() {
		this.background.createBackground();

		//Criou o quadrado destino
		this.defaultOutlinedSquare = this.createTargetElements.createDefaultOutlinedSquare();

        this.createElements.createTriangle(this.defaultOutlinedSquare.rect);
        this.createElements.createSquare(this.defaultOutlinedSquare.rect);
		this.createElements.createTrapezoid(this.defaultOutlinedSquare.rect);

		// Botão para girar objetos
		this.botaoGirar = this.createButton.createButtonRight(1400, 600, () => {
			this.shapeActions.rotateSelectedShapeRight();
		});

		this.botaoGirar = this.createButton.createButtonLeft(1250, 600, () => {
			this.shapeActions.rotateSelectedShapeLeft();
		});

		this.selectionOutline = this.add.graphics();

		
		// Essa linha que permite fazer a movimentação dos objetos
		this.inputHandler.setupInputHandlers();

		// Adicione um listener para redimensionamento da tela
		//this.scale.on('resize', this.resize, this);

		/*
		// Cria pontos a cada 50px na tela
		for (let x = 0; x < this.scale.width; x += 50) {
			for (let y = 0; y < this.scale.height; y += 50) {
				const dot = this.add.circle(x, y, 2, 0x000000);
				dot.setScrollFactor(0);
			}
		}
		*/

	}

	/*
	resize(gameSize: Phaser.Structs.Size) {
		const width = gameSize.width;
		const height = gameSize.height;

		const buttonX = width * 0.9; // 100 pixels da borda direita
		const buttonY = height * 0.9; // 100 pixels da borda inferior

		if (this.botaoGirar) {
			this.botaoGirar.setPosition(buttonX, buttonY);
		}
	}
	*/									
}
