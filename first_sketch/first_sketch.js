let hairColor, skinColor, eyeColor;

function setup() {
  createCanvas(600, 600);
  hairColor = color(50, 30, 20);
  skinColor = color(255, 204, 153);
  eyeColor = color(0);
}

function draw() {
  fill(skinColor);
  background(220);
  
  //face
 square(width / 2 - 100, height / 2 - 100, 200);
 
 //eyes
 fill(240);
 rect(width / 2 - 75, height / 2 - 50, 50, 20);
 rect(width / 2 + 25, height / 2 - 50, 50, 20);
  
  //iris
   fill(140, 69, 18);
 rect(width / 2 - 60, height / 2 - 45, 20, 15);
 rect(width / 2 + 35, height / 2 - 45, 20, 15);
 
  //pupil
   fill(0);
 rect(width / 2 - 55, height / 2 - 41, 8);
 rect(width / 2 + 40, height / 2 - 41, 8);
 
 //mouth
 fill(0);
 rect(width / 2 - 45, height / 2 + 45, 60, 10);
}
