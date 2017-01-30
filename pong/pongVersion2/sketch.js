var xEllipse = 200;
var yEllipse = 200;
var rEllipse = 5;
var ellipseSpeedX = 5;
var ellipseSpeedY = 3;
  
var player1Score = 0;
var player2Score = 0;
  
  
var xRectPlayer1 = 20;
var yRectPlayer1 = 200;

var xRectPlayer2 = 560;
var yRectPlayer2 = 200;



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
      if (yRectPlayer1 + 100 < 400) {
         yRectPlayer1+=5;
      }
   } 
   if (keyIsDown(87)) {
      if (yRectPlayer1 > 0){
         yRectPlayer1-=5;
      }
   }
   
      if (keyIsDown(DOWN_ARROW)) {
      if (yRectPlayer2 + 100 < 400) {
         yRectPlayer2+=5;
      }
   } 
   if (keyIsDown(UP_ARROW)) {
      if (yRectPlayer2 > 0){
         yRectPlayer2-=5;
      }
   }

   

  rect(xRectPlayer1, yRectPlayer1, 20, 100);
  rect(xRectPlayer2, yRectPlayer2, 20, 100);
  
   xEllipse += ellipseSpeedX;
   yEllipse += ellipseSpeedY;
   var damp = 0.2;
  
  ellipse(xEllipse, yEllipse, rEllipse * 2, rEllipse * 2);

  
// if (xEllipse > width ) {
// ellipseSpeedX *= -1;
//}
   
   if (yEllipse > height){
      yEllipse = height;
      ellipseSpeedY *= -1;
   }
   
   if (yEllipse < 0){
      yEllipse = 0;
      ellipseSpeedY *= -1;
   }
  
  
  
    if ((yEllipse > yRectPlayer1 && yEllipse < yRectPlayer1 + 100) && (xEllipse  == xRectPlayer1 + 20)) {
      
         ellipseSpeedX*= -1;
      }
      
   if ( (yEllipse > yRectPlayer2 && yEllipse < yRectPlayer2 + 100) && ( xEllipse == xRectPlayer2 )  ) {
         ellipseSpeedX *= -1;
      }


      
      

   textSize(32);
   text("w ↑, s ↓", 238, 380);
}
