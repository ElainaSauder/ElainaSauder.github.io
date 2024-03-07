// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// March 11th, 2024
//
// Extra for Experts:
// - Taking in User Input to answer the questions I ask

// the plan is to create a guessing game that helps you learn the bones in the body, by letting you . slash having you click on the correct bone.

// i need a mouse interaction element
// have the keyboard do something- for this i was thinking that you enter your
//player name and then add that to the congradulations thing.
// use state variables - question??
// take in user input

// let name = prompt("who are you?")

//Stating Image Variables
let imgSkeleton;
let imgTitle;
let imgBack;

//Stating Variables
let clicked = "not"; 
let question = 1; // My state variable
let rect1;
let rect2;
let rect3;
let x1 = 330;
let y1 = 95;
let x2;
let y2;
let x3;
let y3;
let squareLength = 5;

//Preloading Images
function preload(){
  imgSkeleton = loadImage("skeleton.png");
  imgTitle = loadImage("title.png");
  imgBack = loadImage("background.png");
}

function setup() {
  createCanvas(664, 500);
}

function draw(){
  //Images
  image(imgBack, 0, 0, width, height);
  image(imgTitle, 200, 60, imgTitle.width * 0.3, imgTitle.height * 0.3);
  image(imgSkeleton, 180, 100, imgSkeleton.width * 0.17, imgSkeleton.height * 0.17);

  //click boxes
  rect1 = rect(x1, y1, squareLength, squareLength); //change these from magic numbers to the lower mentioned variables
  rect2 = rect(x2, y2, squareLength, squareLength);
  rect3 = rect(x3, y3, squareLength, squareLength);
  rect(300, 200, squareLength, squareLength);

  //Displaying Questions
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
    text("Congratulations you finished!", 0, 0);
  }
}

//Functions
function questionOne(){
  fill("white");
  text("Click on the corresponding box to the femur bone", 130, 150, 150);
}

function questionTwo(){
  fill("white");
  text("Click on the corresponding box to the skull bone", 130, 150, 150);
}

function questionThree(){
  fill("white");
  text("Click on the corresponding box to the metacarpals", 130, 150, 150);
}

function isInRect1(x1, y1, top1, bottom1, left1, right1){
  return x1 >= left1 && x1 <= right1 && y1 >= top1 && y1 <= bottom1; // make vairables and connect to rects
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
