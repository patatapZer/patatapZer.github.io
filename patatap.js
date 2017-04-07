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

var params1 = {
  width: 0,
  height: 0,
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

  rect(windowWidth/2,windowHeight/2,params1.width,params1.height)

}


function windowResized(){
  resizeCanvas(windiwWidth, windowHeight)
}

function keyTyped(){
if (key === 'r') {
    color = random( colors );
    TweenMax.fromTo( params1, .3, {
      width: 300,
      height: 300
    },
      {
        width: 0,
        height: 0,
      onComplete: reduce,
    })
  }}


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
