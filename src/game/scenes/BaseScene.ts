// src/game/scenes/BaseScene.ts
import { Scene } from 'phaser';
import Background from './class/background';
import createButton from './class/createButton';

//Essa é uma classe base que contém coisas que são comuns a todas as cenas
export class BaseScene extends Scene {
    background: Background;
    createButton: createButton;
    botaoGirar: Phaser.GameObjects.Image;

    constructor() {
        super('BaseScene');
        this.background = new Background(this);
        this.createButton = new createButton(this);
    }

    preload() {
        this.load.image('mosaic', 'assets/mosaic.jpg');
        this.load.image('GirarObjeto', 'assets/GirarObjetos.png');
        this.load.image('giraEsquerda', 'assets/giro10grausEsquerda.png');
        this.load.image('giraDireita', 'assets/giro10grausDireita.png');
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
    }

}   