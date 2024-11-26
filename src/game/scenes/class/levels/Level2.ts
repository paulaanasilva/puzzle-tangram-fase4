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
        this.defaultOutlinedSquare = this.createTargetElements.createDefaultOutlinedSquare();

        this.createElements.createTrapezoid(this.defaultOutlinedSquare.rect);

        this.inputHandler.setupInputHandlers();
    }
}