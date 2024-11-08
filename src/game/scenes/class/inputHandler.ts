import Phaser from 'phaser';
import ShapeActions from './shapeActions';

export default class InputHandler {
    private scene: Phaser.Scene;
    private shapeActions: ShapeActions;

    constructor(scene: Phaser.Scene, shapeActions: ShapeActions) {
        this.scene = scene;
        this.shapeActions = shapeActions;
    }

    setupInputHandlers() {
        this.scene.input.on('drag', this.handleDrag, this);
        this.scene.input.on('pointerdown', this.handlePointerDown, this);
        this.scene.input.on('pointermove', this.handlePointerMove, this);
    }

    private handleDrag(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }

    private handlePointerDown(_: Phaser.Input.Pointer, currentlyOver: Phaser.GameObjects.GameObject[]) {
        if (currentlyOver.length === 0) {
            this.shapeActions.deselectShape();
        }
    }

    private handlePointerMove(pointer: Phaser.Input.Pointer) {
        this.shapeActions.mouseRotateSelectedShape(pointer);
    }
}