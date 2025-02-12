// Terrain Generation Demo
// Elaina Sauder
// March 18 2024

let terrain = [];
let numberOfRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectWidth = width/numberOfRects; 
  generateTerrain();
} 

function draw() {
  background(220);
  for(let someRect of terrain){
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain(){
  let time = 0;
  let deltaTime = 0.002;

  for(let x = 0;  x < width; x += rectWidth){
    let theHeight = noise(time) * height;
    spawnRectangle(x, theHeight);
    time += deltaTime;
  }
}

function spawnRectangle(leftSide, rectHeight){
  let thisRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  terrain.push(thisRect);
}