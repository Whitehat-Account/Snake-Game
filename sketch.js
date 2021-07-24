
var snake, food;
var scl = 20;
var count = 0;
var deathCount = 0;
var foodCount = 0;
var obstacle;

function setup() {
  frameRate(10);
  createCanvas(600, 600);
  snake = new Snake();
  pickFoodLocation();
}

function pickFoodLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function obstaclePickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  obstacle = createVector(floor(random(cols)), floor(random(rows)));
  obstacle.mult(scl);
}

function draw() {
  background(0, 100, 0);
  if (snake.eat(food)) {
    pickFoodLocation();
    foodCount++;
  }
  if (foodCount >= 1) {
    obstaclePickLocation();
  }

  snake.death();
  snake.update();
  snake.display();

  if (snake.death() === true) {
    deathCount++;
  }

  stroke(0, 200, 0);
  strokeWeight(2);
  for (var i = 0; i < width; i += 20) {
    line(0, i, width, i);
  }
  for (var i = 0; i < height; i += 20) {
    line(i, 0, i, height);
  }
  textAlign(CENTER);
  fill(0);
  textSize(30);
  text("DEATHS : " + deathCount, width/6, 50);
  text("FOOD : " + foodCount, width-100, 50);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } 
  if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  }
  if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
  if (keyCode ===RIGHT_ARROW) {
    snake.dir(1, 0);
  }
  /*if (keyCode === 32) {
    snake.total++;
  }*/
}