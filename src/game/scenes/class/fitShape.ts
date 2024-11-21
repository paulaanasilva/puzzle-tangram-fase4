

export default class fitShape {
    private scene: Phaser.Scene;

    constructor(scene) {
        this.scene = scene;
    }

    /*
    enablePartialFit(square: Phaser.GameObjects.Rectangle, outlinedRects: Phaser.Geom.Rectangle[]) {
        const tolerance = 20; // 20 px de tolerância

        this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
            let isFitted = false;

            outlinedRects.forEach(outlinedRect => {
                const squareBounds = gameObject.getBounds();
                const outlinedBounds = outlinedRect;

                const fitsLeft = Math.abs(squareBounds.left - outlinedBounds.left) <= tolerance;
                const fitsRight = Math.abs(squareBounds.right - outlinedBounds.right) <= tolerance;
                const fitsTop = Math.abs(squareBounds.top - outlinedBounds.top) <= tolerance;
                const fitsBottom = Math.abs(squareBounds.bottom - outlinedBounds.bottom) <= tolerance;

                if (fitsLeft) {
                    gameObject.setPosition(outlinedBounds.left + squareBounds.width / 2, gameObject.y);
                    isFitted = true;
                } else if (fitsRight) {
                    gameObject.setPosition(outlinedBounds.right - squareBounds.width / 2, gameObject.y);
                    isFitted = true;
                }

                if (fitsTop) {
                    gameObject.setPosition(gameObject.x, outlinedBounds.top + squareBounds.height / 2);
                    isFitted = true;
                } else if (fitsBottom) {
                    gameObject.setPosition(gameObject.x, outlinedBounds.bottom - squareBounds.height / 2);
                    isFitted = true;
                }
            });

            if (!isFitted) {
                console.log('Não encaixou o Quadrado.');
            } else {
                console.log('Encaixou o Quadrado!');
            }
        });
    }
    */

    /*
    //Essa é uma versão que faz o encaixe em toda a tela, das duas formas geométricas
    enablePartialFit(shape: Phaser.GameObjects.GameObject, outlinedRect: Phaser.Geom.Rectangle) {
        const tolerance = 20; // 20 px de tolerância
        const gridSize = 50; // Tamanho da grade de 40 px

        this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
            const shapeBounds = gameObject.getBounds();
            const outlinedBounds = outlinedRect;

            const fitsLeft = Math.abs(shapeBounds.left - outlinedBounds.left) <= tolerance;
            const fitsRight = Math.abs(shapeBounds.right - outlinedBounds.right) <= tolerance;
            const fitsTop = Math.abs(shapeBounds.top - outlinedBounds.top) <= tolerance;
            const fitsBottom = Math.abs(shapeBounds.bottom - outlinedBounds.bottom) <= tolerance;

            if (fitsLeft || fitsRight || fitsTop || fitsBottom) {
                const newX = Math.round(gameObject.x / gridSize) * gridSize;
                const newY = Math.round(gameObject.y / gridSize) * gridSize;
                gameObject.setPosition(newX, newY);
                console.log('Encaixou o objeto!');
            } else {
                console.log('Não encaixou o objeto.');
            }
        });
    }
    */

    enablePartialFit(shape: Phaser.GameObjects.GameObject, outlinedRect: Phaser.Geom.Rectangle) {
        const tolerance = 20; // 20 px de tolerância
        const gridSize = 50; // Tamanho da grade de 50 px
    
        this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
            const shapeBounds = gameObject.getBounds();
            const outlinedBounds = outlinedRect;
    
            // Verificar se a forma está parcialmente dentro do retângulo delimitador
            const isPartiallyInside = Phaser.Geom.Intersects.RectangleToRectangle(shapeBounds, outlinedBounds);
    
            if (isPartiallyInside) {
                // Calcula as novas posições ajustadas para a grade
                const adjustedX = Math.round(gameObject.x / gridSize) * gridSize;
                const adjustedY = Math.round(gameObject.y / gridSize) * gridSize;
    
                // Verificar se as novas posições estão dentro da tolerância
                const withinToleranceX = Math.abs(adjustedX - gameObject.x) <= tolerance;
                const withinToleranceY = Math.abs(adjustedY - gameObject.y) <= tolerance;
    
                if (withinToleranceX && withinToleranceY) {
                    gameObject.setPosition(adjustedX, adjustedY);
                    console.log('Encaixou o objeto!');
                } else {
                    console.log('Não encaixou o objeto dentro da tolerância.');
                }
            } else {
                console.log('O objeto não está dentro do retângulo delimitador.');
            }
        });
    }
}