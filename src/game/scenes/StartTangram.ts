// src/game/scenes/BaseScene.ts
import { Scene } from 'phaser';
import Background from './class/background';
import createButton from './class/createButton';

export class StartTangram extends Scene {
    background: Background;
    createButton: createButton;

    constructor(key: string) {
        super(key);
        this.background = new Background(this);
        this.createButton = new createButton(this);
    }

    preload() {
        this.load.image('mosaic', 'assets/background.jpg');
    }

    create() {
        //this.background.createBackground();
        const backgroundImage = this.add.image(0, 0, 'mosaic').setOrigin(0, 0);


        this.playButton = this.createButton.createTextButton(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Clique aqui para iniciar o jogo',
            () => {
                this.scene.start('Level1');
            }
        );
    }
}