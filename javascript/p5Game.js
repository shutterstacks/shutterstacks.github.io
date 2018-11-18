var speedx = 1.1;
var speedy = 1;
var x = 200;
var y = 200;
var edgeCount = 0;
var edges = document.getElementById("cornerTouch");
function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('game');
}
function draw() {
    background(170)
  fill(0);
  rect(x, y, 20, 20);
  if (y < 0) {
    speedy = random(1, 1.5);
  } else if (y > 380) {
    speedy = random(-1.5, -1)}
  if (x < 0) {
    speedx = random(1, 1.5);
  } else if (x > 380) {
    speedx = random(-1.5, -1);
}
    x = x + speedx;
    y = y + speedy;
if ((x == 0 && y == 0) ||
    (x == 0 && y == 380) ||
    (x == 380 && y == 0) ||
    (x == 380 && y == 380)) {
  edgeCount += 1;}
  edges.innerHTML = "The cube has touched the corner "+edgeCount+" times.";
}