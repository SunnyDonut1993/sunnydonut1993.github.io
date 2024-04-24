var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var bg, bg2, img;

function preload() {
  bg = loadImage('https://sunnydonut1993.github.io/images/chica.gif');
  img = loadImage('https://sunnydonut1993.github.io/images/cupcake.png');
  bg2 = loadImage('https://sunnydonut1993.github.io/images/chicaend.gif');
}

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER);
  textSize(20);
} // end setup

function draw() {
  background(bg);
  fill(255);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "L5") {
    levelFive();
  }

  text(("Score: " + score), width / 2, 80);
} // end draw

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  // Calculate the half of the diagonal length of the bounding box
  var halfDiagonalLength = sqrt(sq(ballSize) + sq(ballSize)) / 2;
  if (distToBall < halfDiagonalLength) {
    ballx = random(width);
    bally = random(height);
    ballSize = random(20, 70);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }

  image(img, ballx - ballSize * 2, bally - ballSize * 2, ballSize * 4, ballSize * 4);
} // end level one

function levelTwo() {
  background(bg);
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var halfDiagonalLength = sqrt(sq(ballSize) + sq(ballSize)) / 2;
  if (distToBall < halfDiagonalLength) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }

  image(img, ballx - ballSize * 2, bally - ballSize * 2, ballSize * 4, ballSize * 4);
} // end level two

function levelThree() {
  background(bg);
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var halfDiagonalLength = sqrt(sq(ballSize) + sq(ballSize)) / 2;
  if (distToBall < halfDiagonalLength) {
    ballx = random(width);
    bally = random(height);
    ballSize = random(10, 50);;
    score = score + 1;
  }
  if (score > 15) {
    gameState = "L4";
  }

  image(img, ballx - ballSize * 2, bally - ballSize * 2, ballSize * 4, ballSize * 4);
} // end level three

function levelFour() {
  background(bg);
  text("Level 4", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var halfDiagonalLength = sqrt(sq(ballSize) + sq(ballSize)) / 2;
  if (distToBall < halfDiagonalLength) {
    ballx = random(width);
    bally = random(height);
    ballSize = random(5, 25);
    score = score + 1;
  }
 if (score > 100) {
    background(bg2); // Black background
    fill(255); // White text color
    textSize(50);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); // Display "You Win" message
  } else {
    // If the score is not greater than 25, continue displaying the level
    image(img, ballx - ballSize * 2, bally - ballSize * 2, ballSize * 4, ballSize * 4);
  }
} // end level four
