// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// Feburary th, 2024
//
// Extra for Experts:
// - Taking in User Input to answer the questions I ask

// the plan is to create a guessing game that helps ou learn the bones in the bod, by letting you assemble them. slash having you click on the correct bone.

// i need a mouse interaction element
// have the keyboard do something
// use state variables
// use a nested loop
// resize the window for different device screens


//Stating Image Variables
let imgSkeleton;
let imgTitle;
let imgBack;

// let name = prompt("who are you?")

//Stating Variables
let clicked = "not";
let question = "1";

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

  rect(200, 200, 100, 100);

  //Displaying Questions
  questionOne();
  displayCorrect();
  
}

//Functions
function questionOne(){
  text("Click on the corrisponding box to the femur bone", 130, 150, 150);
}

function isInRect(x, y, top, bottom, left, right){
  return x >= left && x <= right && y >= top && y <= bottom;
}

function mouseClicked(){
  if (isInRect() === true){
    clicked = "is";
  }
}

function displayCorrect(){
  if(clicked === "is"){
    text("Correct!", 330, 150, 150);
  }
  else{
    text("Incorrect", 330, 150, 150);
  }
}
