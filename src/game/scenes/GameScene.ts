import { Scene } from 'phaser';
import CreateElements from './class/createElements';
import ShapeActions from './class/shapeActions';
import InputHandler from './class/inputHandler';
import CreateTargetElements from './class/createTargetElements';
import { BaseScene } from './BaseScene';

export class GameScene extends BaseScene {
	createElements: CreateElements;
	createTargetElements: CreateTargetElements;
	shapeActions: ShapeActions;
	inputHandler: InputHandler;
	defaultOutlinedSquare: Phaser.GameObjects.Rectangle;

	constructor() {
		super('GameScene');
		this.createElements = new CreateElements(this);
		this.createTargetElements = new CreateTargetElements(this);
		this.shapeActions = new ShapeActions(this);
		this.inputHandler = new InputHandler(this, this.shapeActions);
	}

	create() {
		super.create();

		//Criou o quadrado destino
		this.defaultOutlinedSquare = this.createTargetElements.createDefaultOutlinedSquare();

        this.createElements.createTriangle(this.defaultOutlinedSquare.rect);
        this.createElements.createSquare(this.defaultOutlinedSquare.rect);
		this.createElements.createTrapezoid(this.defaultOutlinedSquare.rect);

		// Essa linha que permite fazer a movimentação dos objetos
		this.inputHandler.setupInputHandlers();


		//this.selectionOutline = this.add.graphics();
		
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
