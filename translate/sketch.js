// Translate and Rotate
// Elaina Sauder

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  makeAimer();
}

function makeAimer(){
  let aimX = 0;
  let aimY = 0;
  push(); // save state of the transormation matrix
  translate(width/2, height/2); // moves the origin
  rotate(mouseX);
  line(aimX, aimY, aimX + 70, aimY + 70);
  // strokeWeight();
  pop();
}

function degreeBar(){
  fill("green")
  rect(width/3, height - 20, 360, 10);
  circle(mouseX, height - 20, 20);
  Text()
}
