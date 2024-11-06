import { Scene } from 'phaser';


export default class UpdateElements {
    updateSelectionOutline(selectedShape: Phaser.GameObjects.Image, selectionOutline: Phaser.GameObjects.Graphics) {
        if (selectionOutline && selectedShape) {
            selectionOutline.clear();
            selectionOutline.lineStyle(2, 0xff0000);

            const rect = new Phaser.Geom.Rectangle(
                -selectedShape.displayWidth / 2,
                -selectedShape.displayHeight / 2,
                selectedShape.displayWidth,
                selectedShape.displayHeight
            );

            selectionOutline.strokeRectShape(rect);
            selectionOutline.setPosition(selectedShape.x, selectedShape.y);
            selectionOutline.setRotation(selectedShape.rotation);
        } else if (selectionOutline) {
            selectionOutline.clear();
        }
    }
}