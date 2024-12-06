import Phaser from 'phaser';
import fitShape from './fitShape';

export default class CreateElements {
    private scene: Phaser.Scene;
    private fitObject: fitShape;
    
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.fitObject = new fitShape(scene);
    }

    //Utilizado somente no Level1
    createSquare2(outlinedRect: Phaser.Geom.Polygon) {
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

    //Utilizado somente no Level2
    createPolygonLevel2(outlinedRect: Phaser.Geom.Polygon) {
        const points = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 400, y: 200 },
            { x: 0, y: 200 }
        ];

        // Calcular o centro 
        const centerX = (points[0].x + points[2].x) / 2;
        const centerY = (points[0].y + points[2].y) / 2;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const square = this.scene.add.polygon(100 + centerX, 100 + centerY, points, 0xB22222).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        square.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    //Utilizado somente no Level2
    createSquareLevel2(outlinedRect: Phaser.Geom.Polygon) {
        const points = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 100 },
            { x: 0, y: 100 }
        ];

        // Calcular o centro 
        const centerX = (points[0].x + points[2].x) / 2;
        const centerY = (points[0].y + points[2].y) / 2;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const square = this.scene.add.polygon(100 + centerX, 100 + centerY, points, 0xFF6347).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        square.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);
        this.scene.input.setDraggable(square);

        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });

        this.fitObject.enablePartialFit(square, outlinedRect);

        return square;
    }

    //Utilizado somente no Level1
    createSquare1(outlinedRect: Phaser.Geom.Polygon) {
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

    //Utilizado no Level1 e Level2
    createTriangle1(outlinedRect: Phaser.Geom.Polygon) {
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

    //Utilizado somente no Level2
    createTriangleLevel2(outlinedRect: Phaser.Geom.Polygon) {
        const points = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 300, y: 200 }
        ];

        // Calcular o centro
        const centerX = (points[0].x + points[1].x + points[2].x) / 3;
        const centerY = (points[0].y + points[1].y + points[2].y) / 3;

        // Ajustar a posição do polígono para que ele gire em torno do centro
        const triangle = this.scene.add.polygon(250 + centerX, 100 + centerY, points, 0x9967A).setOrigin(0.5, 0.5);
        const hitArea = new Phaser.Geom.Polygon(points);
        triangle.setInteractive(hitArea, Phaser.Geom.Polygon.Contains);

        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        this.fitObject.enablePartialFit(triangle, outlinedRect);

        return triangle;
    }

    //Utilizado somente no Level1
    createTriangle2(outlinedRect: Phaser.Geom.Polygon) {
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