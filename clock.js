
// set 3 intervals? hh, mm, ss. set approp milliseconds for hand:
let sec = 1000; 
let min = sec * 60;
let hour = min * 60;

let secInterval, minInterval, hourInterval;

document.addEventListener('DOMContentLoaded', function(){
    // init the page
});

secInterval = setInterval(secMgr, sec);
minInterval = setInterval(minMgr, min);
hourInterval = setInterval(hourMgr, hour);

let secMgr = function() {
    
};

let minMgr = function() {

};

let hourMgr = function() {

};


