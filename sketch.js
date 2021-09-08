var bgImg;
var soldier, soldierImg;
var woodenLog1, woodenLog2, woodenLog3, woodenBox4, woodenLogImg;
var woodenBox1, woodenBox2, woodenBox3,woodenLog4,  woodenLog5, woodenBoxImg;
var terrorist, terroristImg;
var door;

function preload(){
  bgImg = loadImage("background.jpg");
  soldierImg = loadImage("soldier.jpg");
  woodenLogImg = loadImage("wooden log.jpg");
  woodenBoxImg = loadImage("wooden box.jpg");
  terroristImg = loadImage("terrorist.jpg")
}

function setup() {
  createCanvas(800,800);

  soldier = createSprite(400, 700);
  soldier.addImage(soldierImg);
  soldier.scale = 0.5;
  
  woodenLog1 = createSprite(400,400);
  woodenLog1.addImage(woodenLogImg);
  woodenLog1.scale = 0.5;

  woodenLog2 = createSprite(350,400);
  woodenLog2.addImage(woodenLogImg);
  woodenLog2.scale = 0.5;

  woodenLog3 = createSprite(445,400);
  woodenLog3.addImage(woodenLogImg);
  woodenLog3.scale = 0.5;

  woodenLog4 = createSprite(750,400);
  woodenLog4.addImage(woodenLogImg);
  woodenLog4.scale = 1;

  woodenLog5 = createSprite(50,480);
  woodenLog5.addImage(woodenLogImg);
  woodenLog5.scale = 1;

  woodenBox1 = createSprite(50,100);
  woodenBox1.addImage(woodenBoxImg);
  woodenBox1.scale = 0.5;
  
  woodenBox2 = createSprite(725,725);
  woodenBox2.addImage(woodenBoxImg);
  woodenBox2.scale = 0.75;

  woodenBox3 = createSprite(50,200);
  woodenBox3.addImage(woodenBoxImg);
  woodenBox3.scale = 0.5;

  woodenBox4 = createSprite(750,100);
  woodenBox4.addImage(woodenBoxImg);
  woodenBox4.scale = 0.5;

  woodenBox5 = createSprite(50,750);
  woodenBox5.addImage(woodenBoxImg);
  woodenBox5.scale = 0.5;

  terrorist = createSprite(400,100);
  terrorist.addImage(terroristImg);
  terrorist.scale = 0.5;
  terrorist.velocityX = -20;

  door = createSprite(400,1,200,20);
}

function draw() {
  background(bgImg);
  
  createEdgeSprites();
  terrorist.bounceOff(woodenBox1);
  terrorist.bounceOff(woodenBox4);
  soldier.collide(woodenBox1);
  soldier.collide(woodenBox2);
  soldier.collide(woodenBox3);
  soldier.collide(woodenBox4);
  soldier.collide(woodenBox5);

  soldier.collide(woodenLog1);
  soldier.collide(woodenLog2);
  soldier.collide(woodenLog3);
  soldier.collide(woodenLog4);
  soldier.collide(woodenLog5);

  if(keyWentDown(UP_ARROW)){
    soldier.velocityY = -8;
}

if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 8;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 8;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = -8;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
if(soldier.isTouching(door)){
  fill("red");
  textSize(50);
  text("YOU WONN !!", 300,600);
  terrorist.velocityX = 0;
  if(keyWentDown(UP_ARROW)){
  soldier.velocityY = 0;
}

  if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
}
  if(soldier.isTouching(terrorist)){
  fill("red");
  textSize(50);
  text("YOU LOSS !!", 300,600);
  terrorist.velocityX = 0;
  if(keyWentDown(UP_ARROW)){
  soldier.velocityY = 0;
}

  if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
}
fill("black")
textSize(20)
text("EXIT DOOR => ", 150,20)
 drawSprites();
}