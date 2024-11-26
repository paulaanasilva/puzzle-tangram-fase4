import Phaser from 'phaser';


export default class createButton {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createButtonRight(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraDireita');
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }

    createButtonLeft(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraEsquerda');
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }

    createButtonNext(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'next-button');
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }

    createButtonPlay(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'play-button');
        button.setInteractive();

        button.on('pointerdown', callback);

        return button;
    }
}