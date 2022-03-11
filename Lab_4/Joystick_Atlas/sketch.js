/*
Serial Communication By Arielle Hein, adapted from ITP Phys Comp Serial Labs

loading GIFs as backround from https://editor.p5js.org/remarkability/sketches/yP869zQPV

GIF is from Google Maps and this article
https://www.netcredit.com/blog/united-pixels-of-america-8-bit-map-of-the-usa/

I made the cursor png images on Photoshop
*/

var serial; //variable to hold an instance of the serial port library
var portName = '/dev/tty.usbmodem14301'; //fill in with YOUR port

//serial joystick inputs
var x_input = 0;
var y_input = 0;
var z_input = 1;
//bg side
var screen_w = 1200;
var screen_h = 771;
var bg;
//Score counter also double as lvl order
var winCounter;
//target rect dimentions with square width
var goalieX;
var goalieY;
var goalieW;
//text that clues in players to find things and instructions
var txt;

function preload(){
  bg = loadImage("Google8BitUSA.gif");
  mouse = loadImage("mouse.png");
  click = loadImage("click.png");
}

function setup() {
  createCanvas(screen_w, screen_h); //same dimentions as GIF file
  textSize(36);
  txt="Welcome! Click Anywhere to begin";
  goalieX = 0;
  goalieY = 0;
  goalieW = 1200;
  winCounter = 0;
  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);

}

function draw() {
  background(220);
  image(bg, 0, 0);

  //move a image of cursor with a joystick
  image(mouse, x_input, y_input);
  //change cursor image to the clicking variant
  if (z_input == 0){
    image(click, x_input, y_input);
  }
  
  //These are the game objects where the variables just change each lvl
  fill("White");
  text(txt,400,20,620,60);//prompts for player
  
  //makes sure there is no score before game begins
  fill("Yellow");
  if (winCounter-1==-1){
    score="Score: ";
    print("Oops");
  }
  else{
    score="Score: "+str(winCounter-1);
  }
  
  //Game score of player
  text(score,850,100,220,60);
  
  //goal is invisible
  noFill();
  noStroke();
  rect (goalieX,goalieY, goalieW, goalieW);
  
  //collision detection of goal and cursor
  if (goalieX < x_input + 50 &&
        goalieX + goalieW > x_input &&
        goalieY < y_input + 50 &&
        goalieW + goalieY > y_input && z_input == 0){
    winCounter++;
  }
  
  //levels launch based on winCounter
  
  if (winCounter == 1){
    Lvl_1();
  }
  if (winCounter == 2){
    Lvl_2();
  }
  if (winCounter == 3){
    Lvl_3();
  }
  if (winCounter == 4){
    Lvl_4();
  }
  if (winCounter == 5){
    Lvl_5();
  }
  if (winCounter == 6){
    Lvl_6();
  }
  if (winCounter == 7){
    Lvl_7();
  }
  if (winCounter == 8){
    Lvl_8();
  }
  if (winCounter == 9){
    Lvl_9();
  }
  if (winCounter == 10){
    Lvl_10();
  }
  if (winCounter == 11){
    Lvl_11();
  }
  if (winCounter == 12){
    Lvl_12();
  }
  if (winCounter > 12 ){
    Winner();
  }
  

}

//all my callback functions are down here:
//these are useful for giving feedback

function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

//THIS IS WHERE WE RECEIVE DATA!!!!!!
//make sure you're reading data based on how you're sending from arduino
function serialEvent(){
	//receive serial data here

  var data = serial.readLine();
  if(data === "") return;

  //https://www.geeksforgeeks.org/split-string-java-examples/
  var split = data.split(',');
  console.log(split[0], split[1], split[2]);

  x_input = split[0];
  y_input = split[1];
  z_input = split[2];
  
  x_input = map(x_input, 0, 1023, 0, screen_w);
  y_input = map(y_input, 0, 1023, 0, screen_h);

}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}

//Here are the game levels
function Lvl_1(){
  //change prompt
  txt = "Where is the Grand Canyon?";
  //change target location 
  goalieX = 220;
  goalieY = 340;
  goalieW = 100;
  
}
function Lvl_2(){
  //change prompt
  txt = "Where is the Golden Gate Bridge?";
  //change target location 
  goalieX = 10;
  goalieY = 320;
  goalieW = 50;
}
function Lvl_3(){
  //change prompt
  txt = "Where is the Statue of Liberty?";
  //change target location 
  goalieX = 1000;
  goalieY = 240;
  goalieW = 50;
}
function Lvl_4(){
  //change prompt
  txt = "Where is the Space Needle";
  //change target location 
  goalieX = 95;
  goalieY = 20;
  goalieW = 50;
}
function Lvl_5(){
  //change prompt
  txt = "Where is Mount Rushmore?";
  //change target location 
  goalieX = 420;
  goalieY = 210;
  goalieW = 60;
}
function Lvl_6(){
  //change prompt
  txt = "Where is Las Vegas?";
  //change target location 
  goalieX = 140;
  goalieY = 380;
  goalieW = 60;
}
function Lvl_7(){
  //change prompt
  txt = "Where is The Whitehouse?";
  //change target location 
  goalieX = 915;
  goalieY = 310;
  goalieW = 50;
}
function Lvl_8(){
  //change prompt
  txt = "Where is Area 51?";
  //change target location 
  goalieX = 125;
  goalieY = 325;
  goalieW = 50;
}
function Lvl_9(){
  //change prompt
  txt = "Where is the Houston Space Center?";
  //change target location 
  goalieX = 580;
  goalieY = 600;
  goalieW = 50;
}
function Lvl_10(){
  //change prompt
  txt = "Where is Disney World?";
  //change target location 
  goalieX = 900;
  goalieY = 620;
  goalieW = 50;
}
function Lvl_11(){
  //change prompt
  txt = "Where is Burning Man?";
  //change target location 
  goalieX = 95;
  goalieY = 250;
  goalieW = 50;
}
function Lvl_12(){
  //change prompt
  txt = "Where is Denver?";
  //change target location 
  goalieX = 380;
  goalieY = 320;
  goalieW = 60;
}
function Winner(){
  //change prompt
  txt = "Congrats, You Won!";
  //get make target unclickable
  goalieX = 0;
  goalieY = 0;
  goalieW = 0;
}
