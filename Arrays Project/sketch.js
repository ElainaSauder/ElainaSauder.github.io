// Arrays and Object Notation Project - Noise Shooter
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
let ballArray = [];
let state = 0;
let amountOfNets = 5;
let counter = 0;
let hit;

let aimX;
let aimY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  spawnBall(width/2, height/2);
  
  //Setting up for translate
  angleMode(DEGREES);
  rectMode(CENTER);

  //make the nets
  for(let i = 0; i < amountOfNets; i++){ //change the 5 to make it more or less nets
    generateNets();
  }
}

function draw() {
  background(220);
  
  //call all the aim functions
  degreeBar();
  makeAimer();
 
  // call all the net functions
  moveNetsWithNoise();
  showNets();

  // call all the ball functions
  moveBalls();
  displayBalls();

  //Other calls
  isHit();
  isWon(); // make this funtions

}

// Ball Functions
function keyPressed(){
  if(keyCode === 32){ // 32 = space bar
    spawnBall(width/2, height/2);
  }
}

function moveBalls(){
  for(let ball of ballArray){
    ball.x += ball.dx;
    ball.y += ball.dy;
  }
}

function displayBalls() {
  for(let ball of ballArray){
    fill(ball.color);
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function spawnBall(){
  let ball = {
    x: width/2,
    y: height/2,
    radius: 20,
    color: color("orange"),
    dx: aimX + 10 * 0.05, // change to coniside with aimX
    dy: aimY + 10 * 0.05,  // change to coniside with aimY
  };
  ballArray.push(ball);
}

//Aiming Function
function makeAimer(){
  aimX = 0;
  aimY = 0;
  push();
  translate(width/2, height/2);
  rotate(mouseX);
  line(aimX, aimY, aimX + 70, aimY + 70);
  pop();
}

function degreeBar(){
  fill("green");
  rect(width/2, height - 20, 360, 10);
  // console.log (mouseX);
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
      net.x -= net.speed;
    }
  }
}

function moveNetsWithNoise(){
  for(let net of theNets){
    let x = noise(net.timeX) * width;
    let y = noise(net.timeY) * height;

    net.x = x;
    net.y = y;

    net.timeX += net.deltaTime;
    net.timeY += net.deltaTime;
    // console.log(net);
  }
}

function showNets(){
  for(let net of theNets){
    fill("blue");
    // console.log(net.x, net.y, net.width, net.height);
    rect(net.x, net.y, net.width, net.height);
  }
}

// Collide Functions
function isHit(){
  hit = collideRectCircle(theNets.x, theNets.y, theNets.width, theNets.height, ballArray.x, ballArray.y, ballArray.radius); // make work
  if(hit === true){
    counter++;
    console.log(hit);
  }
}

// Counter Functions
function isWon(){
  //showing the counter

  //letting you know you won
}
