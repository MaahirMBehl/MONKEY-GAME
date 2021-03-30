
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime=0;
var ground
var score=0;
var bg

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 bgI=loadImage("jungle.jpg");
}



function setup() {
  



ground=createSprite(400,350,900,10);
bg=createSprite(150,300,3000,3000)
  bg.addImage(bgI)
  bg.scale=0.8;
  
  monkey=createSprite(70,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;

  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  
  console.log(monkey.y)
  background("white")
  monkey.collide(ground); 
  
  
  if(obstacleGroup.isTouching(monkey))
  {
  score=score-10; 
  obstacleGroup.destroyEach();
  monkey.scale=monkey.scale-0.04;
  }
  
  if(FoodGroup.isTouching(monkey))
  {
  score=score+10; 
  FoodGroup.destroyEach();
  monkey.scale=monkey.scale+0.02;
  }
  
  if(keyDown("space")&& monkey.y>300){
    
    monkey.velocityY=-10;
  }
monkey.velocityY=monkey.velocityY+0.4      ;  
  textSize(30)
  
 
  
  SurvivalTime = SurvivalTime + Math.ceil(frameCount/109000000);
  drawSprites();
  spawnBananas();
  spawnobstacles();
  fill("white");
   text("Survival Time:"+SurvivalTime,100,60);
  
  text("Score:" +score,100,100);
console.log(score.depth)
  
}
function spawnBananas(){
if(frameCount%60===0){
banana=createSprite(600,Math.round(random(120,300)))
banana.velocityX=-9;
banana.addImage(bananaImage); 
  banana.scale=0.1;
FoodGroup.add(banana);
  
  

}
  
  
}
function spawnobstacles(){
if(frameCount%100===0){
obstacle=createSprite(600,328,10,10);
obstacle.velocityX=-9;
obstacle.addImage(obstaceImage); 
 obstacle.scale=0.1;
  
obstacleGroup.add(obstacle);
  

}
  
  
}





