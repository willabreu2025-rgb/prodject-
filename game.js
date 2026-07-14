let selectedCharacter = 'Carlos';

class MenuScene extends Phaser.Scene {
    constructor() { 
        super('MenuScene'); 
    }

    preload() {
        this.load.image('knife_bullet', 'https://labs.phaser.io/assets/sprites/bullet.png');
    }

    create() {
        this.createPixelGoblinTexture();
        this.createDivineKatanaTexture();
        this.createSceneryTextures();
        this.createWillTextures();
        this.createCarlosTextures(); 
        this.createLayout();
        this.scale.on('resize', this.resize, this);
    }

    createPixelGoblinTexture() {
        let gobGfx = this.make.graphics({ x: 0, y: 0, add: false });
        
        const drawPixel = (px, py, color, w = 4, h = 4) => {
            gobGfx.fillStyle(color, 1);
            gobGfx.fillRect(px * 4, py * 4, w, h);
        };

        const DK_GREEN = 0x145a32; 
        const MD_GREEN = 0x1d8348; 
        const LT_GREEN = 0x27ae60; 
        const EYE_RED  = 0xc0392b; 
        const LEATHER  = 0x4a2c11; 
        const L_LEATHER= 0x784212; 
        const WOOD     = 0x5c3a21; 
        const METAL    = 0x7f8c8d; 

        drawPixel(1, 2, DK_GREEN, 8, 4);   
        drawPixel(3, 3, MD_GREEN, 8, 4);
        drawPixel(13, 2, DK_GREEN, 8, 4);  
        drawPixel(11, 3, MD_GREEN, 8, 4);

        drawPixel(5, 2, DK_GREEN, 24, 4);  
        drawPixel(4, 3, MD_GREEN, 32, 16); 
        drawPixel(5, 7, DK_GREEN, 24, 4);  

        drawPixel(6, 4, EYE_RED, 4, 4);    
        drawPixel(9, 4, EYE_RED, 4, 4);    

        drawPixel(5, 8, LEATHER, 24, 16);  
        drawPixel(6, 9, L_LEATHER, 16, 8); 
        drawPixel(5, 12, 0x111111, 24, 4); 

        drawPixel(3, 9, MD_GREEN, 8, 12);  
        drawPixel(11, 9, MD_GREEN, 8, 12); 

        drawPixel(5, 13, DK_GREEN, 8, 8);  
        drawPixel(10, 13, DK_GREEN, 8, 8); 
        drawPixel(4, 15, MD_GREEN, 8, 4);  
        drawPixel(11, 15, MD_GREEN, 8, 4); 

        drawPixel(12, 5, WOOD, 12, 16);     
        drawPixel(12, 3, WOOD, 16, 12);     
        drawPixel(13, 3, L_LEATHER, 8, 12); 
        
        drawPixel(11, 4, METAL, 4, 4);      
        drawPixel(16, 5, METAL, 4, 4);      

        gobGfx.generateTexture('goblin_enemy', 64, 64);
    }

    createDivineKatanaTexture() {
        let katanaGfx = this.make.graphics({ x: 0, y: 0, add: false });
        
        katanaGfx.fillStyle(0xffffff, 1);
        katanaGfx.fillRect(6, 0, 4, 44);
        katanaGfx.fillStyle(0xd5dbdb, 1);
        katanaGfx.fillRect(10, 2, 2, 40);
        
        katanaGfx.fillStyle(0xd4ac0d, 1); 
        katanaGfx.fillRect(2, 44, 12, 4);

        katanaGfx.fillStyle(0xffffff, 1);
        katanaGfx.fillRect(6, 48, 4, 12);
        katanaGfx.fillStyle(0x1a252f, 1); 
        katanaGfx.fillRect(7, 50, 2, 2);
        katanaGfx.fillRect(7, 54, 2, 2);
        katanaGfx.fillRect(7, 58, 2, 2);

        katanaGfx.generateTexture('divine_katana', 16, 64);
    }

    createWillTextures() {
        let headGfx = this.make.graphics({ x: 0, y: 0, add: false });
        
        headGfx.fillStyle(0xfbeee6, 1);
        headGfx.fillRect(16, 16, 32, 28);
        
        headGfx.fillStyle(0xe74c3c, 1);
        headGfx.fillRect(20, 28, 6, 6);
        headGfx.fillRect(38, 28, 6, 6);
        headGfx.fillStyle(0xffffff, 1);
        headGfx.fillRect(20, 28, 2, 2);
        headGfx.fillRect(38, 28, 2, 2);

        headGfx.fillStyle(0xffffff, 1);
        headGfx.fillRect(12, 4, 40, 12);   
        headGfx.fillRect(10, 16, 6, 24);   
        headGfx.fillRect(48, 16, 6, 24);   
        headGfx.fillRect(8, 6, 6, 6);
        headGfx.fillRect(24, 0, 8, 6);
        headGfx.fillRect(50, 6, 6, 6);
        
        headGfx.fillStyle(0xd5dbdb, 1);
        headGfx.fillRect(14, 12, 4, 10);
        headGfx.fillRect(46, 12, 4, 10);

        headGfx.fillStyle(0x922b21, 1);
        headGfx.fillRect(14, 40, 36, 8);
        headGfx.fillStyle(0xc0392b, 1);
        headGfx.fillRect(18, 42, 28, 4);

        headGfx.generateTexture('will_head', 64, 64);

        let torsoGfx = this.make.graphics({ x: 0, y: 0, add: false });
        torsoGfx.fillStyle(0x1a252f, 1);
        torsoGfx.fillRect(16, 10, 32, 44);
        
        torsoGfx.fillStyle(0x2c3e50, 1);
        torsoGfx.fillRect(18, 12, 28, 20);
        torsoGfx.fillRect(20, 34, 24, 16);
        
        torsoGfx.fillStyle(0xbdc3c7, 1);
        torsoGfx.fillRect(16, 20, 32, 4);  
        torsoGfx.fillRect(22, 10, 4, 24);  
        torsoGfx.fillRect(38, 10, 4, 24);  

        torsoGfx.fillStyle(0xe74c3c, 1);
        torsoGfx.fillRect(29, 24, 6, 6);
        torsoGfx.fillStyle(0xf1948a, 1);
        torsoGfx.fillRect(31, 26, 2, 2);

        torsoGfx.fillStyle(0x0e171c, 1);
        torsoGfx.fillRect(14, 48, 36, 6);
        torsoGfx.fillStyle(0xd4ac0d, 1); 
        torsoGfx.fillRect(29, 47, 6, 8);

        torsoGfx.generateTexture('will_torso', 64, 64);

        let armGfx = this.make.graphics({ x: 0, y: 0, add: false });
        armGfx.fillStyle(0x1a252f, 1); 
        armGfx.fillRect(4, 0, 10, 10);
        armGfx.fillStyle(0xbdc3c7, 1); 
        armGfx.fillRect(4, 8, 10, 3);
        armGfx.fillStyle(0x2c3e50, 1); 
        armGfx.fillRect(5, 11, 8, 14);
        armGfx.fillStyle(0x2e1a0c, 1); 
        armGfx.fillRect(4, 25, 10, 8);
        armGfx.fillStyle(0xfbeee6, 1); 
        armGfx.fillRect(5, 33, 8, 3);
        armGfx.generateTexture('will_arm', 18, 36);

        let legGfx = this.make.graphics({ x: 0, y: 0, add: false });
        legGfx.fillStyle(0x1c2833, 1); 
        legGfx.fillRect(4, 0, 10, 18);
        legGfx.fillStyle(0x1a252f, 1); 
        legGfx.fillRect(3, 12, 12, 6);
        legGfx.fillStyle(0xbdc3c7, 1); 
        legGfx.fillRect(5, 14, 8, 3);
        legGfx.fillStyle(0x0e171c, 1); 
        legGfx.fillRect(3, 18, 12, 22);
        legGfx.fillStyle(0x2c3e50, 1); 
        legGfx.fillRect(3, 24, 12, 3);
        legGfx.fillRect(3, 30, 12, 3);
        legGfx.generateTexture('will_leg', 18, 40);

        let singleKatana = this.make.graphics({ x: 0, y: 0, add: false });
        singleKatana.fillStyle(0xffffff, 1); 
        singleKatana.fillRect(6, 0, 4, 32);
        singleKatana.fillStyle(0xe5e7e9, 1); 
        singleKatana.fillRect(10, 2, 2, 30);
        singleKatana.fillStyle(0xd4ac0d, 1); 
        singleKatana.fillRect(2, 32, 12, 4);
        singleKatana.fillStyle(0xffffff, 1); 
        singleKatana.fillRect(6, 36, 4, 12);
        singleKatana.fillStyle(0x000000, 1); 
        singleKatana.fillRect(7, 39, 2, 2);
        singleKatana.fillRect(7, 44, 2, 2);
        singleKatana.generateTexture('held_katana', 16, 48);
    }

