const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

context.fillStyle = "#9C27B0"
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = "#fff"
context.fillRect(0, 0, 10, 10);

var Winkel = 0; schritt = 3; y2 = 0; fangx = 0; fangy = 0;
schrittx= 50; schritty=-55;
function Bewege () {

Winkel = Winkel + 3;
hierx = 200 + 100* Math.cos(Winkel/180*Math.PI);
hiery = 100 + 50* Math.sin(Winkel/180*Math.PI);
Positionieren ("objekt1", hierx, hiery );
if ((y2 > 80)||(y2 < -100)) { schritt = -schritt; }
y2 = y2 + schritt;
Positionieren ("objekt2", 20, y2);
setTimeout ("Bewege ()",30);
}
function Weg () {
  fangx = fangx + schrittx; fangy = fangy +schritty;
  if ((fangx > 250) || (fangx < 50)) schrittx = -schrittx;
  if ((fangy < -200) || (fangy > 50)) schritty = -schritty;
  Positionieren ("objekt3", fangx, fangy);
}
function Positionieren (objId, xwert, ywert) {
  if (document.documentElement) {
      document.getElementById(objId).style.top  = ywert + "px";
      document.getElementById(objId).style.left = xwert + "px";
      }
  else if (document.layers)  {
      document.layers[objId].top  = ywert;
      document.layers[objId].left = xwert;
      }
  else if (document.all) {
      document.all[objId].style.pixelTop = ywert;
      document.all[objId].style.pixelLeft = xwert;
      }
}
