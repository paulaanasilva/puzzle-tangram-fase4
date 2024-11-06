export function funcTeste(): void {
    console.log("funcTeste has been called!");
}

export function createTri (tri: Phaser.GameObjects.Image, name: string) {

    tri = this.add.image(200, 100, name);

    tri.setScale(0.5);
    tri.setInteractive();
    this.input.setDraggable(tri);

    tri.on('pointerdown', () => {
        this.selectedShape = tri;
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
        this.updateSelectionOutline();
    });

    return tri;
}