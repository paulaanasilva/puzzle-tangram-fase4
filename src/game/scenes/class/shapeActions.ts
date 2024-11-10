import Phaser from 'phaser';
import UpdateElements from './updateElements';

export default class ShapeActions {
    private scene: Phaser.Scene;
    private updateElements: UpdateElements;
    private rotationSpeed: number = 0.01; // Velocidade de rotação


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

    mouseRotateSelectedShape(pointer: Phaser.Input.Pointer,) {
        if (pointer.event.shiftKey && this.scene.selectedShape) {
            const targetAngle = Phaser.Math.Angle.Between(
                this.scene.selectedShape.x,
                this.scene.selectedShape.y,
                pointer.worldX,
                pointer.worldY
            );

            // Incrementa o ângulo de rotação gradualmente
            const currentAngle = this.scene.selectedShape.rotation;
            const deltaAngle = Phaser.Math.Angle.Wrap(targetAngle - currentAngle);
            this.scene.selectedShape.setRotation(currentAngle + deltaAngle * this.rotationSpeed);
        } 
    }
}