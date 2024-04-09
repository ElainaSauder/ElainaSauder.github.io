// Arrays and Object Notation Project - Noise Shooter
// Elaina Sauder
// April 8th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Variables
let theNets = [];
let ballArray = [];
let state = 0;
let amountOfNets = 5;
let counter = 0;
let hit;

let aimX;
let aimY;

let goingUp;
let goingDown;
let goingLeft;
let goingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  spawnBall(width/2, height/2);
  
  //Setting up for translate
  angleMode(DEGREES);
  rectMode(CENTER);

  //make the nets
  for(let i = 0; i < amountOfNets; i++){ 
    generateNets();
  }
}

function draw() {
  background(220);
 
  // call all the net functions
  moveNetsWithNoise();
  showNets();

  // call all the ball functions
  moveBalls();
  displayBalls();

  //Other calls
  isHit();
  isWon();

}

// Ball Functions
function KeyPressed(){
  if(keyCode === 32){ // 32 = space bar
      spawnBall(width/2, height/2);
  }
}

function keyPressed(){
  for(let ball of ballArray){
    if(keyCode === 38){ // 38 = up
      spawnBall(width/2, height/2);
      ball.y -= 10;
    }
    else if(keyCode === 40){ // 40 = down
      spawnBall(width/2, height/2);
      ball.y += 10;
    }
    else if(keyCode === 37){ // 37 = left
      spawnBall(width/2, height/2);
      ball.x -= 10;
    }
    else if(keyCode === 39){ // 39 = right
      spawnBall(width/2, height/2);
      ball.x += 10;
    }
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

function upDown(){
  for(let ball of ballArray){
    if (goingUp === true){
      ball.y = (ball.y - 10) * 0.05;
      // goingUp = false;
    }
    else if (goingDown === true){
      ball.y = (ball.y + 10) * 0.05;
      // goingDown = false;
    }
}
}

function leftRight(){
  for(let ball of ballArray){
    if(goingLeft === true){
      ball.x = (ball.x - 10) * 0.05;
      // goingLeft = false;
    }
    else if(goingRight === true){
      ball.x = (ball.x + 10) * 0.05;
      // goingRight = false;
    }
  }
}
function spawnBall(){
  let ball = {
    x: width/2,
    y: height/2,
    radius: 20,
    color: color("orange"),
    dx: leftRight, 
    dy: upDown, 
  };
  ballArray.push(ball);
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
    isHit: false,
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
  }
}

function showNets(){
  for(let net of theNets){
    fill("blue");
    rect(net.x, net.y, net.width, net.height);
  }
}

// Collide Functions
function isHit(){
  for(let net of theNets){
    for(let ball of ballArray){
      hit = collideRectCircle(net.x, net.y, net.width, net.height, ball.x, ball.y, ball.radius); 
      if(hit === true){
        counter++;
        net.isHit = true;
        console.log(hit);
      }
    }
  }
}

function makeNetGoAway(){ // MAKE WORK
  for(let i = theNets.length - 1; i >= 0; i--){
    if(theNets[i].isHit === true){
      //Kill it
      theNets.splice(i, 1);
    }
  }
}

// Counter Functions
function isWon(){
  //showing the counter

  //letting you know you won
}










// // Arrays and Object Notation Project - Noise Shooter
// // Elaina Sauder
// // April 8th, 2024
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"


// //Variables
// let theNets = [];
// let ballArray = [];
// let state = 0;
// let amountOfNets = 5;
// let counter = 0;
// let hit;

// let aimX;
// let aimY;

// let goingUp;
// let goingDown;
// let goingLeft;
// let goingRight;

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   spawnBall(width/2, height/2);
  
//   //Setting up for translate
//   angleMode(DEGREES);
//   rectMode(CENTER);

//   //make the nets
//   for(let i = 0; i < amountOfNets; i++){ 
//     generateNets();
//   }
// }

// function draw() {
//   background(220);
  
//   //call all the aim functions
//   degreeBar();
//   makeAimer();
 
//   // call all the net functions
//   moveNetsWithNoise();
//   showNets();

//   // call all the ball functions
//   moveBalls();
//   displayBalls();

//   //Other calls
//   isHit();
//   isWon(); // make this funtions

// }

// // Ball Functions
// function keyPressed(){
//   if(keyCode === 38){ // 38 = up
//     spawnBall(width/2, height/2);
//     goingUp = true;
//   }
//   else if(keyCode === 40){ // 40 = down
//     spawnBall(width/2, height/2);
//     goingDown = true;
//   }
//   else if(keyCode === 37){ // 37 = left
//     spawnBall(width/2, height/2);
//     goingLeft = true;
//   }
//   else if(keyCode === 39){ // 39 = right
//     spawnBall(width/2, height/2);
//     goingRight = true;
//   }
// }

// function moveBalls(){
//   for(let ball of ballArray){
//     ball.x += ball.dx;
//     ball.y += ball.dy;
//   }
// }

// function displayBalls() {
//   for(let ball of ballArray){
//     fill(ball.color);
//     circle(ball.x, ball.y, ball.radius * 2);
//   }
// }

// function upDown(){
//   if (goingUp === true){
//     y = (y - 10) * 0.05;
//     // goingUp = false;
//   }
//   else if (goingDown === true){
//     y = (y + 10) * 0.05;
//     // goingDown = false;
//   }
// }

// function leftRight(){
//   if(goingLeft === true){
//     x = (x - 10) * 0.05;
//     // goingLeft = false;
//   }
//   else if(goingRight === true){
//     x = (x + 10) * 0.05;
//     // goingRight = false;
//   }
// }
// function spawnBall(){
//   let ball = {
//     x: width/2,
//     y: height/2,
//     radius: 20,
//     color: color("orange"),
//     dx: leftRight(), 
//     dy: upDown(),  
//   };
//   ballArray.push(ball);
// }

// //Aiming Function
// function makeAimer(){
//   aimX = 0;
//   aimY = 0;
//   push();
//   translate(width/2, height/2);
//   rotate(mouseX);
//   line(aimX, aimY, aimX + 70, aimY + 70);
//   pop();
// }

// function degreeBar(){
//   fill("green");
//   rect(width/2, height - 20, 360, 10);
//   if(mouseX > 600|| mouseX < 965){
//     circle(mouseX, height - 20, 20);
//   }
//   // add instruntional text
// }

// //Net functions
// function generateNets(){
//   let someNet = {
//     width: 50, 
//     height: 40, 
//     x: random(width),
//     y: random(height),
//     timeX: random(1000000),
//     timeY: random(1000000),
//     deltaTime: 0.005,
//     isHit: false,
//   };
//   theNets.push(someNet);
// }

// function moveNets(){ 
//   for(let net of theNets){
//     let choice = random(100);
//     if(choice < 25){
//       // move up
//       net.y -= net.speed;
//     }
//     else if(choice < 50){
//       // move down
//       net.y += net.speed;
//     }
//     else if(choice < 75){
//       // move right
//       net.x += net.speed;
//     }
//     else{
//       // move left
//       net.x -= net.speed;
//     }
//   }
// }

// function moveNetsWithNoise(){
//   for(let net of theNets){
//     let x = noise(net.timeX) * width;
//     let y = noise(net.timeY) * height;

//     net.x = x;
//     net.y = y;

//     net.timeX += net.deltaTime;
//     net.timeY += net.deltaTime;
//   }
// }

// function showNets(){
//   for(let net of theNets){
//     fill("blue");
//     rect(net.x, net.y, net.width, net.height);
//   }
// }

// // Collide Functions
// function isHit(){
//   for(let net of theNets){
//     for(let ball of ballArray){
//       hit = collideRectCircle(net.x, net.y, net.width, net.height, ball.x, ball.y, ball.radius); 
//       if(hit === true){
//         counter++;
//         net.isHit = true;
//         console.log(hit);
//       }
//     }
//   }
// }

// function makeNetGoAway(){ // MAKE WORK
//   for(let i = theNets.length - 1; i >= 0; i--){
//     if(theNets[i].isHit === true){
//       //Kill it
//       theNets.splice(i, 1);
//     }
//   }
// }

// // Counter Functions
// function isWon(){
//   //showing the counter

//   //letting you know you won
// }