    createCarlosTextures() {
        let headGfx = this.make.graphics({ x: 0, y: 0, add: false });
        
        headGfx.fillStyle(0xfbeee6, 1);
        headGfx.fillRect(16, 16, 32, 28);
        
        headGfx.lineStyle(2, 0x111111, 1);
        headGfx.strokeCircle(23, 31, 5); 
        headGfx.strokeCircle(41, 31, 5); 
        headGfx.fillRect(28, 30, 13, 2); 

        headGfx.fillStyle(0x5dade2, 1);
        headGfx.fillRect(22, 30, 2, 2);
        headGfx.fillRect(40, 30, 2, 2);

        headGfx.fillStyle(0x78281f, 1); 
        headGfx.fillRect(12, 6, 40, 12);   
        headGfx.fillRect(10, 14, 6, 20);   
        headGfx.fillRect(48, 14, 6, 20);   
        
        headGfx.fillStyle(0x922b21, 1); 
        headGfx.fillRect(16, 4, 32, 4);
        headGfx.fillRect(20, 12, 4, 6);
        headGfx.fillRect(28, 12, 6, 8);
        headGfx.fillRect(38, 12, 4, 6);
        
        headGfx.fillStyle(0xb03a2e, 1); 
        headGfx.fillRect(14, 8, 6, 4);
        headGfx.fillRect(44, 8, 6, 4);

        headGfx.fillStyle(0x7e5109, 1); 
        headGfx.fillRect(10, 38, 6, 12);
        headGfx.fillRect(48, 38, 6, 12);

        headGfx.generateTexture('carlos_head', 64, 64);

        let torsoGfx = this.make.graphics({ x: 0, y: 0, add: false });
        torsoGfx.fillStyle(0x1e272c, 1);
        torsoGfx.fillRect(18, 10, 28, 44);

        torsoGfx.fillStyle(0x935116, 1); 
        torsoGfx.fillRect(14, 14, 8, 40);
        torsoGfx.fillRect(42, 14, 8, 40);
        torsoGfx.fillStyle(0x7e5109, 1); 
        torsoGfx.fillRect(14, 20, 4, 34);
        torsoGfx.fillRect(46, 20, 4, 34);

        torsoGfx.fillStyle(0xd5dbdb, 1);
        torsoGfx.fillRect(27, 20, 10, 10);
        torsoGfx.fillStyle(0x1e272c, 1);
        torsoGfx.fillRect(29, 22, 6, 6);

        torsoGfx.fillStyle(0xc0392b, 1); 
        torsoGfx.fillRect(30, 23, 4, 4);
        torsoGfx.fillStyle(0xf1948a, 1); 
        torsoGfx.fillRect(30, 23, 2, 2);

        torsoGfx.generateTexture('carlos_torso', 64, 64);

        let armGfx = this.make.graphics({ x: 0, y: 0, add: false });
        armGfx.fillStyle(0x935116, 1); 
        armGfx.fillRect(4, 0, 10, 18);
        armGfx.fillStyle(0x7e5109, 1); 
        armGfx.fillRect(4, 14, 10, 4);
        armGfx.fillStyle(0x1e272c, 1); 
        armGfx.fillRect(5, 18, 8, 10);
        armGfx.fillStyle(0xfbeee6, 1); 
        armGfx.fillRect(5, 28, 8, 6);
        armGfx.generateTexture('carlos_arm', 18, 36);

        let legGfx = this.make.graphics({ x: 0, y: 0, add: false });
        legGfx.fillStyle(0x141f25, 1); 
        legGfx.fillRect(4, 0, 10, 20);
        legGfx.fillStyle(0x5c3a21, 1); 
        legGfx.fillRect(3, 20, 12, 20);
        legGfx.fillStyle(0x4a2c11, 1); 
        legGfx.fillRect(3, 28, 12, 4);
        legGfx.generateTexture('carlos_leg', 18, 40);

        let staffGfx = this.make.graphics({ x: 0, y: 0, add: false });
        const DK_WOOD = 0x5c3a21;
        const MD_WOOD = 0x7e5109;
        const LT_WOOD = 0xa0522d;

        staffGfx.fillStyle(DK_WOOD, 1);
        staffGfx.fillRect(10, 24, 4, 36);
        staffGfx.fillStyle(MD_WOOD, 1);
        staffGfx.fillRect(11, 24, 2, 28);

        staffGfx.fillStyle(DK_WOOD, 1);
        staffGfx.fillRect(6, 16, 12, 8); 
        
        staffGfx.fillRect(4, 0, 12, 4);   
        staffGfx.fillRect(4, 12, 12, 4);  
        staffGfx.fillRect(0, 4, 4, 8);    
        staffGfx.fillRect(16, 4, 4, 8);   

        staffGfx.fillStyle(MD_WOOD, 1);
        staffGfx.fillRect(6, 2, 8, 2);
        staffGfx.fillRect(16, 6, 2, 4);
        staffGfx.fillStyle(LT_WOOD, 1);
        staffGfx.fillRect(2, 4, 2, 2);
        staffGfx.fillRect(12, 12, 2, 2);

        staffGfx.fillStyle(0x5dade2, 0.7);
        staffGfx.fillCircle(10, 8, 3);

        staffGfx.generateTexture('carlos_staff', 20, 60);

        let orbGfx = this.make.graphics({ x: 0, y: 0, add: false });
        orbGfx.fillStyle(0x2980b9, 1);
        orbGfx.fillCircle(8, 8, 8);
        orbGfx.fillStyle(0x3498db, 1);
        orbGfx.fillCircle(8, 8, 6);
        orbGfx.fillStyle(0xffffff, 1);
        orbGfx.fillCircle(6, 6, 2);
        orbGfx.generateTexture('blue_magic_orb', 16, 16);

        let boltGfx = this.make.graphics({ x: 0, y: 0, add: false });
        boltGfx.fillStyle(0xf1c40f, 1); 
        boltGfx.fillRect(2, 8, 28, 4);
        boltGfx.fillStyle(0xffffff, 1); 
        boltGfx.fillRect(4, 9, 24, 2);
        boltGfx.fillStyle(0x3498db, 0.5); 
        boltGfx.fillRect(0, 7, 32, 6);
        boltGfx.generateTexture('thunder_bolt_proj', 32, 16);
    }

