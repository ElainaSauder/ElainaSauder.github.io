// Arrays and Object Notation Project - Basketball shooter
// Elaina Sauder
// April 8th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// use noise to move the nets in a random way
// use object notations to make the ball and the nets
// use arrays
// use an aiming line with a slider rather than using only mouse
// make the targets disapear when you hit them
// use collide
// use a point counter
// use state cariable to make a difficulty starter page
// use a key on the keyboard to shoot the ball


//Net Variables
let netX;
let netY;
let time = 0;
let deviance = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  generateNets();
}

function generateNets(){
  //getting the nets to move
  netX = noise(time) * width;
  netY = noise(time + deviance) * height;
  circle(netX, netY, 50); // change to net
  time += 0.008;
}

function makeBalls(){
  
}
