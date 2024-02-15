document.addEventListener("DOMContentLoaded", function () {
    const greetingLink = document.getElementById("greeting-link");

    greetingLink.addEventListener("click", function (event) {
        event.preventDefault();
        const name = prompt("Enter the guest's name:");
        if (name !== null && name.trim() !== "") {
            greetingLink.textContent = `We are so happy to have you, ${name}!`;
        }
        else {
            this.innerText = "We are so happy to have you!";
        }
    });

      // Update day labels
  for (let i = 0; i < 3; i++) {
    let labelElement = document.getElementById(`Day${i + 1}Label`);
    
    // Calculate the index for the next day in the daysOfWeek array
    let nextDayIndex = (currentDate.getDay() + i + 1) % 7;
    
    // Update the day label with the first 3 letters of the day
    labelElement.innerHTML = daysOfWeek[nextDayIndex] + ':';
  }
});

  // Get the current date
  let currentDate = new Date();
  
  // Get days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
