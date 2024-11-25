import Phaser from 'phaser';
export default class ShapeActions {
    private scene: Phaser.Scene;
    private rotationSpeed: number = 0.01; // Velocidade de rotação


    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    deselectShape() {
        this.scene.selectedShape = null;
        if (this.scene.selectionOutline) {
            this.scene.selectionOutline.clear();
        }
    }

    rotateSelectedShapeRight() {
        if (this.scene.selectedShape) {
            this.scene.selectedShape.rotation -= Phaser.Math.DegToRad(10);
        }
    }

    rotateSelectedShapeLeft() {
        if (this.scene.selectedShape) {
            this.scene.selectedShape.rotation += Phaser.Math.DegToRad(10);
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