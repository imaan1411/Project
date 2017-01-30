var xEllipse = 200;
var yEllipse = 200;
var rEllipse = 5;
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
  strokeWeight(2);
  fill (255);
   
   
   if (keyIsDown(83)) {
      if (yRect + 100 < 400) {
         yRect+=5;
      }
   } 
   if (keyIsDown(87)) {
      if (yRect > 0){
         yRect-=5;
      }
   }
   

  rect(xRect, yRect, 20, 100);
  
  
   xEllipse += ellipseSpeedX;
   yEllipse += ellipseSpeedY;
   var damp = 0.2;
  
  ellipse(xEllipse, yEllipse, rEllipse * 2, rEllipse * 2);

  
   if (xEllipse > width ) {
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
  
   
    if ((yEllipse > yRect && yEllipse < yRect + 100) && (xEllipse  < xRect + 20)) {
      
         ellipseSpeedX*= -1;
      }
      
   textSize(32);
   text("w ↑, s ↓", 238, 380);
}
