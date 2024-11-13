import Phaser from 'phaser';
import UpdateElements from './updateElements';
import fitShape from './fitShape';


export default class CreateElements {
    private scene: Phaser.Scene;
    private updateElements: UpdateElements;


    constructor(scene: Phaser.Scene, updateElements: UpdateElements) {
        this.scene = scene;
        this.updateElements = updateElements;
    }

    createOutlinedSquare() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xff69b4); // Define a cor e a espessura do contorno
        graphics.strokeRect(300, 400, 200, 100); // Desenha o contorno do retângulo

        const rect = new Phaser.Geom.Rectangle(300, 400, 200, 100);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

    createOutlinedSquare2() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xff69b4); // Define a cor e a espessura do contorno
        graphics.strokeRect(150, 200, 300, 200); // Desenha o contorno do retângulo

        const rect = new Phaser.Geom.Rectangle(150, 200, 300, 200);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

    createSquare(outlinedRects: Phaser.Geom.Rectangle[]) {
        const square = this.scene.add.rectangle(300, 400, 200, 100, 0xff69b4);
        square.setInteractive();
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        const fitObject = new fitShape(this.scene);
        fitObject.enablePartialFit(square, outlinedRects);

        return square;
    }

    createButton(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'GirarObjeto');
        button.setScale(0.1);
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }

    /*
    createTrianglePhaser() {
        const triangle = this.scene.add.triangle(200, 100, 0, 0, 100, 0, 50, 100, 0xff69b4);
        triangle.setInteractive();
        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        return triangle;
    }

    createTriangle() {
        const triangle = this.scene.add.image(200, 100, 'triangulo');
        triangle.setScale(0.5);
        triangle.setInteractive();
        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        return triangle;
    }

    createRetangulo() {
        const retangulo = this.scene.add.image(400, 100, 'retangulo');
        retangulo.setScale(0.5);
        retangulo.setInteractive();
        this.scene.input.setDraggable(retangulo);

        retangulo.on('pointerdown', () => {
            this.scene.selectedShape = retangulo;
        });

        return retangulo;
    }


    */
}