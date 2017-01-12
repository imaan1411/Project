var xEllipse = 0;
var yEllipse = 200;
var ellipseSpeedX = 5;
var ellipseSpeedY = 3;
  
 var player1Score = 0;
 var player2Score = 0;
  
  
var xRect = 20;
var yRect = 200;

var speed = 3;
var direction = 1;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  fill (255);
    if (keyIsDown(83))
    yRect+=5;
    if (keyIsDown(87))
    yRect-=5;
   if (yRect > 0)
   
   if (yRect < 300)

  rect(20, yRect, 20, 100);
  
  
   xEllipse += ellipseSpeedX;
  yEllipse += ellipseSpeedY;
  var damp = 0.2;
  
  ellipse(xEllipse, yEllipse, 10, 10);


   
  
  
    if (xEllipse > width ) {
     if (xEllipse > width && xEllipse < width + yRect )
     ellipseSpeedX *= -1;
   
  }
  
   if (yEllipse > height){
      yEllipse = height;
      ellipseSpeedY *= -1;
   }
   
      if (yEllipse < 0){
      yEllipse = 0;
      ellipseSpeedY *= -1;
   }
   


}
