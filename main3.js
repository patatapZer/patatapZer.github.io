var box=document.querySelector('#box');
box.style.background='red';
function move(){
TweenMax.to(box, 1, {
  left: Math.floor(Math.random()*300)+'px',
  top: Math.floor(Math.random()*300)+'px',
  ease: Bounce.easeOut,
  onComplete: grow
 });
}

function grow(){
  TweenMax.to(box, 1, {
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px'
  });
}
document.body.addEventListener('click', move);