    createSceneryTextures() {
        let treeGfx = this.make.graphics({ x: 0, y: 0, add: false });
        const CHARCOAL = 0x0a0a0c;
        const ASH_GREY = 0x3a3f44;
        const EMBER    = 0xd35400; 

        treeGfx.fillStyle(CHARCOAL, 1);
        treeGfx.fillRect(24, 40, 16, 88); 
        treeGfx.fillStyle(ASH_GREY, 1);
        treeGfx.fillRect(28, 40, 4, 88); 

        treeGfx.fillStyle(CHARCOAL, 1);
        treeGfx.fillRect(8, 50, 16, 8);   
        treeGfx.fillRect(8, 30, 8, 20);
        treeGfx.fillRect(40, 65, 16, 8);  
        treeGfx.fillRect(48, 45, 8, 20);
        treeGfx.fillRect(20, 24, 24, 16);  

        treeGfx.fillStyle(ASH_GREY, 1);
        treeGfx.fillRect(12, 34, 4, 4);
        treeGfx.fillRect(44, 70, 4, 4);
        treeGfx.fillStyle(EMBER, 1);
        treeGfx.fillRect(32, 60, 4, 4);   
        treeGfx.fillRect(12, 42, 4, 4);   
        treeGfx.fillRect(48, 50, 4, 4);   

        treeGfx.generateTexture('burned_tree', 64, 128);

        let webGfx = this.make.graphics({ x: 0, y: 0, add: false });
        webGfx.lineStyle(2, 0x95a5a6, 0.45); 

        webGfx.lineBetween(0, 0, 128, 128);
        webGfx.lineBetween(128, 0, 0, 128);
        webGfx.lineBetween(64, 0, 64, 128);
        webGfx.lineBetween(0, 64, 128, 64);

        for (let r = 15; r <= 60; r += 15) {
            webGfx.strokeCircle(64, 64, r);
        }

        webGfx.generateTexture('spider_web', 128, 128);

        let skullGfx = this.make.graphics({ x: 0, y: 0, add: false });
        skullGfx.fillStyle(0x7f8c8d, 1); 
        skullGfx.fillRect(8, 8, 16, 16); 
        skullGfx.fillRect(10, 24, 12, 4); 

        skullGfx.fillStyle(0x000000, 1);
        skullGfx.fillRect(10, 12, 4, 4);
        skullGfx.fillRect(18, 12, 4, 4);
        skullGfx.fillRect(14, 18, 4, 2);

        skullGfx.generateTexture('rubble_skull', 32, 32);
    }

    createLayout() {
        if (this.layoutContainer) {
            this.layoutContainer.destroy(true);
        }
        this.layoutContainer = this.add.container(0, 0);

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        let title = this.add.text(centerX, centerY - 120, 'WILL AND CARLOS DUNGEON', { font: 'bold 44px Georgia', fill: '#ff3333' }).setOrigin(0.5);
        let sub = this.add.text(centerX, centerY - 70, 'Inspired by your roster', { font: 'italic 16px Courier New', fill: '#f1c40f' }).setOrigin(0.5);

        let startBtn = this.add.text(centerX, centerY + 30, '⚔ START STAGE ⚔', { font: 'bold 24px Courier New', fill: '#fff' })
            .setOrigin(0.5).setInteractive({ useHandCursor: true });
        
        startBtn.on('pointerover', () => { startBtn.setStyle({ fill: '#f1c40f' }); });
        startBtn.on('pointerout', () => { startBtn.setStyle({ fill: '#fff' }); });
        startBtn.on('pointerdown', () => { this.scene.start('MainGameScene'); });

        let custBtn = this.add.text(centerX, centerY + 100, '🗚 SELECT CHARACTER 🗚', { font: 'bold 24px Courier New', fill: '#fff' })
            .setOrigin(0.5).setInteractive({ useHandCursor: true });

        custBtn.on('pointerover', () => { custBtn.setStyle({ fill: '#f1c40f' }); });
        custBtn.on('pointerout', () => { custBtn.setStyle({ fill: '#fff' }); });
        custBtn.on('pointerdown', () => { this.scene.start('CustomizeScene'); });

        this.layoutContainer.add([title, sub, startBtn, custBtn]);
    }

    resize(gameSize) {
        this.cameras.main.setSize(gameSize.width, gameSize.height);
        this.createLayout();
    }
}

class CustomizeScene extends Phaser.Scene {
    constructor() { 
        super('CustomizeScene'); 
    }

    create() {
        this.createLayout();
        this.scale.on('resize', this.resize, this);
    }

    createLayout() {
        if (this.layoutContainer) {
            this.layoutContainer.destroy(true);
        }
        this.layoutContainer = this.add.container(0, 0);

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        let title = this.add.text(centerX, 80, 'CHARACTER SELECTION', { font: 'bold 32px Georgia', fill: '#f1c40f' }).setOrigin(0.5);

        let previewContainer = this.add.container(centerX, centerY - 80);
        if (selectedCharacter === 'Will') {
            let shadow = this.add.ellipse(0, 44, 48, 12, 0x000000, 0.4);
            let torso = this.add.image(0, 0, 'will_torso');
            let head = this.add.image(0, -22, 'will_head');
            let lArm = this.add.image(-18, 2, 'will_arm');
            let rArm = this.add.image(18, 2, 'will_arm');
            let lLeg = this.add.image(-10, 24, 'will_leg');
            let rLeg = this.add.image(10, 24, 'will_leg');
            let katana = this.add.image(22, 12, 'held_katana').setAngle(35);
            previewContainer.add([shadow, lLeg, rLeg, lArm, rArm, torso, head, katana]);
            previewContainer.setScale(2.0);
        } else {
            let shadow = this.add.ellipse(0, 44, 48, 12, 0x000000, 0.4);
            let torso = this.add.image(0, 0, 'carlos_torso');
            let head = this.add.image(0, -22, 'carlos_head');
            let lArm = this.add.image(-18, 2, 'carlos_arm');
            let rArm = this.add.image(18, 2, 'carlos_arm');
            let lLeg = this.add.image(-10, 24, 'carlos_leg');
            let rLeg = this.add.image(10, 24, 'carlos_leg');
            let staff = this.add.image(22, 12, 'carlos_staff').setAngle(15);
            previewContainer.add([shadow, lLeg, rLeg, lArm, rArm, torso, head, staff]);
            previewContainer.setScale(2.0);
        }

        let nameText = this.add.text(centerX, centerY + 30, selectedCharacter, { font: 'bold 26px Courier New', fill: '#fff' }).setOrigin(0.5);
        this.layoutContainer.add([title, previewContainer, nameText]);

        const roster = ['Carlos', 'Will'];
        roster.forEach((charName, index) => {
            let btn = this.add.text(centerX - 100 + (index * 200), centerY + 110, `[ ${charName} ]`, { font: '20px Courier New', fill: selectedCharacter === charName ? '#f1c40f' : '#aaa' })
                .setOrigin(0.5).setInteractive({ useHandCursor: true });
            
            btn.on('pointerdown', () => {
                selectedCharacter = charName;
                this.scene.restart();
            });
            this.layoutContainer.add(btn);
        });

        let desc = "";
        if (selectedCharacter === "Carlos") {
            desc = "Carlos: Red-haired Stormweaver holding a spiral staff. Moves: [1] Thunder Shock (Fires electric bolts that slow targets, 4 dmg, 6 mana), [2] Thunder Wave (Rains lightning on nearby areas).";
        }
        if (selectedCharacter === "Will") {
            desc = "Will: Swordmaster wearing stunning tactical dark armor, red eyes, flowing white hair & sharp red-glowing Katana slashes. Moves: [1] Crimson Sword Slash, [2] Crimson Divine Slash.";
        }
        
        let descText = this.add.text(centerX, centerY + 180, desc, { font: '16px Courier New', fill: '#fff', align: 'center', wordWrap: { width: 550 } }).setOrigin(0.5);

        let backBtn = this.add.text(centerX, centerY + 240, 'Confirm & Return', { font: 'bold 20px Courier New', fill: '#2ecc71' })
            .setOrigin(0.5).setInteractive({ useHandCursor: true });
        backBtn.on('pointerdown', () => { this.scene.start('MenuScene'); });

        this.layoutContainer.add([descText, backBtn]);
    }

