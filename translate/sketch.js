// Translate and Rotate
// Elaina Sauder


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push(); // save state of the transormation matrix
  translate(300, 300); // moves the origin
  rotate(mouseX, mouseY);
  square(0, 0, 200);
  pop();

  rect(600, 50, 100, 100);
}
