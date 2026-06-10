function setup() {
  createCanvas(430, 750);
}

function draw() {
  background(209, 235, 247);
  
  fill(0, 49, 83); noStroke();
  beginShape();
  ellipse(155,390, 75,60);
  endShape();
  beginShape();
  ellipse(152,371, 45,30);
  endShape();
  
  fill(14, 86, 144); noStroke();
  beginShape();
  ellipse(145,460, 95,200);
  endShape();
  beginShape();
  ellipse(140,485, 95,150);
  endShape();
  
  fill(0, 49, 83); noStroke();
  beginShape();
  ellipse(143,430, 70,45);
  endShape();
  
  stroke(0, 49, 83); noFill(); strokeWeight(6);
  line(105,475, 125,450);
  endShape();
  line(105,490, 120,471);
  endShape();
  line(107,500, 125,480);
  endShape();
  strokeWeight(8);
  line(107,535, 125,507);
  endShape();
  
  fill(24, 23, 28); noStroke();
  beginShape();
  quad(140,400, 192,400, 192,445, 140,445);
  endShape();
  beginShape();
  ellipse(150,411, 70,70);
  endShape();

  fill(248, 248, 255); noStroke();
  beginShape();
  ellipse(153,405, 70,60, CENTER);
  endShape();
  beginShape();
  ellipse(130,385, 15,30, CORNER);
  endShape();
  
  fill(93, 148, 218); noStroke();
  beginShape();
  ellipse(170,385, 35,12);
  endShape();
  beginShape();
  ellipse(155,380, 35,10);
  endShape();
  beginShape();
  ellipse(145,375, 40,10);
  endShape();
  beginShape();
  ellipse(127,373, 10,10);
  endShape();
  
  fill(56, 44, 30); noStroke();
  quad(230,40, 240,42, 210,85, 190,90);
  quad(210,65, 220,65, 225,130, 215,130);
  
  stroke(24, 23, 28); strokeWeight(5); noFill();
  beginShape();
  line(122,393, 190,415);
  endShape();
  fill(24, 23, 28); noStroke();
  beginShape();
  circle(170,407, 11,11);
  endShape();
  
  fill(248, 248, 255); noStroke();
  beginShape();
  circle(173,405, 3,3);
  endShape();
  
  stroke(91, 88, 80); strokeWeight(7); noFill();
  beginShape();
  line(210,510, 225,495);
  endShape();
  
  fill(93, 148, 218); noStroke();
  beginShape();
  quad(170,595, 200,590, 310,660, 270,665);
  endShape();
  
  fill(0, 49, 83); noStroke();
  ellipse(155,510, 80,100);
  endShape();
  beginShape();
  triangle(105,540, 150,520, 180,640);
  endShape();
  beginShape();
  triangle(190,410, 205,415, 190,420);
  endShape();
  
  fill(93, 148, 218); noStroke();
  beginShape();
  triangle(110,538, 120,533, 165,620);
  endShape();

  fill(255, 252, 204); noStroke();
  beginShape();
  quad(190,600, 195,595, 297,661, 278,664);
  endShape();
  
  fill(252, 247, 94); noStroke();
  beginShape();
  ellipse(175,520, 80,160);
  endShape();
  beginShape();
  ellipse(160,495, 70,100);
  endShape();
  beginShape();
  ellipse(195,585, 20,40);
  endShape();
  
  fill(255, 252, 204); noStroke();
  beginShape();
  ellipse(150,480, 30,40);
  endShape();
  
  
  fill(248, 248, 255); noStroke();
  beginShape();
  triangle(128,515, 131,525, 105,540);
  endShape();
  
  stroke(91, 88, 80); strokeWeight(7); noFill();
  beginShape();
  line(179,540, 179,550);
  endShape();
  beginShape();
  line(172,545, 172,585);
  endShape();
  beginShape();
  line(172,545, 191,532);
  endShape();
  
  stroke(56, 44, 30); strokeWeight(10); noFill();
  beginShape();
  point(220,130);
  curveVertex(220,130);
  curveVertex(220,130);
  curveVertex(300,310);
  curveVertex(270,460);
  curveVertex(110,620);
  curveVertex(110,600);
  endShape();
  
    stroke(115, 66, 34); strokeWeight(10); noFill();
  beginShape();
  line(210,90, 210,130);
  curveVertex(210,130);
  curveVertex(210,130);
  curveVertex(290,310);
  curveVertex(260,460);
  curveVertex(100,620);
  curveVertex(50,620);
  endShape();
  
  stroke(91, 88, 80); strokeWeight(7); noFill();
  beginShape();
  line(185,530, 185,560);
  endShape();
  beginShape();
  line(191,532, 191,554);
  endShape();
  beginShape();
  line(225,495, 225,525);
  endShape();
  beginShape();
  line(230,510, 230,520);
  endShape();

  stroke(153, 153, 80); strokeWeight(7); noFill();
  beginShape();
  line(232,139, 265,120);
  line(232,139, 255,155);
  line(190,160, 208,140);
  line(210,220, 255,235);
  line(288,250, 330,250);
  line(283,315, 240,315);
  line(283,315, 260,340);
  line(308,318, 350,300);
  line(308,318, 355,340);
  line(293,430, 325,430);
  
  stroke(53, 104, 45); strokeWeight(8);
  beginShape();
  line(230,140, 250,110);
  line(230,140, 280,140);
  line(180,140, 208,140);
  line(190,250, 255,235);
  line(255,235, 230,270);
  line(288,250, 320,220);
  line(260,300, 280,315);
  line(309,320, 365,320);
  line(309,320, 325,360);
  line(293,430, 325,465);
  line(293,430, 293,463);
  endShape();
  
}