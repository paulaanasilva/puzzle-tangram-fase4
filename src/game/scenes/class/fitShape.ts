

export default class fitShape {
    private scene: Phaser.Scene;

    constructor(scene){
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
        this.scene.input.on('dragend', ()  => {
            this.fit(gameObject, targetRect);
        });
    }
}