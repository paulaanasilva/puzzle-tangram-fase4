

export default class showModal {
    private scene: Phaser.Scene;
    modalContainer: Phaser.GameObjects.Container | null;


    constructor(scene) {
        this.scene = scene;
    }

    showModal(finalMessage: string) {
        // Cria um contêiner para o modal
        this.modalContainer = this.scene.add.container(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY);

        // Adiciona um fundo semi-transparente
        const background = this.scene.add.graphics();
        background.fillStyle(0x000000, 0.5);
        background.fillRect(-this.scene.cameras.main.width / 2, -this.scene.cameras.main.height / 2, this.scene.cameras.main.width, this.scene.cameras.main.height);
        this.modalContainer.add(background);

        // Adiciona um painel de fundo para o modal
        const panel = this.scene.add.graphics();
        panel.fillStyle(0xffffff, 1);
        panel.fillRect(-250, -200, 500, 400); // Aumenta o tamanho do modal
        this.modalContainer.add(panel);

        // Adiciona uma mensagem de parabéns
        const textStyle = { font: '20px Arial', fill: '#000000', wordWrap: { width: 480, useAdvancedWrap: true } };
        const message = this.scene.add.text(0, -100, finalMessage, textStyle).setOrigin(0.5);
        this.modalContainer.add(message);

        // Adiciona um botão de cancelar para fechar o modal
        const cancelButton = this.scene.add.text(-100, 150, 'Cancelar', { font: '15px Arial', fill: '#ff0000' }).setOrigin(0.5).setInteractive();
        cancelButton.on('pointerdown', () => {
            this.closeModal();
        });
        this.modalContainer.add(cancelButton);

        // Adiciona um botão para ir para a fase 'Level2'
        const level2Button = this.scene.add.text(100, 150, 'Próxima Fase', { font: '15px Arial', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        level2Button.on('pointerdown', () => {
            this.scene.scene.start('Level2');
        });
        this.modalContainer.add(level2Button);
    }

    closeModal() {
        if (this.modalContainer) {
            this.modalContainer.destroy();
            this.modalContainer = null;
        }
    }
}