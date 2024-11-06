import { Scene } from 'phaser';

import { selectShape, deselectShape, rotateSelectedShape } from './shapeActions';

export function updateSelectionOutline(scene: Scene) {
    if (scene.selectionOutline) {
        scene.selectionOutline.clear();
        if (scene.selectedShape) {
            scene.selectionOutline.lineStyle(2, 0xffff00);
            scene.selectionOutline.strokeRect(
                scene.selectedShape.x - scene.selectedShape.width * scene.selectedShape.scaleX / 2,
                scene.selectedShape.y - scene.selectedShape.height * scene.selectedShape.scaleY / 2,
                scene.selectedShape.width * scene.selectedShape.scaleX,
                scene.selectedShape.height * scene.selectedShape.scaleY
            );
        }
    }
}