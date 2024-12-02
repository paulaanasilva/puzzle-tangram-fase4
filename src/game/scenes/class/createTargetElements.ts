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

 
    createTargetOutlined() {
        const graphics = this.scene.add.graphics();

        const points = [
            { x: 500, y: 100 },   
            { x: 500, y: 300 },   
            { x: 300, y: 500 },   
            { x: 900, y: 500 },    
            { x: 700, y: 300 },
            { x: 700, y: 100 }
        ];

        graphics.lineStyle(4, 0x000000); // Define a cor e a espessura do contorno
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            graphics.lineTo(points[i].x, points[i].y);
        }
        graphics.closePath();
        graphics.strokePath();

        /*
        // Desenha cada lado do trapézio com cores diferentes
        graphics.lineStyle(4, 0xff0000); // Cor vermelha
        graphics.beginPath();
        graphics.moveTo(points[0].x, points[0].y);
        graphics.lineTo(points[1].x, points[1].y);
        graphics.strokePath();

        graphics.lineStyle(4, 0x00ff00); // Cor verde
        graphics.beginPath();
        graphics.moveTo(points[1].x, points[1].y);
        graphics.lineTo(points[2].x, points[2].y);
        graphics.strokePath();

        graphics.lineStyle(4, 0x0000ff); // Cor azul
        graphics.beginPath();
        graphics.moveTo(points[2].x, points[2].y);
        graphics.lineTo(points[3].x, points[3].y);
        graphics.strokePath();

        graphics.lineStyle(4, 0xffff00); // Cor amarela
        graphics.beginPath();
        graphics.moveTo(points[3].x, points[3].y);
        graphics.lineTo(points[4].x, points[4].y);
        graphics.strokePath();

        graphics.lineStyle(4, 0xffff00); // Cor amarela
        graphics.beginPath();
        graphics.moveTo(points[4].x, points[4].y);
        graphics.lineTo(points[5].x, points[5].y);
        graphics.strokePath();

        graphics.lineStyle(4, 0xffff00); // Cor amarela
        graphics.beginPath();
        graphics.moveTo(points[5].x, points[5].y);
        graphics.lineTo(points[0].x, points[0].y);
        graphics.strokePath();
        */

        const rect = new Phaser.Geom.Polygon(points.map(p => [p.x, p.y]).flat());
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

        return { graphics, rect };

    }

}