    resize(gameSize) {
        this.cameras.main.setSize(gameSize.width, gameSize.height);
        this.createLayout();
    }
}

class MainGameScene extends Phaser.Scene {
    constructor() { 
        super('MainGameScene'); 
    }

    create() {
        const WORLD_SIZE = 4000;
        this.physics.world.setBounds(0, 0, WORLD_SIZE, WORLD_SIZE);
        
        let bg = this.add.graphics();
        const brickWidth = 40;
        const brickHeight = 20;
        
        for (let y = 0; y < WORLD_SIZE; y += brickHeight) {
            let isRowShifted = (Math.floor(y / brickHeight) % 2 === 0);
            let startX = isRowShifted ? -(brickWidth / 2) : 0;
            
            for (let x = startX; x < WORLD_SIZE + brickWidth; x += brickWidth) {
                let colorVariation = (Math.sin(x) * Math.cos(y) > 0) ? 0x18181a : 0x121214;
                bg.fillStyle(colorVariation, 1);
                bg.fillRect(x, y, brickWidth, brickHeight);
                bg.lineStyle(2, 0x0a0a0c, 1);
                bg.strokeRect(x, y, brickWidth, brickHeight);
            }
        }

        this.sceneryGroup = this.physics.add.staticGroup();

        for (let i = 0; i < 90; i++) {
            let sX = Phaser.Math.Between(100, WORLD_SIZE - 100);
            let sY = Phaser.Math.Between(100, WORLD_SIZE - 100);
            
            if (Phaser.Math.Distance.Between(sX, sY, WORLD_SIZE / 2, WORLD_SIZE / 2) < 250) {
                continue;
            }

            let typeRoll = Phaser.Math.Between(0, 2);
            if (typeRoll === 0) {
                let tree = this.sceneryGroup.create(sX, sY, 'burned_tree').setScale(1.2).refreshBody();
                tree.body.setSize(24, 30);
                tree.body.setOffset(20, 90);
            } else if (typeRoll === 1) {
                let web = this.add.image(sX, sY, 'spider_web').setScale(Phaser.Math.FloatBetween(0.8, 1.3)).setDepth(1);
                this.tweens.add({
                    targets: web,
                    scaleX: '*=1.05',
                    scaleY: '*=1.05',
                    duration: Phaser.Math.Between(2000, 4000),
                    yoyo: true,
                    repeat: -1
                });
            } else {
                this.add.image(sX, sY, 'rubble_skull').setScale(1.0).setAngle(Phaser.Math.Between(0, 360));
            }
        }

        let slashGfx = this.make.graphics({ x: 0, y: 0, add: false });
        slashGfx.lineStyle(8, 0xff3333, 0.4); // Base arc adjusted to red color
        slashGfx.beginPath();
        slashGfx.arc(16, 16, 12, Math.PI * 0.3, Math.PI * 1.7, true);
        slashGfx.strokePath();
        slashGfx.lineStyle(3, 0xff0000, 1); // Blade core adjusted to solid sharp red
        slashGfx.beginPath();
        slashGfx.arc(16, 16, 12, Math.PI * 0.35, Math.PI * 1.65, true);
        slashGfx.strokePath();
        slashGfx.generateTexture('sword_slash_proj', 32, 32);

        this.player = this.physics.add.image(WORLD_SIZE / 2, WORLD_SIZE / 2, null);
        this.player.setSize(32, 48);
        
        this.playerContainer = this.add.container(this.player.x, this.player.y);
        this.playerContainer.setDepth(10);

        this.playerShadow = this.add.ellipse(0, 24, 40, 10, 0x000000, 0.4);
        
        if (selectedCharacter === 'Will') {
            this.playerLeftLeg = this.add.image(-10, 12, 'will_leg').setOrigin(0.5, 0.1);
            this.playerRightLeg = this.add.image(10, 12, 'will_leg').setOrigin(0.5, 0.1);
            this.playerLeftArm = this.add.image(-18, -4, 'will_arm').setOrigin(0.5, 0.1);
            this.playerRightArm = this.add.image(18, -4, 'will_arm').setOrigin(0.5, 0.1);
            this.playerTorso = this.add.image(0, -6, 'will_torso');
            this.playerHead = this.add.image(0, -28, 'will_head');

            this.heldKatana = this.add.image(16, 0, 'held_katana');
            this.heldKatana.setOrigin(0.5, 0.95);
            this.heldKatana.restingOffsetAngle = 45; 
            this.heldKatana.angle = this.heldKatana.restingOffsetAngle;

            this.playerContainer.add([
                this.playerShadow, 
                this.playerLeftLeg, 
                this.playerRightLeg, 
                this.playerLeftArm, 
                this.playerRightArm, 
                this.playerTorso, 
                this.playerHead, 
                this.heldKatana
            ]);
        } else {
            this.playerLeftLeg = this.add.image(-10, 12, 'carlos_leg').setOrigin(0.5, 0.1);
            this.playerRightLeg = this.add.image(10, 12, 'carlos_leg').setOrigin(0.5, 0.1);
            this.playerLeftArm = this.add.image(-18, -4, 'carlos_arm').setOrigin(0.5, 0.1);
            this.playerRightArm = this.add.image(18, -4, 'carlos_arm').setOrigin(0.5, 0.1);
            this.playerTorso = this.add.image(0, -6, 'carlos_torso');
            this.playerHead = this.add.image(0, -28, 'carlos_head');

            this.heldStaff = this.add.image(16, -2, 'carlos_staff');
            this.heldStaff.setOrigin(0.5, 0.95);
            this.heldStaff.restingOffsetAngle = 20;
            this.heldStaff.angle = this.heldStaff.restingOffsetAngle;

            this.playerContainer.add([
                this.playerShadow, 
                this.playerLeftLeg, 
                this.playerRightLeg, 
                this.playerLeftArm, 
                this.playerRightArm, 
                this.playerTorso, 
                this.playerHead, 
                this.heldStaff
            ]);
        }

        this.playerContainer.setScale(1.0);
        this.player.setCollideWorldBounds(true);
        this.isSwinging = false; 

        this.playerHealth = 12;
        this.playerMaxHealth = 12;
        this.playerMana = 100;
        this.playerMaxMana = 100;
        
        this.baseManaRegen = 0.15;
        this.manaRegenRate = this.baseManaRegen; 
        
        this.isInvincible = false;

        this.slot1CooldownActive = false;
        this.slot1CooldownDuration = 800; 
        this.slot1CooldownTimer = 0;

        this.slot2CooldownActive = false;
        this.slot2CooldownDuration = 12000; 
        this.slot2CooldownTimer = 0;
        
        this.uiBarsGraphic = this.add.graphics().setScrollFactor(0).setDepth(100);

        this.playerSpeed = selectedCharacter === 'Will' ? 330 : 250;
        
        this.cameras.main.setBounds(0, 0, WORLD_SIZE, WORLD_SIZE)
            .startFollow(this.player, true, 0.08, 0.08)
            .setZoom(0.85);

        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        this.hotkeys = this.input.keyboard.addKeys({
            slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
            slot2: Phaser.Input.Keyboard.KeyCodes.TWO
        });
        
        this.pointer = this.input.activePointer;
        
        this.enemies = this.physics.add.group(); 
        this.projectiles = this.physics.add.group(); 
        this.gems = this.physics.add.group();

        this.score = 0; 
        this.playerLevel = 1; 
        this.playerXP = 0; 
        this.xpNeeded = 100;

        let gGfx = this.make.graphics({ x: 0, y: 0, add: false }).fillStyle(0x54a0ff).fillRect(2, 2, 8, 8);
        gGfx.generateTexture('gemPic', 12, 12);
        
        let pGfx = this.make.graphics({ x: 0, y: 0, add: false }).fillStyle(0xffffff).fillRect(0, 0, 4, 4);
        pGfx.generateTexture('particle', 4, 4);

        this.physics.add.collider(this.player, this.sceneryGroup);
        this.physics.add.collider(this.enemies, this.sceneryGroup);

        this.input.on('pointerdown', (pointer) => {
            if (pointer.x > this.cameras.main.width - 100 && pointer.y < 80) {
                return;
            }

            if (this.gameIsPaused) return;

            let worldX = pointer.x + this.cameras.main.scrollX;
            let worldY = pointer.y + this.cameras.main.scrollY;

            if (selectedCharacter === 'Will') {
                this.triggerWillKatanaSwing(worldX, worldY);
            } else {
                this.triggerCarlosStaffCast(worldX, worldY);
            }
        });

        this.time.addEvent({ 
            delay: 1500, 
            callback: () => {
                if (this.gameIsPaused) return;

                let angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
                let x = Phaser.Math.Clamp(this.player.x + Math.cos(angle) * 600, 50, WORLD_SIZE - 50);
                let y = Phaser.Math.Clamp(this.player.y + Math.sin(angle) * 600, 50, WORLD_SIZE - 50);
                
                let enemy = this.enemies.create(x, y, 'goblin_enemy');
                enemy.health = 6; 
                enemy.speedFactor = 1.0; 
                enemy.setDepth(9);
                
                this.tweens.add({
                    targets: enemy,
                    y: '+=8',
                    duration: 250,
                    yoyo: true,
                    repeat: -1
                });
            }, 
            callbackScope: this, 
            loop: true 
        });

        this.physics.add.overlap(this.projectiles, this.enemies, (bullet, enemy) => { 
            if (this.gameIsPaused) return;

            let dmg = bullet.damageValue !== undefined ? bullet.damageValue : 2;
            enemy.health -= dmg;
            
            if (bullet.isThunderShock) {
                enemy.speedFactor = 0.3; 
                enemy.setTint(0x3498db); 
                
                if (enemy.slowTimer) enemy.slowTimer.destroy();
                
                enemy.slowTimer = this.time.delayedCall(3500, () => {
                    if (enemy && enemy.active) {
                        enemy.speedFactor = 1.0;
                        enemy.clearTint();
                    }
                });
            }

            // Explosion color checks character setup for red impact explosions
            let explosionColor = 0xffffff;
            if (selectedCharacter === 'Will') {
                explosionColor = 0xff1111; 
            } else if (bullet.texture.key === 'blue_magic_orb') {
                explosionColor = 0x3498db;
            } else if (bullet.isThunderShock) {
                explosionColor = 0xf1c40f;
            }

            this.createExplosion(enemy.x, enemy.y, explosionColor);
            
            let dmgText = this.add.text(enemy.x, enemy.y - 20, `-${dmg}`, { font: 'bold 16px Arial', fill: '#ff3333' });
            this.tweens.add({ 
                targets: dmgText, 
                y: dmgText.y - 40, 
                alpha: 0, 
                duration: 600, 
                onComplete: () => { dmgText.destroy(); } 
            });

            if (bullet.texture.key !== 'sword_slash_proj') {
                bullet.destroy(); 
            }

            if (enemy.health <= 0) {
                this.gems.create(enemy.x, enemy.y, 'gemPic'); 
                enemy.destroy(); 
            }
        }, null, this);
        
        this.physics.add.overlap(this.player, this.enemies, (p, enemy) => {
            if (this.gameIsPaused) return;

            if (!this.isInvincible) {
                this.playerHealth--;
                this.isInvincible = true;
                
                this.playerContainer.iterate((child) => { if (child.setTint) child.setTint(0xff3333); });
                this.cameras.main.flash(120, 150, 0, 0);

                this.time.delayedCall(400, () => {
                    this.isInvincible = false;
                    this.playerContainer.iterate((child) => { if (child.clearTint) child.clearTint(); });
                });

                if (this.playerHealth <= 0) {
                    this.scene.start('MenuScene'); 
                }
                this.updateUIText();
            }
        }, null, this);
        
        this.physics.add.overlap(this.player, this.gems, (p, g) => {
            if (this.gameIsPaused) return;

            this.createExplosion(g.x, g.y, 0x54a0ff);
            g.destroy(); 
            this.score += 10; 
            this.playerXP += 25;
            this.playerMana = Phaser.Math.Clamp(this.playerMana + 10, 0, this.playerMaxMana);

            if (this.playerXP >= this.xpNeeded) { 
                this.playerLevel++; 
                this.playerXP = 0; 
                this.xpNeeded = Math.floor(this.xpNeeded * 1.5); 
            }
            this.updateUIText();
            
            this.tweens.add({ 
                targets: this.playerContainer, 
                scaleX: 1.15, 
                scaleY: 1.15, 
                duration: 60, 
                yoyo: true 
            });
        }, null, this);

        this.uiText = this.add.text(20, 20, '', { font: 'bold 20px Courier New', fill: '#f1c40f' }).setScrollFactor(0).setDepth(100);
        this.updateUIText();

        this.slotText1 = this.add.text(0, 0, '1', { font: 'bold 11px Courier New', fill: '#f1c40f' }).setOrigin(0, 0).setScrollFactor(0).setDepth(100);
        this.slotText2 = this.add.text(0, 0, '2', { font: 'bold 11px Courier New', fill: '#f1c40f' }).setOrigin(0, 0).setScrollFactor(0).setDepth(100);
        this.slotLabel1 = this.add.text(0, 0, '', { font: '9px Geneva', fill: '#ffffff' }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100);
        this.slotLabel2 = this.add.text(0, 0, '', { font: '9px Geneva', fill: '#ffffff' }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100);

        this.gameIsPaused = false;
        this.createPauseButtonUI();

        this.scale.on('resize', this.resize, this);
    }

