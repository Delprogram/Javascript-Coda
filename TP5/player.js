class Player {
    constructor(pseudo, skin, position, isWalking) {
        this.pseudo = pseudo;
        this.skin = skin;

        this.position = {
            x: position[0],
            y: position[1]
        };

        this.speed = 2;

        this.isWalking = isWalking;
        this.isAttacking = false;
        this.isDying = false;

        this.walkSpriteDuration = 5;
        this.walkSpriteIndex = 0;
        this.walkSpriteNumber = 9;
        this.currentWalkSpriteStep = 0;
    }

    animer() {
        if (this.isWalking) {
            this.currentWalkSpriteStep++;

            if (this.currentWalkSpriteStep >= this.walkSpriteDuration) {
                this.currentWalkSpriteStep = 0;
                this.walkSpriteIndex++;
            }

            if (this.walkSpriteIndex >= this.walkSpriteNumber) {
                this.walkSpriteIndex = 0;
            }
        }

        console.log("Walk Animation:");
        console.log("isWalking =", this.isWalking);
        console.log("Sprite =", this.walkSpriteIndex, "/", this.walkSpriteNumber);
        console.log("Step =", this.currentWalkSpriteStep, "/", this.walkSpriteDuration);
    }

    seDeplacer() {
        document.addEventListener("keydown", (event) => {
            this.isWalking = true;

            switch (event.key) {
                case "ArrowUp":
                    this.position.y -= this.speed;
                    break;
                case "ArrowDown":
                    this.position.y += this.speed;
                    break;
                case "ArrowLeft":
                    this.position.x -= this.speed;
                    break;
                case "ArrowRight":
                    this.position.x += this.speed;
                    break;
            }

            this.skin.style.left = this.position.x + "px";
            this.skin.style.top = this.position.y + "px";
        });
    }
}


const skin = document.querySelector(".player");

const toto = new Player("Fidel", skin, [0, 0], false);
toto.seDeplacer();

setInterval(() => {
    toto.animer();
}, 1000 / 60); 
