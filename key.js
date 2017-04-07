function setup() {
  createCanvas(1200, 900);
}
 
function draw() {
    
  noStroke();
  fill(random(100), random(150, 220), random(150, 220), random(100, 150));
  if (keyIsPressed) {
  
  if ((key == 'j') || (key == 'J')) {
  triangle(random(0,10), random(0,80), random(0,130), random(0,230), random(0,400), random(0,600));
  }
  }
}