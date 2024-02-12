// Array of image sources
const imageSources = ["pantone.jpg", "valentines.png", "yet-another-image.jpg"];

// Array of header texts
const headerTexts = ["2024 Color Of The Year", "Upcoming Holiday:", "Yet Another Header"];

// Initial index
let currentIndex = 0;

// Function to update image and header
function updateRotatingImages() {
    // Get elements
    const rotatingImg = document.getElementById("rotating-img");
    const rotatingHeader = document.getElementById("rotating-header");

    // Update image source and alt text
    rotatingImg.src = imageSources[currentIndex];
    rotatingImg.alt = headerTexts[currentIndex];

    // Update header text
    rotatingHeader.textContent = headerTexts[currentIndex];

    // Increment index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % imageSources.length;
}

// Call the function initially
updateRotatingImages();

// Set interval to change images every 3 seconds (adjust as needed)
setInterval(updateRotatingImages, 1000);
