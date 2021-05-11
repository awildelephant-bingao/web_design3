var score=0;
var scoreText;



const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange']


let cWidth = canvas2.width;
let cHeight = canvas2. height;
let cPosX = cWidth/2;
let cPosY = cHeight/2;

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;

function drawFrame() {

    ctx.clearRect(0, 0, cWidth, cHeight);

    
    ctx.strokeStyle = "darkorange";

   



    ctx.beginPath();
    ctx.arc(cPosX, cPosY, 75, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; 
    }
    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0) {
        cVelY = cVelY * -1; 
    }

    cPosX =cPosX + cVelX;
    cPosY =cPosY + cVelY;

window.requestAnimationFrame(drawFrame);
}

drawFrame();


canvas2.addEventListener("click", function(event){
    // console.log(event);
    let mouseXp =event.pageX - event.target.offsetLeft;
    let mouseYp =event.pageY - event.target.offsetTop;

    // console.log("Mouse X:" + mouseXp + "Mouse Y" + mouseYp);


    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRadius && distY < cRadius){
        console.log("HI!!");
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
        var randomcolor = colors[Math.floor(Math.random()* colors.length)]
        ctx.fillStyle = randomcolor;
        incrementScore();

    }
})


var count = (function(){

    var counter = 0;
    return function () {return counter +=1;}
})();
function myGame(){

    document.getElementById("score").innerHTML = count();
}

function incrementScore() {
    score++;
    document.getElementById("score").innerHTML = score;
}
