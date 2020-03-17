const height = 621716;
const totalNumber = 12.5 * (height - 472500) + 16406250;
const til_halving = 630000 - height;
const blockTime = 9.69166666667;
const minutes_til_halving = til_halving * 9.725;
const days_til_halving = minutes_til_halving / (24 * 60);
const days_remainder = days_til_halving - Math.floor(days_til_halving);
const minutes = days_remainder - Math.floor(days_remainder);
const percent_done = (((height % 210000) / 210000) * 360);


const untill = til_halving.toFixed(0);




const days = Math.floor(days_til_halving);
const hours = Math.floor(days_remainder * 24);
const mins = (minutes * 60).toFixed(0);




var daysInput = document.getElementById("days_calc");
daysInput.innerHTML = days;

var hoursInput = document.getElementById("hours_label");
hoursInput.innerHTML = hours;

var minutesInput = document.getElementById("minutes_label");
minutes_label.innerHTML = mins;




var d = new Date(Date.now() + ((days_til_halving * 24 + days_remainder) * 60 + minutes) * 60 * 1000);
let currentMonth = d.getMonth() + 1;
let currentDay = d.getUTCDate();
let currentYear = d.getUTCFullYear();

console.log(currentYear);

if (currentMonth === 4) {
    var month_name = "April";
} else if (currentMonth === 5) {
    var month_name = "May";
} else if (currentMonth === 3) {
    var month_name = "March";
}


// call it day not days when it is only one left
let daysOne = document.getElementById("days_one");
if (days === 1) {
    daysOne.innerHTML = "day";
} 



var daysInput = document.getElementById("date_eta");
daysInput.innerHTML =currentDay + ' ' + month_name + ', ' + currentYear;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const untilNew = numberWithCommas(untill);

let howLong = document.getElementById("calc-content-div");
howLong.innerHTML = 'Blocks until Halving:' + ' ' + untilNew;




// select the minute-hand and rotate it
const minuteHand = document.querySelector('.minutes');
minuteHand.style.transform = "rotate(" + percent_done + "deg)";