document.addEventListener("DOMContentLoaded", function () {
    const greetingLink = document.getElementById("greeting-link");

    greetingLink.addEventListener("click", function (event) {
        event.preventDefault();
        const name = prompt("Enter the guest's name:");
        if (name !== null && name.trim() !== "") {
            greetingLink.textContent = `WELCOME TO DATA-MAIL, ${name.toUpperCase()}!`;
            
            greetingLink.className = "text-3xl text-center dark-text font-bold";
        }
        else {
            this.innerText = "WELCOME TO DATA-MAIL!";
        }
    });

});
