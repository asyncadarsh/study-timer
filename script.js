let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

const display = document.querySelector("#display span");
const startButton = document.querySelector(".button-group button:nth-child(1)");
const pauseButton= document.querySelector(".button-group button:nth-child(2)");
const resetButton= document.querySelector(".button-group button:nth-child(3)");

const startTimer = () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;

      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }

      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }
};

startButton.addEventListener("click", startTimer);



const pauseTimer = ()=>{
    if(timer){
        clearInterval(timer);
        timer=null;
    }
}
pauseButton.addEventListener('click',pauseTimer);


const resetTimer = ()=>{
    if(timer){
        clearInterval(timer);
        timer=null;
    }

    hours=0;
    minutes=0;
    seconds=0;
    display.textContent= `00:00:00`;
}
resetButton.addEventListener('click',resetTimer);



