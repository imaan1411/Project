var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  fill (255);
  rect(20, 150, 20, 100);
  ellipse(x, 200, 10, 10);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
 x = x + speed;
}

function mousePressed() {
  background(250, 250, 100);
}