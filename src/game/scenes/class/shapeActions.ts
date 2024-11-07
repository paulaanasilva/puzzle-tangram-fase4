// src/game/scenes/class/ShapeActions.ts
import Phaser from 'phaser';
import UpdateElements from './updateElements';

export default class ShapeActions {
    private scene: Phaser.Scene;
    private updateElements: UpdateElements;

    constructor(scene: Phaser.Scene, updateElements: UpdateElements) {
        this.scene = scene;
        this.updateElements = updateElements;
    }

    deselectShape() {
        this.scene.selectedShape = null;
        if (this.scene.selectionOutline) {
            this.scene.selectionOutline.clear();
        }
    }

    rotateSelectedShape() {
        if (this.scene.selectedShape) {
            this.scene.selectedShape.rotation += Phaser.Math.DegToRad(90);
            this.updateElements.updateSelectionOutline(this.scene.selectedShape, this.scene.selectionOutline);
        }
    }

    mouseRotateSelectedShape(pointer: Phaser.Input.Pointer) {
        if (pointer.isDown && pointer.event.shiftKey && this.scene.selectedShape) {
            const angle = Phaser.Math.Angle.Between(
                this.scene.selectedShape.x,
                this.scene.selectedShape.y,
                pointer.worldX,
                pointer.worldY
            );
            this.scene.selectedShape.setRotation(angle);
            this.updateElements.updateSelectionOutline(this.scene.selectedShape, this.scene.selectionOutline);
        
        }
    }
}