var offseX = 1000;
var moveOffset = 0;
var step = 5;
// function move(){
//     if(moveOffset < offseX){
//         ball.style.left = parseInt(getComputedStyle(ball).left) + step + 'px';
//         moveOffset += step;
//         setTimeout(move,5)
//     }
// }
// move();
// function move(){
//     if(moveOffset < offseX){
//         ball.style.left = parseInt(getComputedStyle(ball).left) + step + 'px' ;
//         moveOffset += step;
//         requestAnimationFrame(move);
//     }
// }
// move();
var ball = document.querySelector('#ball').classList.add('ball-move')