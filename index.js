const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]')
const btnStop = document.querySelector('[data-action="stop"]')
const body = document.querySelector('body')

btnStart.addEventListener('click', clickStart)
btnStop.addEventListener('click', clickStop)
let timerId;
function clickStart() { 
  if (timerId !== 0) {
    return;
  }
  // btnStart.disabled = true; 
   timerId = setInterval(() => {
    bodyColor()
    console.log(timerId)
  }, 1000);
}

function clickStop(){ 
  // btnStart.disabled = false;
  clearInterval(timerId);
  timerId = 0;
}

function bodyColor(){
  const colorRandom = randomIntegerFromInterval(0, colors.length - 1)
  body.style.background = colors[colorRandom];
}

