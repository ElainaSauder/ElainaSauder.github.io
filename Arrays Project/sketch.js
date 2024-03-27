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
// use a key on the keyboard to shoot the ball, the space bar
// make instructions


//Variables
let theNets = [];
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Setting up for translate
  angleMode(DEGREES);
  rectMode(CENTER);

  //make the nets
  for(let i = 0; i < 5; i++){ //change the 5 to make it more or less nets
    generateNets();
  }

  window.setInterval(generateNets);
}

function draw() {
  background(220);
  
  //call all the functions
  degreeBar();
  makeAimer();
 
  showNets();
}

//Aiming Function
function makeAimer(){
  let aimX = 0;
  let aimY = 0;
  push();
  translate(width/2, height/2);
  rotate(mouseX);
  line(aimX, aimY, aimX + 70, aimY + 70);
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

//Net functions
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
  // circle(netX, netY, 50);
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

function moveNetsWithNoise(){
  for(let net of theNets){
    let x = noise(net.timeX) * width;
    let y = noise(net.timeY) * height;

    net.timeX = x;
    net.timeY = y;

    net.timeX += net.deltaTime;
    net.timeY += net.deltaTime;
  }
}

function showNets(){
  for(let net of theNets){
    fill("blue");
    rect(net.x, net.y, net.width, net.height);
  }
}

// Ball functions
function makeBalls(){
  
}

// Counter Functionss
