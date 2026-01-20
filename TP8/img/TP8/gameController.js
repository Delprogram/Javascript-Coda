class GameController {
    constructor() {
        this.game = new Game();
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);

        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);
        const userData = JSON.parse(localStorage.getItem("jsArenaPlayer"));
        this.pseudo = userData.pseudo;
        this.serverUrl = userData.serverUrl;
        this.skinPath = userData.skinPath;
        this.socket = new WebSocket(this.serverUrl);

        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            attack: false
        };
    }

    // === Main render loop ===
    loop(timestamp) {

        // Request the next frame
        requestAnimationFrame(this.loop);
    }
}

class WebSocket {
    constructor(serverUrl) {
        this.serverUrl = serverUrl;
    }
}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)

const myGame = new GameController();
console.log(myGame.pseudo);  
console.log(myGame.serverUrl);
console.log(myGame.skinPath); 