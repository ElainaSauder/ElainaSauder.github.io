// Arrays and Object Notation Demo-Circles
// Elaina Sauder
// March 12, 2024

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  
  moveBalls();
  displayBalls();
}

function keyPressed(){
  if(keyCode === 32){ // 32 = space bar
    spawnBall(width/2, height/2);
  }
}

function moveBalls() {
  for (let ball of ballArray) {
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
    dx: mouseX * -0.005, // change to position
    dy: mouseY * -0.005, // change to posotion
  };
  ballArray.push(ball);
}
