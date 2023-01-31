var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var car1, car1_img, car2, car2_img;
var cars=[];
var gameState=0;
var playerCount;
var obs1_img,obs2_img,goldCoin_img,track_img,fuels_img;
var fuels, coins;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");

  fuels_img = loadImage("./assets/fuel.png");
  obs1_img = loadImage("./assets/obstacle1.png");
  obs2_img = loadImage("./assets/obstacle2.png");
  goldCoin_img = loadImage("./assets/goldCoin.png");
  track_img = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1);
  }
  
  if(gameState===1){
    game.play();
  }



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setStyle (){
  this.titleImg.class("gameTitle")
}

