"use strict";

let counter = 0;

if (counter === 12) {
  myStopTimer();
} else {
  myTimer();
}

// counterTimer();

function myTimer() {
  console.log("aqui inicio la cuenta");
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
  setInterval(myTimer, 1000);
}

function myStopTimer() {
  console.log("aqui quiero parar la cuenta");
  clearInterval(myTime);
}
