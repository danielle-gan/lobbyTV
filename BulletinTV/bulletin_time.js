  // Get the current date
  let currentDate = new Date();
  
  // Get days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 3; i++) {
        let labelElement = document.getElementById(`Day${i + 1}Label`);
        
        let nextDayIndex = (currentDate.getDay() + i + 1) % 7;
        
        // Update the day label with the first 3 letters of the day
        labelElement.innerHTML = daysOfWeek[nextDayIndex] + ':';
      }
});

function Time() {

    // Creating object of the Date class
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();


    // Variable to store AM / PM
    var period = "";

    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    // Updating hour, minute
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);

    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " " + period;

    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 10000);
}

// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}

Time();

const options2 = { weekday: 'long'};
const options3 = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}


document.getElementById("current-day").innerHTML = new Date().toLocaleDateString('en-US', options2);

document.getElementById("current-date").innerHTML = new Date().toLocaleDateString('en-US', options3);

