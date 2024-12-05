import Phaser from 'phaser';
import fitShape from './fitShape';


export default class CreateElements {
    private scene: Phaser.Scene;
    private fitObject: fitShape;
    private shapes: Phaser.GameObjects.Polygon[];

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.fitObject = new fitShape(scene);
        this.shapes = [];
    }

    removeDuplicatePoints(points: { x: number, y: number }[]): { x: number, y: number }[] {
        const uniquePoints = points.filter((point, index, self) =>
            index === self.findIndex((p) => Math.abs(p.x - point.x) < 1 && Math.abs(p.y - point.y) < 1)
        );
        return uniquePoints;
    }

    getShapePointsPositions(shape: Phaser.GameObjects.Polygon): { x: number, y: number }[] {
        const points = shape.geom.points;
        const positions = points.map(point => ({
            x: shape.x + point.x - shape.displayOriginX,
            y: shape.y + point.y - shape.displayOriginY
        }));
        return positions;
    }

    isShapeInCorrectPosition(shapePoints: { x: number, y: number }[], destinationPoints: { x: number, y: number }[]): boolean {
        const tolerance = 10; // Tolerância de 10 pixels

        const uniqueShapePoints = this.removeDuplicatePoints(shapePoints);
        const uniqueDestinationPoints = this.removeDuplicatePoints(destinationPoints);
        
        console.log('Pontos da forma antes de remover duplicados:', shapePoints);
        console.log('Pontos da forma após remover duplicados:', uniqueShapePoints);
        console.log('Pontos de destino após remover duplicados:', uniqueDestinationPoints);

        console.log(uniqueShapePoints.length);
        if (uniqueShapePoints.length !== uniqueDestinationPoints.length) {
            return false;
        }

        for (const shapePoint of uniqueShapePoints) {
            const matchingIndex = uniqueDestinationPoints.findIndex(destinationPoint =>
                Math.abs(shapePoint.x - destinationPoint.x) <= tolerance &&
                Math.abs(shapePoint.y - destinationPoint.y) <= tolerance
            );

            if (matchingIndex === -1) {
                return false;
            }

            // Remove the matched point from the destination points to avoid duplicate matches
            uniqueDestinationPoints.splice(matchingIndex, 1);
        }

        return true;
    }

    validateAllShapes(): boolean {
        const destinationPoints = [
            { x: 500, y: 100 },
            { x: 600, y: 200 },
            { x: 600, y: 500 },
            { x: 500, y: 500 },
			{ x: 600, y: 300 },
			{ x: 700, y: 300 },
			{ x: 700, y: 500 },
			{ x: 900, y: 500 },
        ];

        const allShapePoints: { x: number, y: number }[] = [];

        this.shapes.forEach((shape) => {
            const positions = this.getShapePointsPositions(shape);
            allShapePoints.push(...positions);
        });

        return this.isShapeInCorrectPosition(allShapePoints, destinationPoints);
    }

    logAllShapesPointsPositions() {
        this.shapes.forEach((shape, index) => {
            const positions = this.getShapePointsPositions(shape);
            console.log(`Forma ${index + 1}:`);
            positions.forEach((pos, pointIndex) => {
                console.log(`  Ponto ${pointIndex + 1}: x=${pos.x}, y=${pos.y}`);
            });
        });
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

        this.shapes.push(square);

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

        this.shapes.push(square);

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

        this.shapes.push(triangle);

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

        this.shapes.push(triangle);

        return triangle;
    }

}