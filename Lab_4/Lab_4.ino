// C++ code
// 2 analog input to use as a starting point for lab 4.
// you do not have 2 potentiometers in your kit but you DO have 
// a joystick, which works the same. 
// swap your joystick in by connecting GND to ground, +5V to power, VRx to A0 and VRy to A1
//


void setup()
{
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(2,INPUT_PULLUP);
  Serial.begin(9600); //this starts your serial port at BAUD rate 9600
}

void loop()
{
  int x = analogRead(A0);
  int y = analogRead(A1);
  int z = digitalRead(2);
 
  //print values to console as you set up the circut to see the values.
  //Serial.println(String(x) + "," + String(y) + "," + String(z));
  Serial.print(x);
  Serial.print(",");
  Serial.print(y);
  Serial.print(",");
  Serial.println(z);
  
  //when you are ready to send this data to p5, you will comment out the code Serial.print code 
  //above and print, instead, the code below: 
  //Serial.write(x); //writes the number as a byte (will only work for values 0-127)

  //we'll start by just writing one value and leave it to you to figure out how to send and parse 2 values
}
