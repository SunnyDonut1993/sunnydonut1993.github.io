var img;
var bg;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
   bg = loadImage('images/glorpbg.png');
  img2 = loadImage('images/grslime.png');
  img3 = loadImage('images/blslime.png');
  img4 = loadImage('images/pislime.png');
  img5 = loadImage('images/brslime.png');
  img6 = loadImage('images/rslime.png');
  img7 = loadImage('images/smiley.png');
  img8 = loadImage('images/egg.png');
  img9 = loadImage('images/cream.png');
  img10 = loadImage('images/barrel.png');
  img11 = loadImage('images/hand.png');
}

function setup() {
  createCanvas(1200, 800);
 background(bg) 
}

function draw() {
  
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
      image(img2, mouseX - 100, mouseY - 100, 200, 200);
   
  } else if (toolChoice == '2') { // second tool

   image(img3, mouseX - 100, mouseY - 100, 200, 200);
   
  } else if (toolChoice == '3') { // third tool

   image(img4, mouseX - 100, mouseY - 100, 200, 200);
   
  } else if (toolChoice == '4') {

      image(img5, mouseX - 100, mouseY - 100, 200, 200);
  } else if (key == '5') { // this tool calls a function
   image(img6, mouseX - 100, mouseY - 100, 200, 200);
    
  } else if (toolChoice == '6') {
image(img7, mouseX - 150, mouseY - 150, 300, 300);
    
  } else if (toolChoice == '7') {

    image(img8, mouseX - 100, mouseY - 100, 200, 200);
  } else if (toolChoice == '8') {

     image(img9, mouseX - 100, mouseY - 100, 200, 200);
  } else if (toolChoice == '9') {

  image(img10, mouseX - 100, mouseY - 100, 200, 200)
  } else if (toolChoice == '0') {
    image(img11, mouseX - 100, mouseY - 100, 200, 200)
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(bg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
