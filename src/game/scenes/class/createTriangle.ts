import Phaser from 'phaser';

export default class CreateTriangle {
    private scene: Phaser.Scene;
    private selectedShape: Phaser.GameObjects.Image;
    private selectionOutline: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createTriangle() {
        const triangle = this.scene.add.image(200, 100, 'triangulo');
        triangle.setScale(0.5);
        triangle.setInteractive();
        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.selectedShape = triangle;
        });

        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            this.updateSelectionOutline();
        });

        return triangle;
    }

    private updateSelectionOutline() {
		if (this.selectionOutline && this.selectedShape) {
			this.selectionOutline.clear();
			this.selectionOutline.lineStyle(2, 0xff0000);

			const rect = new Phaser.Geom.Rectangle(
				-this.selectedShape.displayWidth / 2,
				-this.selectedShape.displayHeight / 2,
				this.selectedShape.displayWidth,
				this.selectedShape.displayHeight
			);

			this.selectionOutline.strokeRectShape(rect);
			this.selectionOutline.setPosition(this.selectedShape.x, this.selectedShape.y);
			this.selectionOutline.setRotation(this.selectedShape.rotation);
		} else if (this.selectionOutline) {
            this.selectionOutline.clear();
        }
	}
}