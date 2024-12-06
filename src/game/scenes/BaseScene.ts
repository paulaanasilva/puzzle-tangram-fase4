// src/game/scenes/BaseScene.ts
import { Scene } from 'phaser';
import Background from './class/background';
import createButton from './class/createButton';
import positionValidation from './class/positionValidation';
import createTargetElements from './class/createTargetElements';


export class BaseScene extends Scene {
    background: Background;
    createButton: createButton;
    createTargetElements: createTargetElements;
    positionValidation: positionValidation;
    botaoGirar: Phaser.GameObjects.Image;
    nextButton: Phaser.GameObjects.Image;
    playButton: Phaser.GameObjects.Image;
    createTargetOutlined: Phaser.Geom.Polygon; 
    shapeActions: any;
   


    constructor(key: string) {
        super(key);
        this.background = new Background(this);
        this.createButton = new createButton(this);
        this.positionValidation = new positionValidation(this);
        this.createTargetElements = new createTargetElements(this);
    }

    preload() {
        this.load.image('mosaic', 'assets/background.jpg');
        this.load.image('giraEsquerda', 'assets/left.svg');
        this.load.image('giraDireita', 'assets/right.svg');
        this.load.image('next-button', 'assets/next.svg');
        this.load.image('play-button', 'assets/play.svg');
    }

    create() {
        this.background.createBackground();

        this.createTargetOutlined = this.createTargetElements.createTargetOutlined();

        // Botão para girar objetos
        this.botaoGirar = this.createButton.createButtonRight(925, 100, () => {
            this.shapeActions.rotateSelectedShapeRight();
        });

        this.botaoGirar = this.createButton.createButtonLeft(925, 200, () => {
            this.shapeActions.rotateSelectedShapeLeft();
        });

        this.nextButton = this.createButton.createButtonNext(925, 680, () => {
            this.scene.start('Level2');
        });

        this.playButton = this.createButton.createButtonPlay(820, 680, () => {
            this.positionValidation.logAllShapesPointsPositions();
            let allShapesValid = false;

            if (this.scene.key === 'Level1') {
                allShapesValid = this.positionValidation.validateShapesLevel1();
            } else {
                allShapesValid = this.positionValidation.validateShapesLevel2();
            }

            if (allShapesValid) {
                console.log('Todas as formas estão na posição correta!');
            } else {
                console.log('Não estão na posição correta.');
            }
        });
    }
}