function setup() {
  createCanvas(1200, 800);
  stroke(255);
  noFill();
}

function draw() {
  background('#AF4CFF');
  color('#AF4CFF');
  for (var i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 110, 20, 940, 300, 240-(i/16.0), 300+(i/8.0));
  }
}
