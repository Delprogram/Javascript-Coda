import Player from "./player.js";
const skin = document.querySelector('.player');
let x = 235;
let y = 235;
const player = new Player("Fidel", skin);
player.seDeplacer(x, y);
