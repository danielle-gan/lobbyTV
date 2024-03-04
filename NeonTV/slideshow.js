var currentIndex = 0;

// Array of image sources and headers
const imageSources = ["./slideshow_icons/cmg.png", "./slideshow_icons/envelope.png", "./slideshow_icons/laser.png", "./slideshow_icons/lettershop.png", "./slideshow_icons/MCS.png", "./slideshow_icons/paper.png", "./slideshow_icons/printing.png"];
const headerTexts = ["Commingling", "Envelope Converting", "Laser Personalization", "Lettershop Services", "Multi-Channel Services", "Paper Procurement", "Printing"] ;

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

    rotatingImg.style.animation = 'fadeInFromNone 8s ease-in-out infinite'; 
    rotatingHeader.style.animation = 'fadeInFromNone 8s ease-in-out infinite';


    // Increment index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % imageSources.length;
}

updateRotatingImages();

// // Set interval to change images every 8 seconds (adjust with the above animations as needed)
setInterval(updateRotatingImages, 8000);

