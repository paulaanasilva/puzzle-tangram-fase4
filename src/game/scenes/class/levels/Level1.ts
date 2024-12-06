// src/game/scenes/class/levels/Level1.ts
import { BaseScene } from '../../BaseScene';
import CreateElements from '../createElements';
import positionValidation from '../positionValidation';
import CreateTargetElements from '../createTargetElements';
import ShapeActions from '../shapeActions';
import InputHandler from '../inputHandler';


export class Level1 extends BaseScene {
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


    constructor() {
        super('Level1');
        this.createElements = new CreateElements(this);
        this.createTargetElements = new CreateTargetElements(this);
        this.positionValidation = new positionValidation(this);
        this.shapeActions = new ShapeActions(this);
        this.inputHandler = new InputHandler(this, this.shapeActions);
    }

    create() {
        super.create();
        
        this.square1 = this.createElements.createSquare1(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.square1);

        this.square2 = this.createElements.createSquare2(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.square2);

        this.triangle1 = this.createElements.createTriangle1(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.triangle1);

        this.triangle2 = this.createElements.createTriangle2(this.createTargetOutlined.rect);
        this.positionValidation.addShape(this.triangle2);

        this.inputHandler.setupInputHandlers();
        
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