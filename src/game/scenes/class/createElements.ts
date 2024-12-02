import Phaser from 'phaser';
import fitShape from './fitShape';


export default class CreateElements {
    private scene: Phaser.Scene;
    private fitObject: fitShape;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.fitObject = new fitShape(scene);
    }
   
    //Criar um quadrado
    createSquare(outlinedRect: Phaser.Geom.Rectangle) {
        const square = this.scene.add.rectangle(280, 50, 200, 200, 0xFF00FF).setOrigin(0, 0); // Ajusta a posição para (250, 50)
        const hitArea = new Phaser.Geom.Rectangle(0, 0, 200, 200);
        square.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains);

        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    createTriangle(outlinedRect: Phaser.Geom.Rectangle) {
        const triangle = this.scene.add.triangle(50, 50, 100, 100, 300, 300, 300, 100, 0xF08080);
        const hitArea = new Phaser.Geom.Triangle(100, 100, 300, 300, 300, 100);
        triangle.setInteractive(hitArea, Phaser.Geom.Triangle.Contains);

        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.fitObject.enablePartialFit(triangle, outlinedRect);

        return triangle;
    }

    createTriangle2(outlinedRect: Phaser.Geom.Rectangle) {
        const triangle = this.scene.add.triangle(50, 280, 100, 100, 300, 300, 300, 100, 0xFFA07A).setOrigin(0.5, 0.5);;
        const hitArea = new Phaser.Geom.Triangle(0, 0, 300, 300, 300, 100);
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
            { x: 100, y: 0 },    // Ponto superior esquerdo
            { x: 100, y: 200 },  // Ponto superior direito
            { x: -100, y: 0 },   // Ponto inferior direito
            { x: -100, y: -200 } // Ponto inferior esquerdo
        ];
        const trapezoid = this.scene.add.polygon(150, 500, points, 0xff69b4).setOrigin(0, 0);
        const hitArea = new Phaser.Geom.Polygon(points);
        trapezoid.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(trapezoid);

        trapezoid.on('pointerdown', () => {
            this.scene.selectedShape = trapezoid;
        });

        this.fitObject.enablePartialFit(trapezoid, outlinedRect);

        return trapezoid;
    }
    
}