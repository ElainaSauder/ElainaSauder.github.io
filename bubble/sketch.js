// Bubble Object Notation Demo
// Elaina Sauder
// March 25th, 2024s

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for(let i = 0; i < 5; i++){ // com
    spawnBubble();
  }

  // spawn a new bubble every half second
  window.setInterval(spawnBubble, 300);
}

function draw() {
  background("white");

  // moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubbles(); // com
}

function mousePressed(){ // dont need
  //did you click on a bubble?
  for(let i = theBubbles.length - 1; i >= 0; i--){
    if(clickedInBubble(mouseX, mouseY, theBubbles[i])){
      //Kill it
      theBubbles.splice(i, 1);
    }
  }
}

function clickedInBubble(x, y, someBubble){ //dont need
  let distanceAway = dist(x, y, someBubble.x, someBubble.y);
  let radius = someBubble.size / 2;
  if (distanceAway < radius){
    return true;
  }
  else{
    return false;
  }
}

function moveBubblesWithNoise(){ // com
  for(let bubble of theBubbles){
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    bubble.x = x;
    bubble.y = y;

    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}

function spawnBubble(){ //com
  let someBubble = {
    size: random(30, 50),
    x: random(width),
    y: random(height),
    speed: 3,
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255), 
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.002,
  };
  theBubbles.push(someBubble);
}

function displayBubbles(){ // com
  for(let bubble of theBubbles){
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.size);
  }
}

function moveBubblesRandomly(){ // com
  for(let bubble of theBubbles){
    let choice = random(100);
    if(choice < 25){
      // move up
      bubble.y -= bubble.speed;
    }
    else if(choice < 50){
      // move down
      bubble.y += bubble.speed;
    }
    else if(choice < 75){
      // move right
      bubble.x += bubble.speed;
    }
    else{
      // move left
      bubble.x -= bubble.speed;
    }
  }
}