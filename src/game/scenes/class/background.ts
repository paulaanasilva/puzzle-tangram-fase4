import Phaser from 'phaser';

export default class Background {
    private scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    createBackground() {
        // Adiciona uma imagem de fundo
        const backgroundImage = this.scene.add.image(0, 0, 'mosaic').setOrigin(0, 0);
        //backgroundImage.displayWidth = this.scene.sys.game.config.width as number;
        //backgroundImage.displayHeight = this.scene.sys.game.config.height as number;

        // Adiciona um quadrado branco no centro da tela
        const padding = 30;
        const background = this.scene.add.graphics();
        background.fillStyle(0xffffff, 1); // Define a cor branca
        background.fillRect(padding, padding, this.scene.sys.game.config.width as number - padding * 2, this.scene.sys.game.config.height as number - padding * 2);

    }

}