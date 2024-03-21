// Arrays and Object Notation Demo-Circles
// Elaina Sauder
// March 12, 2024

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  moveBalls();
  displayBalls();
  guideLine();
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function moveBalls() {
  for (let ball of ballArray) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    //teleport across screen
    if(ball.x < 0){
      ball.x = width;
    }
    else if(ball.x > width){
      ball.x = 0;
    }

    if(ball.y < 0){
      ball.y = height;
    }
    else if(ball.y > height){
      ball.y = 0;
    }
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
    dy: mouseY * -0.005,// change to posotion
  };
  ballArray.push(ball);
}

function guideLine(){
  stroke("black");
  line(width/2, height/2, mouseX, mouseY);
}