    createPauseButtonUI() {
        const screenWidth = this.cameras.main.width;
        const screenHeight = this.cameras.main.height;
        const midX = screenWidth / 2;
        const midY = screenHeight / 2;
        
        this.pauseBtn = this.add.text(screenWidth - 60, 30, '║║', { font: 'bold 26px Courier New', fill: '#ffffff' })
            .setScrollFactor(0)
            .setDepth(150)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        this.pauseBtn.on('pointerover', () => { this.pauseBtn.setStyle({ fill: '#f1c40f' }); });
        this.pauseBtn.on('pointerout', () => { this.pauseBtn.setStyle({ fill: '#ffffff' }); });
        this.pauseBtn.on('pointerdown', () => { this.togglePauseGame(); });

        this.pauseBg = this.add.graphics()
            .setScrollFactor(0)
            .setDepth(180)
            .setVisible(false);
        this.pauseBg.fillStyle(0x000000, 0.85);
        this.pauseBg.fillRect(0, 0, 5000, 5000);

        this.pauseTitle = this.add.text(midX, midY - 100, '— GAME PAUSED —', { font: 'bold 36px Georgia', fill: '#ffffff' })
            .setScrollFactor(0)
            .setDepth(190)
            .setOrigin(0.5)
            .setVisible(false);

        this.resumeBtn = this.add.text(midX, midY - 10, '[ RESUME GAME ]', { font: 'bold 22px Courier New', fill: '#2ecc71' })
            .setScrollFactor(0)
            .setDepth(190)
            .setOrigin(0.5)
            .setVisible(false)
            .setInteractive({ useHandCursor: true });

        this.resumeBtn.on('pointerover', () => { this.resumeBtn.setStyle({ fill: '#ffffff' }); });
        this.resumeBtn.on('pointerout', () => { this.resumeBtn.setStyle({ fill: '#2ecc71' }); });
        this.resumeBtn.on('pointerdown', () => { this.togglePauseGame(); });

        this.quitBtn = this.add.text(midX, midY + 50, '[ QUIT TO MAIN MENU ]', { font: 'bold 22px Courier New', fill: '#e74c3c' })
            .setScrollFactor(0)
            .setDepth(190)
            .setOrigin(0.5)
            .setVisible(false)
            .setInteractive({ useHandCursor: true });

        this.quitBtn.on('pointerover', () => { this.quitBtn.setStyle({ fill: '#ffffff' }); });
        this.quitBtn.on('pointerout', () => { this.quitBtn.setStyle({ fill: '#e74c3c' }); });
        this.quitBtn.on('pointerdown', () => {
            this.physics.resume();
            this.scene.start('MenuScene');
        });
    }

