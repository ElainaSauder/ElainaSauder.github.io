// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// March 11th, 2024
//
// Extra for Experts:
// - Taking in User Input to answer the questions I ask

//Stating Image Variables
let imgSkeleton;
let imgTitle;
let imgBack;

//Stating Variables
let clicked = "not"; 
let question = 1; // My state variable
let playerName;

let rect1;
let rect2;
let rect3;

let bottom;
let right;
let left;

let x1 = 320;
let y1 = 290;
let x2 = 340;
let y2 = 110;
let x3 = 280;
let y3 = 280;
let squareLength = 8;

//Preloading Images
function preload(){
  imgSkeleton = loadImage("skeleton.png");
  imgTitle = loadImage("title.png");
  imgBack = loadImage("background.png");
}

function setup() {
  createCanvas(664, 500);
  playerName = prompt("Welcome! What is your name?"); //extra for experts
}

function draw(){
  //Images
  image(imgBack, 0, 0, width, height);
  image(imgTitle, 200, 60, imgTitle.width * 0.3, imgTitle.height * 0.3);
  image(imgSkeleton, 180, 100, imgSkeleton.width * 0.17, imgSkeleton.height * 0.17);

  //click boxes and squares
  rect1 = rect(x1, y1, squareLength, squareLength); //change these from magic numbers to the lower mentioned variables
  rect2 = rect(x2, y2, squareLength, squareLength);
  rect3 = rect(x3, y3, squareLength, squareLength);
  rect(375, 200, squareLength, squareLength);
  rect(360, 350, squareLength, squareLength);
  rect(340, 220, squareLength, squareLength);

  //Displaying Questions and Correction
  question = 1;
  if(question === 1){
    questionOne();
    displayCorrect();
  }
  else if(question === 2){
    questionTwo();
    displayCorrect();
  }
  else if(question === 3){
    questionThree();
    displayCorrect();
  }
  else{
    text("Congratulations ", playerName, " you finished!", 0, 0); //Extra for experts
  }
}

//Functions
function questionOne(){
  fill("white");
  text("Click on the corresponding box to the femur bone?", 130, 150, 150);
}

function questionTwo(){
  fill("white");
  text("Click on the corresponding box to the skull bone?", 130, 150, 150);
}

function questionThree(){
  fill("white");
  text("Click on the corresponding box to the metacarpals?", 130, 150, 150);
}

function isInRect1(x1, y1, top, bottom, left, right){
  
  // return x1 >= left && x1 <= right && y1 >= top && y1 <= bottom; // make vairables and connect to rects
}

function isInRect2(x, y, top, bottom, left, right){
  return x >= left && x <= right && y >= top && y <= bottom;
}

function isInRect3(x, y, top, bottom, left, right){
  return x >= left && x <= right && y >= top && y <= bottom;
}

function mouseClicked(){
  if (isInRect1() === true && question === 1){
    clicked = "is";
  }
  else if(isInRect2() === true && question === 2){
    clicked = "is";
  }
  else if(isInRect3() === true && question === 3){
    clicked = "is";
  }
  else{
    clicked = "not";
  }
}

function displayCorrect(){
  if(clicked === "is"){
    text("Correct!", 330, 150, 150);
    question = question + 1;
  }
  else{
    text("Incorrect", 330, 150, 150);
    question = question + 1;
  }
}