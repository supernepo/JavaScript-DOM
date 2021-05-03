"use strict";

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

function cronometro() {
  seconds++;
  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }
  if (minutes > 59) {
    hours++;
    minutes = 0;
  }
  if (hours > 23) {
    days++;
    hours = 0;
  }
}
setInterval(cronometro, 1000);
setInterval(() => {
  console.log(
    `Tiempo Transcurrido: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Segundos`
  );
}, 5000);
