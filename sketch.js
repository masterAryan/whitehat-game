
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player;
var playerImg,playerImg1,playerImg2;

var engine,world;
var rect1 ,rect2,rect3,rect4;
var back,backImg;
var home1,home2;

var ground;


function preload(){
  playerImg = loadImage("flash/plr1.png");
  playerImg1 = loadAnimation("flash/plr1.png","flash/plr2.png","flash/plr3.png","flash/plr4.png","flash/plr5.png","flash/plr6.png","flash/plr7.png");
  playerImg2 = loadAnimation("flash/plr1.jpg","flash/plr2.jpg","flash/plr3.jpg","flash/plr4.jpg","flash/plr5.jpg","flash/plr6.jpg","flash/plr7.jpg");
  backImg = loadImage("wall.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth,displayHeight-100);

   back  = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
   back.scale = 4;
   back.addImage(backImg);

   player = createSprite(10,700,10,10);
   player.scale = 0.3;
   player.addAnimation("stand",playerImg);
   player.addAnimation("run",playerImg1);
   player.addAnimation("back",playerImg2);
   //player.addImage(playerImg);

  rect1 = createSprite(displayWidth/6 ,displayHeight/1.5,displayWidth/2,displayHeight/90);

  ground = createSprite(displayWidth/2,displayHeight-110,displayWidth,20);

  console.log(displayWidth/4);
  console.log(displayHeight);

}

function draw() {
 if(keyDown("right")){
   player.x = player.x+3;
   player.changeAnimation("run",playerImg1);
   
 }else if(keyDown("left")){
  player.x = player.x-3;
  player.changeAnimation("back",playerImg2);
  
}
 else{
   player.changeAnimation("stand",playerImg);
}
 
 
if(keyDown("up")){
  player.velocityY= -12;

  
}
player.velocityY = player.velocityY +0.7;


//player.addAnimation("run",playerImg1);

player.collide(rect1);
player.collide(ground);

 rect1.display();
 createEdgeSprites();
  drawSprites();
}