    togglePauseGame() {
        this.gameIsPaused = !this.gameIsPaused;

        if (this.gameIsPaused) {
            this.physics.pause();
            this.tweens.pauseAll();
            
            const midX = this.cameras.main.width / 2;
            const midY = this.cameras.main.height / 2;

            this.pauseTitle.setPosition(midX, midY - 100);
            this.resumeBtn.setPosition(midX, midY - 10);
            this.quitBtn.setPosition(midX, midY + 50);

            this.pauseBg.setVisible(true);
            this.pauseTitle.setVisible(true);
            this.resumeBtn.setVisible(true);
            this.quitBtn.setVisible(true);
            
            this.pauseBtn.setText('▶'); 
        } else {
            this.physics.resume();
            this.tweens.resumeAll();

            this.pauseBg.setVisible(false);
            this.pauseTitle.setVisible(false);
            this.resumeBtn.setVisible(false);
            this.quitBtn.setVisible(false);

            this.pauseBtn.setText('║║'); 
        }
    }

    triggerCarlosStaffCast(targetX, targetY) {
        if (this.isSwinging) return;
        this.isSwinging = true;

        this.tweens.add({
            targets: this.heldStaff,
            angle: this.heldStaff.angle - 35,
            x: -2,
            duration: 100,
            yoyo: true,
            hold: 50,
            ease: 'Back.easeOut',
            onStart: () => {
                let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, targetX, targetY);
                let magicOrb = this.projectiles.create(this.player.x + Math.cos(angle)*30, this.player.y + Math.sin(angle)*30, 'blue_magic_orb');
                magicOrb.setDepth(12);
                magicOrb.damageValue = 3;
                
                this.physics.velocityFromRotation(angle, 750, magicOrb.body.velocity);

                let startX = this.player.x;
                let startY = this.player.y;

                this.time.addEvent({
                    delay: 16,
                    repeat: 45,
                    callback: () => {
                        if (magicOrb && magicOrb.active) {
                            let distanceTravelled = Phaser.Math.Distance.Between(startX, startY, magicOrb.x, magicOrb.y);
                            if (distanceTravelled >= 640) { 
                                this.createExplosion(magicOrb.x, magicOrb.y, 0x3498db);
                                magicOrb.destroy();
                            }
                        }
                    }
                });
            },
            onComplete: () => {
                this.isSwinging = false;
                this.heldStaff.x = 16;
            }
        });

