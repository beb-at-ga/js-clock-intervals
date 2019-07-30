// set 3 intervals? hh, mm, ss. set approp milliseconds for hand:
let sec = 1000;
let min = sec * 60;
let hour = min * 60;
let now = new Date();
console.log(sec, min, hour);

let secInterval, minInterval, hourInterval;

document.addEventListener("DOMContentLoaded", function() {
  // init the page
  secInterval = setInterval(secMgr, sec);
  minInterval = setInterval(minMgr, min);
  // hourInterval = setInterval(hourMgr, hour);
});

let minMgr = function() {
  let now = new Date();
  let minDegree = minRotation(now.getMinutes());
  updateHand("minute-hand", minDegree);
};

let minRotation = function(curMin) {
  if (curMin === 60) {
    return 0;
  } else {
    return (curMin / 60) * 60;
  }
};

let secMgr = function() {
  let now = new Date();
  let secDegree = secondRotation(now.getSeconds()); // returns (59 / 60) * 360
  updateHand("second-hand", secDegree);
};

let secondRotation = function(curSec) {
  // (curSec === 0) ?  0 : (curSec / 60) * 360;
  if (curSec === 0) {
    return 0;
  } else {
    return (curSec / 60) * 360;
  }
};

let updateHand = function(hand, degree) {
  document.getElementById(`${hand}`).style.transform = `rotate(${degree}deg)`;
};

// let minMgr = function() {

// };

// let hourMgr = function() {

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

// };
