// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// Feburary 11th, 2024
//
// Extra for Experts:
// - Taking in User Input to answer the questions I ask

// the plan is to create a guessing game that helps you learn the bones in the body, by letting you . slash having you click on the correct bone.

// i need a mouse interaction element
// have the keyboard do something
// use state variables
// use a nested loop
// take in user input

// let name = prompt("who are you?")

//Stating Image Variables
let imgSkeleton;
let imgTitle;
let imgBack;

//Stating Variables
let clicked = "not";
let question = 1;
let rect1X;
let rect1Y;
let rect1Width;
let rect1Height;

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
  image(imgSkeleton, 300, 100, imgSkeleton.width * 1.5, imgSkeleton.height * 1.5);
  image(imgTitle, 200, 60, imgTitle.width * 0.3, imgTitle.height * 0.3);

  //click boxes
  rect1 = rect(200, 200, 20, 20); //change these from magic numbers
  rect2 = rect(200, 300, 20, 20);
  rect3 = rect(200, 350, 20, 20);
  rect(300, 200, 20, 20);

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
    text("Congratulations you finished!");
  }
}

//Functions
function questionOne(){
  text("Click on the corrisponding box to the femur bone", 130, 150, 150);
}

function isInRect1(x, y, top, bottom, left, right){
  return x >= left && x <= right && y >= top && y <= bottom;
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
