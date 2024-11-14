

export default class fitShape {
    private scene: Phaser.Scene;

    constructor(scene) {
        this.scene = scene;
    }

    fit(gameObject, targetRect) {
        const tolerance = 20; //20 px de tolerância
        const targetX = targetRect.x + targetRect.width / 2;
        const targetY = targetRect.y + targetRect.height / 2;

        const distanceX = Math.abs(gameObject.x - targetX);
        const distanceY = Math.abs(gameObject.y - targetY);

        if (distanceX < tolerance && distanceY < tolerance) {
            console.log('Encaixou!');
            gameObject.x = targetX;
            gameObject.y = targetY;
        } else {
            console.log('Não encaixou.');
        }

    }

    enableFit(gameObject, targetRect) {
        this.scene.input.on('dragend', () => {
            this.fit(gameObject, targetRect);
        });
    }

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
                console.log('Não encaixou.');
            } else {
                console.log('Encaixou!');
            }
        });
    }
}