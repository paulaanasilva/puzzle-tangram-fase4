import Phaser from 'phaser';


export default class createButton {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createButtonRight(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraDireita');
        button.setInteractive();
        button.setScale(0.8);
        button.on('pointerdown', callback);

        return button;
    }

    createButtonLeft(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'giraEsquerda');
        button.setInteractive();
        button.setScale(0.8);
        button.on('pointerdown', callback);

        return button;
    }

    createButtonNext(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'next-button');
        button.setInteractive();
        button.setScale(0.8);
        button.on('pointerdown', callback);

        return button;
    }

    createButtonPlay(x: number, y: number, callback: () => void) {
        const button = this.scene.add.image(x, y, 'play-button');
        button.setInteractive();
        button.setScale(0.8);
        button.on('pointerdown', callback);

        return button;
    }

    createTextButton(x: number, y: number, text: string, callback: () => void) {
        const button = this.scene.add.text(x, y, text, {
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 10, y: 10 },
            align: 'center'
        }).setOrigin(0.5).setInteractive();
    
        button.on('pointerdown', callback);
    
        return button;
    }
}