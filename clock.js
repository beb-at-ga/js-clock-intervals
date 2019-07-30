document.addEventListener("DOMContentLoaded", function() {
  interval = setInterval(intervalMgr, 1000);
});

let intervalMgr = function() {
  let now = new Date();
  updateHand("hour-hand", now);
  updateHand("minute-hand", now);
  updateHand("second-hand", now);
};

let updateHand = function(hand, time) {
  let degree = getDegree(hand, time);
  document.getElementById(`${hand}`).style.transform = `rotate(${degree}deg)`;
};

let getDegree = function(hand, time) {
  switch (hand) {
    case 'hour-hand':
      // Make fractional hr. so hand moves in smaller increments.
      let fHr = time.getMinutes() / 60 + time.getHours();
      if (fHr === 12 || fHr == 0) {
        return 0;
      } else {
        return (fHr / 12) * 360;
      }
      break;
    case 'minute-hand':
      if (time.getMinutes() === 60) {
        return 0;
      } else {
        return (time.getMinutes() / 60) * 360;
      }
      break;
    case 'second-hand':
      if (time.getSeconds() === 0) {
        return 0;
      } else {
        return (time.getSeconds() / 60) * 360;
      }
      break;
    default:
      break;
  }
};
