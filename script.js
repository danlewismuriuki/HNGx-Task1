const d = new Date();
document.getElementById("currentUTCTime").innerHTML = d;

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const weekday = new Date();
let day = days[weekday.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;