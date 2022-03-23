var sea,ship;
var seaimg,shipimg;

function preload(){
  seaimg = loadImage("sea.png");
  shipimg = loadAnimation("ship1.png","ship1.png",
                            "ship2.png","ship1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(4050,200);
  sea.addImage(seaimg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipimg);
  ship.scale =0.25;
  
}

function draw() {
  background("white");
  sea.velocityX = -3;

  
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}