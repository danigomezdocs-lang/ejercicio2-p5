let posx=100;
let posy=100;

function setup() {
 createCanvas(500, 500,);}

function draw() {
background(235, 231, 199);
if (keyIsDown(LEFT_ARROW)==true) posx -= 10;
if (keyIsDown(RIGHT_ARROW)==true) posx += 10;
if (keyIsDown(UP_ARROW)==true) posy -= 10;
if (keyIsDown(DOWN_ARROW)==true) posy += 10;
  
 fill('rgb(83,136,26)');
 line(posx,posy,250,1);
stroke('rgb(5,5,117)');

fill('red');
circle(posx,posy,50);
  
fill('rgb(125,125,206)');
stroke('rgb(0,0,0)');
square(posx-25,posy,50);
  posx+=2;
  posy+=1;
}

