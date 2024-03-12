// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// March 11th, 2024
//
// Extra for Experts:
// - Taking in User Input to give a persionalized congradrulations message

//Stating Image Variables
let imgSkeleton;
let imgTitle;
let imgBack;

//Stating Variables
let clicked = "not"; 
let question = 1; // My state variable
let playerName;
let hit = false;

//Click square variables
let rect1;
let rect2;
let rect3;

//Variables for the collide function
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
  question = 1;
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
  if(question === 1){
    questionOne();
    if(clicked === "is"){
      displayCorrect1();
      if (displayCorrect1() === true){
        clicked = "not";
        question = 2;
      }
    }
  }
  else if(question === 2){
    questionTwo();
    if(clicked === "is"){
      displayCorrect2();
      if(displayCorrect2() === true){
        clicked = "not";
        question = 3;
      }
    }
  }
  else if(question === 3){
    questionThree();
    if(clicked === "is"){
      displayCorrect3();
      
    }
  }
  else{
    text("Congratulations " + playerName + " you finished!", 130, 250); //Extra for experts
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

function isInRect1(){
  hit = collidePointRect(mouseX, mouseY, x1, y1, squareLength, squareLength);
  // console.log(hit);
  if(hit === true){
    return true;
  }
  else{
    return false;
  }
}

function isInRect2(){
  hit = collidePointRect(mouseX, mouseY, x2, y2, squareLength, squareLength);
  if(hit === true){
    return true;
  }
  else{
    return false;
  }
}

function isInRect3(){
  hit = collidePointRect(mouseX, mouseY, x3, y3, squareLength, squareLength);
  // console.log(hit);
  if(hit === true){
    return true;
  }
  else{
    return false;
  }
}

function mousePressed(){
  console.log(question);
  console.log(clicked);
  if (isInRect1() === true && question === 1){
    console.log(clicked);
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

function displayCorrect1(){
  if(clicked === "is"){
    text("Correct!", 130, 200, 150);
    return true;
    // question = question + 1;
  }
  else{
    text("Incorrect", 130, 200, 150);
    // question = question + 1;
  }
}
function displayCorrect2(){
  if(clicked === "is"){
    text("Correct!", 130, 200, 150);
    return true;
    // question = question + 1;
  }
  else{
    text("Incorrect", 130, 200, 150);
    return true;
    // question = question + 1;
  }
}
function displayCorrect3(){
  if(clicked === "is"){
    text("Correct!", 130, 200, 150);
    // question = question + 1;
  }
  else{
    text("Incorrect", 130, 200, 150);
    // question = question + 1;
  }
}