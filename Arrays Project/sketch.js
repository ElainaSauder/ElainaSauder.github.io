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

let theNets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);
  degreeBar();
  makeAimer();
  generateNets();
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
  fill("green");
  rect(width/2, height - 20, 360, 10);
  console.log (mouseX);
  if(mouseX > 600|| mouseX < 965){
    circle(mouseX, height - 20, 20);
  }
  // add instruntional text
}


function generateNets(){
  let someNet = {
    width: 50, 
    height: 40, 
    x: random(width),
    y: random(height),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.005,
  };
  theNets.push(someNet);
  //getting the nets to move
  // netX = noise(time) * width;
  // netY = noise(time + deviance) * height;
  // circle(netX, netY, 50); // change to net
  // time += 0.008;
}

function moveNets(){
  for(let net of theNets){
    let choice = random(100);
    if(choice < 25){
      // move up
      net.y -= net.speed;
    }
    else if(choice < 50){
      // move down
      net.y += net.speed;
    }
    else if(choice < 75){
      // move right
      net.x += net.speed;
    }
    else{
      // move left
      net.x -= net.speedl;
    }
  }
}

function showNets(){
  for(let net of theNets){
    fill("blue");
    rect(net.x, net.y, net.width, net.height);
  }
}

function makeBalls(){
  
}
