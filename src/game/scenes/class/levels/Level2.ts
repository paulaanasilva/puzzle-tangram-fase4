// src/game/scenes/class/levels/Level2.ts
import { BaseScene } from '../../BaseScene';
import CreateElements from '../createElements';
import CreateTargetElements from '../createTargetElements';
import ShapeActions from '../shapeActions';
import InputHandler from '../inputHandler';

export class Level2 extends BaseScene {
    createElements: CreateElements;
    createTargetElements: CreateTargetElements;
    shapeActions: ShapeActions;
    inputHandler: InputHandler;
    defaultOutlinedSquare: Phaser.GameObjects.Rectangle;

    constructor() {
        super('Level2');
        this.createElements = new CreateElements(this);
        this.createTargetElements = new CreateTargetElements(this);
        this.shapeActions = new ShapeActions(this);
        this.inputHandler = new InputHandler(this, this.shapeActions);
    }

    create() {
        super.create();

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