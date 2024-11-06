import { Scene } from 'phaser';

export function selectShape(scene: Scene, shape: Phaser.GameObjects.Image) {
    scene.selectedShape = shape;
    scene.updateSelectionOutline();
}

export function deselectShape(scene: Scene) {
    scene.selectedShape = null;
    scene.updateSelectionOutline();
}

export function rotateSelectedShape(scene: Scene) {
    if (scene.selectedShape) {
        scene.selectedShape.angle += 15;
    }
}