var fixedRect, movingRect, r1, r2, r3, r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";

  r1 = createSprite(100,100,50,50);
  r1.shapeColor="red";

  r2 = createSprite(300,100,50,50);
  r2.shapeColor="pink";

  r3 = createSprite(500,100,50,50);
  r3.shapeColor="orange";

  r4 = createSprite(700,100,50,50);
  r4.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if( colliding(movingRect,r3)){
    movingRect.shapeColor="blue";
    r3.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="yellow";
    r3.shapeColor="green";
  }
  if(colliding(movingRect,r1)){
    movingRect.shapeColor="white";
    r1.shapeColor="white";
  }
   else{
     movingRect.shapeColor="yellow";
     r1.shapeColor="red";
   }
 console.log(add(4,6))
  drawSprites();

  console.log(multiply(6,7))
}
function colliding(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
return false;
}
}

function add(no1,no2){
var sum = no1 + no2;
return sum
}

function multiply(no1,no2){
  var product = no1*no2;
  return product
}