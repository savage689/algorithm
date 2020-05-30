var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,45,120,50);
  movingRect = createSprite(500,45,20,58);
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
fixedRect.debug = true;
movingRect.debug = true;
fixedRect.velocityX = 8;
movingRect.velocityX = -8;
}
function draw() {
  background(0);  
  drawSprites();
  //movingRect.x = mouseX;
  //movingRect.y =mouseY;
  /*
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green ";

  }

  else{
    fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
  }
  */
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX*-1;
    movingRect.velocityX  = movingRect.velocityX*-1;
  }
}
