class Player {
    constructor (pseudo, skin) {
        this.pseudo = pseudo;
        this.skin = skin;
        this.atk;
        this.cooldown;
        this.position;
        this.speed;
        this.hp;
        this.hps;
    }

    seDeplacer (x, y) {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    y -= 2;
                    break;
                case 'ArrowDown':
                    y += 2;
                    break;
                case 'ArrowLeft':
                    x -= 2;
                    break;
                case 'ArrowRight':
                    x += 2;
                    break;
            }
        });
        this.skin.style.left = x + 'px';
        this.skin.style.top = y + 'px';
    }
    /*
    attaquer (touch, degats) {
        
    }

    levelup () {

    }*/

}