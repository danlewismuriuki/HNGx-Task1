const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const weekday = new Date();
let day = days[weekday.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;


const now = new Date();

// Get the UTC milliseconds component of the current time
const milliseconds = now.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = milliseconds;

