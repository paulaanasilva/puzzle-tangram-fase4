import Phaser from 'phaser';
import fitShape from './fitShape';


export default class CreateElements {
    private scene: Phaser.Scene;
    private fitObject: fitShape;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.fitObject = new fitShape(scene);
    }

    createSquare2(outlinedRect: Phaser.Geom.Rectangle) {
        const points = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 200 },
            { x: 0, y: 200 }
        ];

        // Calcular o centro 
        const centerX = (points[0].x + points[2].x) / 2;
        const centerY = (points[0].y + points[2].y) / 2;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const square = this.scene.add.polygon(350 + centerX, 100 + centerY, points, 0xB0E0E6).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        square.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    createSquare1(outlinedRect: Phaser.Geom.Rectangle) {
        const points = [
            { x: 0, y: 0 },
            { x: 100, y: 100 },
            { x: 100, y: 400 },
            { x: 0, y: 400 }
        ];

        // Calcular o centro 
        const centerX = (points[0].x + points[2].x) / 2;
        const centerY = (points[0].y + points[2].y) / 2;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const square = this.scene.add.polygon(100 + centerX, 100 + centerY, points, 0xFFDAB9).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        square.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    createTriangle1(outlinedRect: Phaser.Geom.Rectangle) {
        const points = [
            { x: 0, y: 0 },
            { x: 0, y: 100 },
            { x: 100, y: 100 }
        ];

        // Calcular o centro
        const centerX = (points[0].x + points[1].x + points[2].x) / 3;
        const centerY = (points[0].y + points[1].y + points[2].y) / 3;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const triangle = this.scene.add.polygon(250 + centerX, 100 + centerY, points, 0xFFA07A).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        triangle.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);

        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.fitObject.enablePartialFit(triangle, outlinedRect);

        return triangle;
    }

    
    createTriangle2(outlinedRect: Phaser.Geom.Rectangle) {
        const points = [
            { x: 0, y: 0 },
            { x: 0, y: 200 },
            { x: 200, y: 200 }
        ];

        // Calcular o centro
        const centerX = (points[0].x + points[1].x + points[2].x) / 3;
        const centerY = (points[0].y + points[1].y + points[2].y) / 3;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const triangle = this.scene.add.polygon(250 + centerX, 250 + centerY, points, 0xD8BFD8).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        triangle.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);

        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.fitObject.enablePartialFit(triangle, outlinedRect);

        return triangle;
    }


}