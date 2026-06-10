let posx=100;
let posy=100;
let ra=25;
let ra2=25;

function setup() {
 createCanvas(500, 500, WEBGL);}

function draw() {
background(235, 231, 199);
if (keyIsDown(LEFT_ARROW)==true) posx -= 10;
if (keyIsDown(RIGHT_ARROW)==true) posx += 10;
if (keyIsDown(UP_ARROW)==true) posy -= 10;
if (keyIsDown(DOWN_ARROW)==true) posy += 10;
  
 fill('rgb(83,136,26)');
 torus(posx,posy,25);

fill('red');
sphere(posx,posy,25);
}