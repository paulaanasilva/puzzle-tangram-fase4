// src/game/scenes/BaseScene.ts
import { Scene } from 'phaser';
import Background from './class/background';
import createButton from './class/createButton';

export class BaseScene extends Scene {
    background: Background;
    createButton: createButton;
    botaoGirar: Phaser.GameObjects.Image;
    nextButton: Phaser.GameObjects.Image;
    playButton: Phaser.GameObjects.Image;

    constructor(key: string) {
        super(key);
        this.background = new Background(this);
        this.createButton = new createButton(this);
    }

    preload() {
        this.load.image('mosaic', 'assets/mosaic.jpg');
        this.load.image('GirarObjeto', 'assets/GirarObjetos.png');
        this.load.image('giraEsquerda', 'assets/giro10grausEsquerda.png');
        this.load.image('giraDireita', 'assets/giro10grausDireita.png');
        this.load.image('next-button', 'assets/next.png');
        this.load.image('play-button', 'assets/play.png');
    }

    create() {
        this.background.createBackground();

        // Botão para girar objetos
        this.botaoGirar = this.createButton.createButtonRight(1400, 600, () => {
            this.shapeActions.rotateSelectedShapeRight();
        });

        this.botaoGirar = this.createButton.createButtonLeft(1250, 600, () => {
            this.shapeActions.rotateSelectedShapeLeft();
        });
        
        this.nextButton = this.createButton.createButtonNext(1100, 600, () => {
            this.scene.start('Level2');
        });

        this.playButton = this.createButton.createButtonPlay(950, 600, () => {
            console.log('play');
        });
    }
}