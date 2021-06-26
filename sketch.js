var bgimg;
var menu;
var gameState = 0;
var player;

function preload(){
  bgimg = loadImage("images/bg.jpg")


}


function setup() {
  gameState = 0;
  createCanvas(windowWidth,windowHeight);
  menu = new Menu(windowWidth/2,windowHeight-350);
  player = new Player(windowWidth-1500,windowHeight-80)
}

function draw() {
  background(bgimg);  
  drawSprites();

  if(gameState === 0){
    if(mousePressedOver(menu.newgame)){
      gameState = 1;
      menu.newgame.destroy();
      menu.quit.destroy();
    }
  }
  else if(gameState === 1) {
    player.andy.visible = true;
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
          case 'ArrowLeft':
              circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
              break;
          case 'ArrowRight':
              circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
              break;
          case 'ArrowUp':
              circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
              break;
          case 'ArrowDown':
              circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
              break;
      }
  }

    )
}}