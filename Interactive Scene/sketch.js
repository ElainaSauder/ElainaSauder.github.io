// Interactive Scene-Knowing Your Bones
// Elaina Sauder
// Feburary 8th, 2024
//
// Extra for Experts:
// - Taking in User Input to answer the questions I ask

// the plan is to create a guessing game that helps ou learn the bones in the bod, by letting you assemble them. slash having you click on the correct bone.

// i need a mouse interaction element
// have the keyboard do something
// use state variables
// use a nested loop
// resize the window for different device screens

//Questions:
//how do i take in user input
//how do i put text on screen

//Stating Image Variables
let imgBack;
let imgSkull;
let imgSpine;
let imgLegs;
let imgArms;
let imgTitle;

//Stating Variables


//Preloading Images
function preload(){
  imgBack = loadImage("background.png");
  imgSkull = loadImage("skull.png");
  imgSpine = loadImage("spine.png");
  imgLegs = loadImage("legs.png");
  imgArms = loadImage("arms.png");
  imgTitle = loadImage("title.png");
}

function setup() {
  createCanvas(664, 500);
}

function draw(){
  //Images
  image(imgBack, 0, 0, 694, 550);
  image(imgSkull, 330, 100, imgSkull.width * 0.04, imgSkull.height * 0.04);
  image(imgSpine, 305, 160, imgSpine.width * 0.55, imgSpine.height * 0.55);
  image(imgLegs, 235, 250, imgLegs.width * 0.5, imgLegs.height * 0.5);
  image(imgArms, 260, 160, imgArms.width * 0.4, imgArms.height * 0.4);
  image(imgTitle, 200, 60, imgTitle.width * 0.3, imgTitle.height * 0.3);

  //Displaying Questions
  questionOne();
  
  //Question Functions
function questionOne(){
  text("Click on the femur bone", 100, 150, 150);
}
}