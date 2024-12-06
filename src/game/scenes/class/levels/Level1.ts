// src/game/scenes/class/levels/Level1.ts
import { BaseScene } from '../../BaseScene';
import CreateElements from '../createElements';
import positionValidation from '../positionValidation';
import CreateTargetElements from '../createTargetElements';
import ShapeActions from '../shapeActions';
import InputHandler from '../inputHandler';
import showModal from '../showModal';


export class Level1 extends BaseScene {
    modalContainer: Phaser.GameObjects.Container;
    closeModalKey: Phaser.Input.Keyboard.Key;
    createElements: CreateElements;
    createTargetElements: CreateTargetElements;
    positionValidation: positionValidation;
    shapeActions: ShapeActions;
    inputHandler: InputHandler;
    createTargetOutlined: Phaser.Geom.Polygon;
    square1: Phaser.GameObjects.Polygon;
    square2: Phaser.GameObjects.Polygon;
    triangle1: Phaser.GameObjects.Polygon;
    triangle2: Phaser.GameObjects.Polygon;
    showModal: showModal;


    constructor() {
        super('Level1');
        this.createElements = new CreateElements(this);
        this.createTargetElements = new CreateTargetElements(this);
        this.positionValidation = new positionValidation(this);
        this.shapeActions = new ShapeActions(this);
        this.inputHandler = new InputHandler(this, this.shapeActions);
        this.showModal = new showModal(this);
    }

    create() {
        super.create();

        //Desenha as 4 peças do tangrm - nível 1
        this.square1 = this.createElements.createSquare1(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.square1);

        this.square2 = this.createElements.createSquare2(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.square2);

        this.triangle1 = this.createElements.createTriangle1(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.triangle1);

        this.triangle2 = this.createElements.createTriangle2(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.triangle2);

        this.inputHandler.setupInputHandlers();

        // Adiciona um botão para finalizar a fase (apenas para exemplo)
        const finishButton = this.add.text(100, 100, 'Finalizar Fase', { font: '24px Arial', fill: '#ffffff' }).setInteractive();
        finishButton.on('pointerdown', () => {
            this.showModal.showModal();
        });

        /*
        for (let x = 0; x < this.scale.width; x += 50) {
            for (let y = 0; y < this.scale.height; y += 50) {
                const dot = this.add.circle(x, y, 2, 0x000000);
                dot.setScrollFactor(0);
            }
        }
        */
    }
   
}