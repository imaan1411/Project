var x = 0;
var y = 200; 
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
  ellipse(x, y, 10, 10);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
    if (y > width || y < 0) {
    speed = speed * -1;
  }
  
  
 x = x + speed;
 y = y + speed;
}


