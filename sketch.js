var tower,towerImage;
var ghost,ghostImage;
var sound1;



function preload() {
towerImage=loadImage("tower.png");
  ghostImage=loadImage("ghost-standing.png");
  sound1=loadSound("spooky.wav");
}

function setup() {
  createCanvas(500,500);
  sound1.loop();
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.scale=0.7;
  tower.velocityY=5;
  
  ghost=createSprite(300,450,10,10);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
}

function draw (){
 
  if(keyDown("space")){
    ghost.velocityY=-6;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  
  
  if(tower.y>400){
    tower.y=300;
  }
  
  
  
  
  
  
drawSprites();  
}