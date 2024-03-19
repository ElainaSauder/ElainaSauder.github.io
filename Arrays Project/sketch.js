// Arrays and Object Notation Project - Basketball shooter
// Elaina Sauder
// April 8th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// use noise to move the nets in a random way
// use object notations to make the ball and the nets
// use arrays
// use an aiming line

//Net Variables
let netX;
let netY;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //getting the nets to move
  netX = noise(time) * width;
  netY = noise(time + 50) * height;
  circle(netX, netY, 50); // change to net
  time += 0.01;
}
