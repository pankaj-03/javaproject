let Time= 30;
let score = 0;
let ran = 0;
addScore = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
}
makeBubble = () => {
  let clutter = "";
  for(let i = 1;i<=300;i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  
  document.querySelector("#bottompanel").innerHTML = clutter;
}

runTimer = () => {
 let timer = setInterval( function () {
  //Ternary operator use
  if(Time > 0){
    Time--;
    document.querySelector("#timerVal").textContent = Time;
  }
  else{
    clearInterval(Time);
    document.querySelector("#bottompanel").innerHTML = `<h1 style = "font-size : 80px">GAME OVER</h1>`;
  }
 
 } ,1000);
}
newHit = () => {
ran = Math.floor(Math.random()*10);
document.querySelector("#hitVal").textContent = ran;
}

document.querySelector("#bottompanel").addEventListener("click" , 
function(dets) {
 let clickednum = Number(dets.target.textContent);
 if(clickednum === ran){
  addScore();
  makeBubble();
  newHit();
 }
});


makeBubble();
runTimer();
newHit();

