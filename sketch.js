var scl = 20;
var s;
var food;

function setup() {
  createCanvas(600, 500);
  s = new Snake();
  frameRate(10);
  pickLoction();

}

function draw() {
  background(51);
  s.death();
  if(s.eats(food)){
    pickLoction();
  }
  s.update();
  s.show();

  fill(153, 51, 255);
  rect(food.x,food.y,scl,scl);
}

function keyPressed() {
  if(keyCode == UP_ARROW){
    s.change(0,-1);
  }
  else if (keyCode == DOWN_ARROW) {
    s.change(0,1);
  }
  else if (keyCode == LEFT_ARROW) {
    s.change(-1,0);
  }
  else if (keyCode == RIGHT_ARROW) {
    s.change(1,0);
  }
}

function mouseClicked(){
  s.eat();
}

function pickLoction(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  console.log("FOOD< COLS, ROWS > :" + cols + " , " + rows);
  food = createVector(floor(random(cols)),floor(random(rows)));
  console.log("FOOD :" + food);
  food.mult(scl);
}
