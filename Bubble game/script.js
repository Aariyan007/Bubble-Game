var timer = 60;
var score = 0;
var hitrn = 0;


function scoreman(){
    score += 10;
    document.querySelector("#Scoreshit").textContent = score;
}

function hitman(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

function bubbles(){
    var clutter = "";

for(var i = 1; i <= 78; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#bottom").innerHTML =  clutter;
}
function runtimer(){
var timernw = setInterval(function(){
    if (timer > 0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timernw);
        document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`;
    }
},1000);
}

        document.querySelector("#bottom")
        .addEventListener("click",function (dets) {
            var clickednum = Number(dets.target.textContent);
            if(clickednum === hitrn){
                scoreman();
                bubbles();
                hitman();
            }
            });

hitman();
runtimer();
bubbles();
scoreman();