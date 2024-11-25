import Phaser from 'phaser';


export default class createButton {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createButtonRight(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraDireita');
        //button.setScale(0.1);
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }

    createButtonLeft(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraEsquerda');
        //button.setScale(0.1);
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }
}