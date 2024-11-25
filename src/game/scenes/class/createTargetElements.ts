import Phaser from 'phaser';

export default class CreateTargetElements {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createDefaultOutlinedSquare() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0x000000); // Define a cor e a espessura do contorno
        graphics.strokeRect(100, 100, 400, 400); // Desenha o contorno do retângulo

        const rect = new Phaser.Geom.Rectangle(100, 100, 400, 400);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

}