function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(50,390,50,300);
  rect(20,390,10,350);
  rect(100,390,50,250);
  rect(160,390,70,200);
  rect(200,390,50,250);
  rect(250,390,50,300);
  rect(280,390,10,350);
  ellipse(50,215,50);
  ellipse(150,255,70);
  ellipse(250,215,50);
  drawSprites();
}