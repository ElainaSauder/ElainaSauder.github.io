// 2D Grid Array Demo
// Elaina Sauder
// April 9th, 2024

// if you are hard coding a level i would use something like this
// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1],
//             [1, 1, 0, 0],
//             [0, 1, 0, 1],
//             [1, 0, 1, 1],
//             [0, 0, 1, 1], 
//             [1, 1, 1, 0]];

// if you want to randomize the grid is this
let grid;
let Cellsize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //this is dumb should check if this is the right way
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  Cellsize = height/grid.length;

}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed(){
  if(key === "r"){
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid(){
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      else{
        fill("white");
      }
      square(x* Cellsize, y* Cellsize, Cellsize);

    }
  }
}

function generateRandomGrid(cols, rows){
  let emptyArray = [];
  for(let y = 0; y < rows; y ++){
    emptyArray.push([]);
    for(let x = 0; x < cols; x ++){
      if(random(100) < 50){
        emptyArray[y].push(0);
      }
      else{
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mouseClicked(){
  if(mouseX === grid[x] = )
}