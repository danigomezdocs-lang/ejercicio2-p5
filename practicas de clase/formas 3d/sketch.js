let ra=100
let ra2=50

function setup(){
  createCanvas(700,700,WEBGL);
}

function draw() {
  background(0);
  orbitControl();
  stroke('rgb(233,231,176)');
  fill('rgb(111,57,141)');
  torus(ra)
  stroke('rgb(152,218,228)');
  fill('rgb(89,119,180)');
  cone(ra2);


ra+=1
if(ra>300) ra=50;

ra2+=0.5
if(ra2>300) ra2=50;
}