        this.tweens.add({
            targets: this.playerRightArm,
            angle: -30,
            duration: 90,
            yoyo: true
        });
    }

    triggerWillKatanaSwing(targetX, targetY) {
        if (selectedCharacter !== 'Will' || this.isSwinging) {
            return;
        }
        this.isSwinging = true;

        this.tweens.add({
            targets: this.heldKatana,
            angle: this.heldKatana.angle - 140, 
            x: -6,
            duration: 80,
            yoyo: true, 
            hold: 30,
            ease: 'Back.easeOut',
            onStart: () => {
                let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, targetX, targetY);
                let slashArc = this.projectiles.create(this.player.x + Math.cos(angle)*35, this.player.y + Math.sin(angle)*35, 'sword_slash_proj');
                slashArc.setScale(1.7).setTint(0xff3333).setDepth(12); // Base basic attack slash set to solid red tint
                slashArc.damageValue = 4;
                
                this.physics.velocityFromRotation(angle, 1400, slashArc.body.velocity);
                slashArc.setRotation(angle + Math.PI / 2);

                let startX = this.player.x;
                let startY = this.player.y;
                this.time.addEvent({
                    delay: 16,
                    repeat: 30,
                    callback: () => {
                        if (slashArc && slashArc.active) {
                            let distanceTravelled = Phaser.Math.Distance.Between(startX, startY, slashArc.x, slashArc.y);
                            if (distanceTravelled >= 640) { 
                                slashArc.destroy();
                            }
                        }
                    }
                });
            },
            onComplete: () => {
                this.isSwinging = false;
                this.heldKatana.x = 16;
            }
        });

        this.tweens.add({
            targets: this.playerRightArm,
            angle: -90,
            duration: 70,
            yoyo: true
        });
    }

    castSlot1Ability() {
        if (this.slot1CooldownActive) return;

        if (selectedCharacter === 'Will') {
            if (this.playerMana < 5) return;
            this.playerMana -= 5;
            this.slot1CooldownActive = true;
            this.slot1CooldownTimer = 5000; 

            let worldMouseX = this.pointer.x + this.cameras.main.scrollX;
            let worldMouseY = this.pointer.y + this.cameras.main.scrollY;
            let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, worldMouseX, worldMouseY);

            let slash = this.projectiles.create(this.player.x, this.player.y, 'sword_slash_proj');
            slash.setScale(2.2).setTint(0xff0000); // Modified Ability [1] Sword Slash projectile tint to crimson red
            slash.damageValue = 15; 
            
            this.physics.velocityFromRotation(angle, 600, slash.body.velocity);
            slash.setRotation(angle + Math.PI / 2);

            let startX = this.player.x;
            let startY = this.player.y;
            
            this.time.addEvent({
                delay: 16,
                repeat: 90,
                callback: () => {
                    if (slash && slash.active) {
                        let dist = Phaser.Math.Distance.Between(startX, startY, slash.x, slash.y);
                        if (dist >= 880) { 
                            this.createExplosion(slash.x, slash.y, 0xff1111); // Updated pop burst to red
                            slash.destroy();
                        }
                    }
                }
            });
        } else {
            if (this.playerMana < 6) return;
            this.playerMana -= 6;
            this.slot1CooldownActive = true;
            this.slot1CooldownTimer = 800; 

            let worldMouseX = this.pointer.x + this.cameras.main.scrollX;
            let worldMouseY = this.pointer.y + this.cameras.main.scrollY;
            let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, worldMouseX, worldMouseY);

            this.tweens.add({
                targets: this.heldStaff,
                angle: this.heldStaff.angle - 40,
                duration: 80,
                yoyo: true
            });

            let bolt = this.projectiles.create(this.player.x, this.player.y, 'thunder_bolt_proj');
            bolt.setScale(1.5).setDepth(12);
            bolt.damageValue = 4;
            bolt.isThunderShock = true; 

            this.physics.velocityFromRotation(angle, 1100, bolt.body.velocity);
            bolt.setRotation(angle);

            let startX = this.player.x;
            let startY = this.player.y;

            this.time.addEvent({
                delay: 16,
                repeat: 60,
                callback: () => {
                    if (bolt && bolt.active) {
                        let dist = Phaser.Math.Distance.Between(startX, startY, bolt.x, bolt.y);
                        if (dist >= 960) { 
                            this.createExplosion(bolt.x, bolt.y, 0xf1c40f);
                            bolt.destroy();
                        }
                    }
                }
            });
        }
    }

    castSlot2Ability() {
        if (this.slot2CooldownActive) return;

        if (selectedCharacter === 'Will') {
            if (this.playerMana <= 0) return;
            this.playerMana = 0;
            this.slot2CooldownActive = true;
            this.slot2CooldownTimer = 45000; 
            this.manaSlowingActive = true;
            this.manaRegenRate = this.baseManaRegen * 0.15;

            let worldMouseX = this.pointer.x + this.cameras.main.scrollX;
            let worldMouseY = this.pointer.y + this.cameras.main.scrollY;
            let facingAngle = Phaser.Math.Angle.Between(this.player.x, this.player.y, worldMouseX, worldMouseY);

            let targetX = this.player.x + Math.cos(facingAngle) * 100;
            let targetY = this.player.y + Math.sin(facingAngle) * 100;

            let katana = this.add.image(targetX, targetY - 400, 'divine_katana').setScale(4).setAlpha(0).setDepth(50);
            katana.rotation = facingAngle + Math.PI / 4; 
            katana.setTint(0xff3333); // Katana asset tinted red for the giant drop sequence

            this.tweens.add({
                targets: katana,
                y: targetY,
                alpha: 1,
                duration: 400,
                ease: 'Expo.easeIn',
                onComplete: () => {
                    this.cameras.main.shake(600, 0.025);
                    this.cameras.main.flash(200, 255, 50, 50); // Screenshake flash color converted to intense red aura

                    let explRing = this.add.graphics().setDepth(49);
                    explRing.fillStyle(0xff1111, 0.8); // Radial shockwave ring shifted to red
                    explRing.fillCircle(targetX, targetY, 10);
                    
                    this.tweens.add({
                        targets: explRing,
                        scaleX: 120,
                        scaleY: 120,
                        alpha: 0,
                        duration: 700,
                        ease: 'Sine.easeOut',
                        onComplete: () => { explRing.destroy(); }
                    });

                    let victims = this.enemies.getChildren().slice();
                    victims.forEach((enemy) => {
                        this.createExplosion(enemy.x, enemy.y, 0xff1111); // Victims explode in deep red mist particles
                        this.gems.create(enemy.x, enemy.y, 'gemPic'); 
                        this.score += 10;
                        enemy.destroy();
                    });

                    katana.destroy();
                }
            });
        } else {
            if (this.playerMana < 40) return; 
            this.playerMana = 0;
            this.slot2CooldownActive = true;
            this.slot2CooldownTimer = 14000; 

            this.cameras.main.flash(150, 174, 214, 241);

            this.tweens.add({
                targets: this.heldStaff,
                angle: '+=180',
                duration: 400,
                yoyo: true
            });

            const strikeRadius = 350;
            const strikeCount = 12;

            for (let i = 0; i < strikeCount; i++) {
                this.time.delayedCall(i * 120, () => {
                    let rx = this.player.x + Phaser.Math.Between(-strikeRadius, strikeRadius);
                    let ry = this.player.y + Phaser.Math.Between(-strikeRadius, strikeRadius);

                    let strikeLine = this.add.graphics().setDepth(15);
                    strikeLine.lineStyle(5, 0xffffff, 1);
                    strikeLine.beginPath();
                    strikeLine.moveTo(rx - 30, ry - 500); 
                    strikeLine.lineTo(rx + 15, ry - 200);
                    strikeLine.lineTo(rx - 10, ry - 100);
                    strikeLine.lineTo(rx, ry);
                    strikeLine.strokePath();

                    strikeLine.lineStyle(2, 0xf1c40f, 0.8);
                    strikeLine.strokePath();

                    this.cameras.main.shake(100, 0.004);

                    let victims = this.enemies.getChildren().slice();
                    victims.forEach((enemy) => {
                        let dist = Phaser.Math.Distance.Between(rx, ry, enemy.x, enemy.y);
                        if (dist <= 120) {
                            enemy.health -= 12; 
                            this.createExplosion(enemy.x, enemy.y, 0xf1c40f);
                            if (enemy.health <= 0) {
                                this.gems.create(enemy.x, enemy.y, 'gemPic');
                                this.score += 10;
                                enemy.destroy();
                            }
                        }
                    });

                    this.tweens.add({
                        targets: strikeLine,
                        alpha: 0,
                        duration: 150,
                        onComplete: () => { strikeLine.destroy(); }
                    });
                });
            }
        }
    }

    updateUIText() {
        let status = this.manaSlowingActive ? " [BURNT]" : "";
        this.uiText.setText(`CHARACTER: ${selectedCharacter}\nLVL: ${this.playerLevel}\nXP: ${this.playerXP}/${this.xpNeeded}\nScore: ${this.score}\nMANA STATE:${status}`);
    }

    drawScreenBars() {
        this.uiBarsGraphic.clear();
        
        const screenWidth = this.cameras.main.width;
        const screenHeight = this.cameras.main.height;
        const midX = screenWidth / 2;

        let barWidth = 460;     
        let barHeight = 22;     
        let startX = midX - (barWidth / 2); 
        
        let hpY = screenHeight - 150;
        let manaY = screenHeight - 120;
        let slotY = screenHeight - 88;

        let slotSize = 50;      
        let slot1X = midX - 110; 
        let slot2X = midX + 60;

        if (this.slotText1 && this.slotText2) {
            this.slotText1.setPosition(slot1X + 5, slotY + 4);
            this.slotText2.setPosition(slot2X + 5, slotY + 4);
        }

        if (this.slotLabel1 && this.slotLabel2) {
            this.slotLabel1.setPosition(slot1X + (slotSize / 2), slotY + slotSize + 4);
            this.slotLabel1.setText(selectedCharacter === 'Will' ? 'S.Slash' : 'T.Shock');
            
            this.slotLabel2.setPosition(slot2X + (slotSize / 2), slotY + slotSize + 4);
            this.slotLabel2.setText(selectedCharacter === 'Will' ? 'Divine' : 'T.Wave');
        }

        this.uiBarsGraphic.fillStyle(0x220000, 1); 
        this.uiBarsGraphic.fillRect(startX, hpY, barWidth, barHeight);
        let hpPct = Phaser.Math.Clamp(this.playerHealth / this.playerMaxHealth, 0, 1);
        this.uiBarsGraphic.fillStyle(0xe74c3c, 1); 
        this.uiBarsGraphic.fillRect(startX, hpY, barWidth * hpPct, barHeight);
        
        this.uiBarsGraphic.fillStyle(0x000c22, 1); 
        this.uiBarsGraphic.fillRect(startX, manaY, barWidth, barHeight);
        let manaPct = Phaser.Math.Clamp(this.playerMana / this.playerMaxMana, 0, 1);
        
        this.uiBarsGraphic.fillStyle(this.manaSlowingActive ? 0x6c3483 : 0x2980b9, 1); 
        this.uiBarsGraphic.fillRect(startX, manaY, barWidth * manaPct, barHeight);

        this.uiBarsGraphic.lineStyle(3, 0x444444, 1);
        this.uiBarsGraphic.strokeRect(startX, hpY, barWidth, barHeight);
        this.uiBarsGraphic.strokeRect(startX, manaY, barWidth, barHeight);

        this.uiBarsGraphic.lineStyle(3, 0xcc9e00, 1); 
        this.uiBarsGraphic.strokeRect(slot1X, slotY, slotSize, slotSize);
        this.uiBarsGraphic.strokeRect(slot2X, slotY, slotSize, slotSize);

        if (this.slot1CooldownActive) {
            let pct = this.slot1CooldownTimer / this.slot1CooldownDuration;
            this.uiBarsGraphic.fillStyle(0x000000, 0.7);
            this.uiBarsGraphic.fillRect(slot1X, slotY + (slotSize * (1 - pct)), slotSize, slotSize * pct);
        }

        if (this.slot2CooldownActive) {
            let pct = this.slot2CooldownTimer / this.slot2CooldownDuration;
            this.uiBarsGraphic.fillStyle(0x78281f, 0.75); 
            this.uiBarsGraphic.fillRect(slot2X, slotY + (slotSize * (1 - pct)), slotSize, slotSize * pct);
        }
    }

    createExplosion(x, y, color) {
        for (let i = 0; i < 6; i++) {
            let p = this.add.image(x, y, 'particle').setTint(color).setDepth(20);
            this.physics.add.existing(p);
            let angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
            let speed = Phaser.Math.Between(120, 220);
            p.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
            this.time.delayedCall(250, () => { p.destroy(); });
        }
    }

    resize(gameSize) {
        this.cameras.main.setSize(gameSize.width, gameSize.height);
        
        if (this.pauseBtn) {
            this.pauseBtn.setPosition(gameSize.width - 60, 30);
        }
        
        if (this.resumeBtn && this.quitBtn && this.pauseTitle) {
            const midX = gameSize.width / 2;
            const midY = gameSize.height / 2;
            this.pauseTitle.setPosition(midX, midY - 100);
            this.resumeBtn.setPosition(midX, midY - 10);
            this.quitBtn.setPosition(midX, midY + 50);
        }
    }

    update(time, delta) {
        if (this.gameIsPaused) return; 

        if (this.slot1CooldownActive) {
            this.slot1CooldownTimer -= delta;
            if (this.slot1CooldownTimer <= 0) {
                this.slot1CooldownActive = false;
            }
        }

        if (this.slot2CooldownActive) {
            this.slot2CooldownTimer -= delta;
            if (this.slot2CooldownTimer <= 0) {
                this.slot2CooldownActive = false;
                if (selectedCharacter === 'Will') {
                    this.manaSlowingActive = false;
                    this.manaRegenRate = this.baseManaRegen; 
                }
                this.updateUIText();
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.hotkeys.slot1)) {
            this.castSlot1Ability();
        }

        if (Phaser.Input.Keyboard.JustDown(this.hotkeys.slot2)) {
            this.castSlot2Ability();
        }

        if (this.playerMana < this.playerMaxMana) {
            this.playerMana = Phaser.Math.Clamp(this.playerMana + this.manaRegenRate, 0, this.playerMaxMana);
        }

        this.player.body.setVelocity(0);
        let moving = false;
        
        if (this.wasd.left.isDown) { 
            this.player.body.setVelocityX(-this.playerSpeed); 
            moving = true; 
        } else if (this.wasd.right.isDown) { 
            this.player.body.setVelocityX(this.playerSpeed); 
            moving = true; 
        }
        
        if (this.wasd.up.isDown) { 
            this.player.body.setVelocityY(-this.playerSpeed); 
            moving = true; 
        } else if (this.wasd.down.isDown) { 
            this.player.body.setVelocityY(this.playerSpeed); 
            moving = true; 
        }

        this.playerContainer.setPosition(this.player.x, this.player.y);
        this.playerContainer.rotation = 0;

        if (moving) {
            let walkCycle = Math.sin(time * 0.015);
            this.playerLeftLeg.angle = walkCycle * 25;
            this.playerRightLeg.angle = -walkCycle * 25;
            
            this.playerLeftArm.angle = -walkCycle * 15;
            if (!this.isSwinging) {
                this.playerRightArm.angle = walkCycle * 15;
            }

            this.playerHead.y = -28 + Math.abs(Math.sin(time * 0.03)) * 3;
            this.playerTorso.y = -6 + Math.abs(Math.sin(time * 0.03)) * 2;
        } else {
            let breathe = Math.sin(time * 0.003);
            this.playerLeftLeg.angle = 0;
            this.playerRightLeg.angle = 0;
            this.playerLeftArm.angle = breathe * 4;
            if (!this.isSwinging) {
                this.playerRightArm.angle = -breathe * 4;
            }
            this.playerHead.y = -28 + breathe * 1.5;
        }

        if (!this.isSwinging) {
            if (selectedCharacter === 'Will') {
                this.heldKatana.angle = this.heldKatana.restingOffsetAngle + Math.sin(time * 0.01) * 8;
            } else {
                this.heldStaff.angle = this.heldStaff.restingOffsetAngle + Math.sin(time * 0.01) * 4;
            }
        }

        this.enemies.getChildren().forEach((e) => { 
            let baseSpeed = 70;
            let currentSpeed = baseSpeed * (e.speedFactor !== undefined ? e.speedFactor : 1.0);
            this.physics.moveToObject(e, this.player, currentSpeed); 
            e.rotation = 0; 
        });
        
        this.gems.getChildren().forEach((g) => { 
            if (Phaser.Math.Distance.Between(this.player.x, this.player.y, g.x, g.y) < 160) {
                this.physics.moveToObject(g, this.player, 320); 
            } else {
                g.body.setVelocity(0, 0); 
            }
        });
        
        this.drawScreenBars();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    render: {
        pixelArt: true, 
        antialias: false
    },
    scale: {
        mode: Phaser.Scale.RESIZE, 
        width: '100%',
        height: '100%'
    },
    physics: { default: 'arcade' },
    scene: [MenuScene, CustomizeScene, MainGameScene]
};

const game = new Phaser.Game(config);
