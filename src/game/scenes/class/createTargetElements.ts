import Phaser from 'phaser';

export default class CreateTargetElements {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    drawDashedLine(graphics, x1, y1, x2, y2, dashLength, gapLength) {
        const totalLength = Phaser.Math.Distance.Between(x1, y1, x2, y2);
        const dx = (x2 - x1) / totalLength;
        const dy = (y2 - y1) / totalLength;

        let currentLength = 0;
        while (currentLength < totalLength) {
            const nextLength = Math.min(currentLength + dashLength, totalLength);
            const startX = x1 + dx * currentLength;
            const startY = y1 + dy * currentLength;
            const endX = x1 + dx * nextLength;
            const endY = y1 + dy * nextLength;

            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            currentLength += dashLength + gapLength;
        }
    }

    createTargetOutlined() {
        const graphics = this.scene.add.graphics();

        const points = [
            { x: 500, y: 500 },
            { x: 500, y: 100 },
            { x: 900, y: 500 },
        ];

        graphics.lineStyle(2, 0x000000); // Define a cor e a espessura do contorno

        const dashLength = 5; // Comprimento do traço
        const gapLength = 2;   // Comprimento do espaço entre os traços

        graphics.beginPath();
        for (let i = 0; i < points.length; i++) {
            const start = points[i];
            const end = points[(i + 1) % points.length]; // Conecta o último ponto ao primeiro
            this.drawDashedLine(graphics, start.x, start.y, end.x, end.y, dashLength, gapLength);
        }
        graphics.strokePath();

        const rect = new Phaser.Geom.Polygon(points.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };
    }

    /*
    createSquare55() {
        //Aqui faz o desneho da forma
        const points = [
            { x: 500, y: 100 },
            { x: 600, y: 200 },
            { x: 600, y: 500 },
            { x: 500, y: 500 }
        ];
    
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xFFFF00); // Define a cor e a espessura do contorno
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.closePath();
        graphics.strokePath();
    
        const translatedPoints = points.map(p => ({ x: p.x, y: p.y}));
        const rect = new Phaser.Geom.Polygon(translatedPoints.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Polygon.Contains);
    
        return { graphics, rect };
    }

    createSquare552() {
        //Aqui faz o desneho da forma
        const points = [
            { x: 600, y: 300 },
            { x: 700, y: 300 },
            { x: 700, y: 500 },
            { x: 600, y: 500 }
        ];
    
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xFFFF00); // Define a cor e a espessura do contorno
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.closePath();
        graphics.strokePath();
    
        const translatedPoints = points.map(p => ({ x: p.x, y: p.y}));
        const rect = new Phaser.Geom.Polygon(translatedPoints.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Polygon.Contains);
    
        return { graphics, rect };
    }

    createTriangle55() {
        // Aqui faz o desenho da forma
        const points = [
            { x: 600, y: 200 },
            { x: 700, y: 300 },
            { x: 600, y: 300 }
        ];

        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xFFFF00); // Define a cor e a espessura do contorno
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.closePath();
        graphics.strokePath();

        const translatedPoints = points.map(p => ({ x: p.x, y: p.y }));
        const rect = new Phaser.Geom.Polygon(translatedPoints.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Polygon.Contains);

        return { graphics, rect };
    }

    createTriangle552() {
        // Aqui faz o desenho da forma
        const points = [
            { x: 700, y: 300 },
            { x: 900, y: 500 },
            { x: 700, y: 500 }
        ];

        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xFFFF00); // Define a cor e a espessura do contorno
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.closePath();
        graphics.strokePath();

        const translatedPoints = points.map(p => ({ x: p.x, y: p.y }));
        const rect = new Phaser.Geom.Polygon(translatedPoints.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Polygon.Contains);

        return { graphics, rect };
    }
    */
}