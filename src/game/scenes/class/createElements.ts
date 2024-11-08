import Phaser from 'phaser';
import UpdateElements from './updateElements';


export default class CreateElements {
    private scene: Phaser.Scene;
    private updateElements: UpdateElements;


    constructor(scene: Phaser.Scene, updateElements: UpdateElements) {
        this.scene = scene;
        this.updateElements = updateElements;
    }

    createTrianglePhaser() {
        const triangle = this.scene.add.triangle(200, 100, 0, 0, 100, 0, 50, 100, 0xff69b4);
        triangle.setInteractive();
        this.scene.input.setDraggable(triangle);

        triangle.on('pointerdown', () => {
            this.scene.selectedShape = triangle;
        });

        return triangle;
    }

    createOutlinedSquare() {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(4, 0xff69b4); // Define a cor e a espessura do contorno
        graphics.strokeRect(300, 400, 200, 100); // Desenha o contorno do retângulo
    
        const rect = new Phaser.Geom.Rectangle(300, 400, 200, 100);
        graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);
    
        return { graphics, rect };
    }
    
    createSquare(outlinedRect) {
        const square = this.scene.add.rectangle(300, 400, 200, 100, 0xff69b4);
        square.setInteractive();
        this.scene.input.setDraggable(square);
    
        square.on('pointerdown', () => {
            this.scene.selectedShape = square;
        });
    
        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    
        this.scene.input.on('dragend', (pointer, gameObject) => {
            const tolerance = 20; // Tolerância para o encaixe
            const targetX = outlinedRect.x + outlinedRect.width / 2;
            const targetY = outlinedRect.y + outlinedRect.height / 2;
    
            const distanceX = Math.abs(gameObject.x - targetX);
            const distanceY = Math.abs(gameObject.y - targetY);
    
            if (distanceX < tolerance && distanceY < tolerance) {
                console.log('Encaixou!');
                gameObject.x = targetX;
                gameObject.y = targetY;
            } else {
                console.log('Não encaixou.');
            }
        });
    
        return square;
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

    createButton(x: number, y: number, text: string, callback: () => void) {
        const button = this.scene.add.text(x, y, text, {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#000',
            padding: { x: 10, y: 5 },
        }).setInteractive();

        button.on('pointerdown', callback);

        button.on('pointerover', () => {
            button.setStyle({ fill: '#ff0' });
        });

        button.on('pointerout', () => {
            button.setStyle({ fill: '#fff' });
        });

        return button;
    }


}