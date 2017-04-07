var colors= [
  '#FF00F9',
  '#00FFE0',
  '#F9FF00',
  '#5EFF00'
];

var couleur;
var params = {
  width: 0,
  x: 100,
  y: 0,
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  noStroke();
  color = random(colors)
}

function draw(){
  background('#390070')
  fill(color)
  ellipse(params.x, height/2-50, params.width, 6)

}


function windowResized(){
  resizeCanvas(windiwWidth, windowHeight)
}


function mousePressed(){
  color = random(colors)
  TweenMax.fromTo(params, 0.09, {
    x: 100,
    width: 0

  },
  {
    width: width-200,
    onComplete: reduce

  } )
}

function reduce(){
  TweenMax.to(params, 0.09, {
    x: width-100,
    width: 0
  })
}


