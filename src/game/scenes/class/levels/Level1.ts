// src/game/scenes/class/levels/Level1.ts
import { BaseScene } from '../../BaseScene';
import CreateElements from '../createElements';
import CreateTargetElements from '../createTargetElements';
import ShapeActions from '../shapeActions';
import InputHandler from '../inputHandler';

export class Level1 extends BaseScene {
    createElements: CreateElements;
    createTargetElements: CreateTargetElements;
    shapeActions: ShapeActions;
    inputHandler: InputHandler;
    createTargetOutlined: Phaser.Geom.Polygon;

    constructor() {
        super('Level1');
        this.createElements = new CreateElements(this);
        this.createTargetElements = new CreateTargetElements(this);
        this.shapeActions = new ShapeActions(this);
        this.inputHandler = new InputHandler(this, this.shapeActions);
    }

    create() {
        super.create();
        
        this.createTargetOutlined = this.createTargetElements.createTargetOutlined();
        //FFA07A

        this.createElements.createTriangle(this.createTargetOutlined.rect);
        this.createElements.createSquare(this.createTargetOutlined.rect);
        this.createElements.createTrapezoid(this.createTargetOutlined.rect);
        this.createElements.createTriangle2(this.createTargetOutlined.rect);



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