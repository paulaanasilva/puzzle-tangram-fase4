import Phaser from 'phaser';
import fitShape from './fitShape';


export default class CreateElements {
    private scene: Phaser.Scene;
    private fitObject: fitShape;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.fitObject = new fitShape(scene);
    }

    createDefaultOutlinedSquare() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0x000000); // Define a cor e a espessura do contorno
        graphics.strokeRect(100, 100, 400, 400); // Desenha o contorno do retângulo

        const rect = new Phaser.Geom.Rectangle(100, 100, 400, 400);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

    createOutlinedSquare() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0x000000); // Define a cor e a espessura do contorno
        graphics.strokeRect(300, 100, 200, 200); // Desenha o contorno do retângulo

        const rect = new Phaser.Geom.Rectangle(300, 100, 200, 200);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

    createOutlinedTriangle() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0x000000); // Define a cor e a espessura do contorno

        // Coordenadas dos vértices do triângulo
        //As coordenadas x aumentam para a direita e as coordenadas y aumentam para baixo
        const x1 = 100, y1 = 100;
        const x2 = 300, y2 = 300;
        const x3 = 300, y3 = 100;

        // Desenha o contorno do triângulo
        graphics.strokeTriangle(x1, y1, x2, y2, x3, y3);

        // Cria um objeto de triângulo geométrico para interatividade
        const triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);
        graphics.setInteractive(triangle, Phaser.Geom.Triangle.Contains);

        return { graphics, triangle };
    }

    //Criar um quadrado
    createSquare(outlinedRect: Phaser.Geom.Rectangle) {
        const square = this.scene.add.rectangle(700, 100, 200, 200, 0xff69b4);
        square.setInteractive();
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    createTriangle(outlinedRect: Phaser.Geom.Rectangle) {
        const triangle = this.scene.add.triangle(900, 100, 100, 100, 300, 300, 300, 100, 0xff69b4);
        const hitArea = new Phaser.Geom.Triangle(100, 100, 300, 300, 300, 100);
        triangle.setInteractive(hitArea, Phaser.Geom.Triangle.Contains);

        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.fitObject.enablePartialFit(triangle, outlinedRect);


        return triangle;
    }

    createTrapezoid(outlinedRect: Phaser.Geom.Rectangle) {
        const points = [
            { x: 0, y: -100 },   // Ponto superior esquerdo
            { x: 200, y: -100 }, // Ponto superior direito
            { x: 0, y: 100 },    // Ponto inferior direito
            { x: -200, y: 100 }  // Ponto inferior esquerdo
        ];
        const trapezoid = this.scene.add.polygon(1000, 500, points, 0xff69b4);
        const hitArea = new Phaser.Geom.Polygon(points);
        trapezoid.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(trapezoid);

        trapezoid.on('pointerdown', () => {
            this.scene.selectedShape = trapezoid;
        });

        this.fitObject.enablePartialFit(trapezoid, outlinedRect);

        return trapezoid;
    }


    createButton(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'GirarObjeto');
        button.setScale(0.1);
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }
}