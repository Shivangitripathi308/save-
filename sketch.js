var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var bg_img
var player_img;
var instruction ;


function preload(){
 back_img = loadImage("images/bgimg.png");
  bg_img = loadImage("images/bg2.jpg");
  instruction = loadImage("images/instruction.jpg")
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}