const mySetInterval = require("./setInterval");

const myInterval = mySetInterval(() => {
  console.log("Executing callback at regular intervals");
}, 1000);

setTimeout(() => {
  myInterval.clearInterval();
  console.log("Interval stopped after 5 seconds");
}, 5000);
