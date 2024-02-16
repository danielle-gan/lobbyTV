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

});
