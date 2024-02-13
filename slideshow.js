// Array of image sources
const imageSources = ["pantone.jpg", "valentines.png", "2024Q1_NewHires.jpg"];

// Array of header texts
const headerTexts = ["2024 Color Of The Year", "Upcoming Holiday:", "Say hello to our new employees!"];

let currentIndex = 0;

// Function to update image and header with fade-in effect
function updateRotatingImages() {
    // Get elements
    const rotatingImg = document.getElementById("rotating-img");
    const rotatingHeader = document.getElementById("rotating-header");

    // Update image source and alt text
    rotatingImg.src = imageSources[currentIndex];
    rotatingImg.alt = headerTexts[currentIndex];

    // Update header text
    rotatingHeader.textContent = headerTexts[currentIndex];

    // Set different transition durations for image and header
    rotatingImg.style.animation = 'fadeInFromNone 4s ease-in-out infinite'; // Example: 2 seconds for the image
    rotatingHeader.style.animation = 'fadeInFromNone 4s ease-in-out infinite'; // Example: 1 second for the header


    // Increment index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % imageSources.length;
}

// Call the function initially
updateRotatingImages();

// Set interval to change images every 3 seconds (adjust as needed)
setInterval(updateRotatingImages, 4000);
