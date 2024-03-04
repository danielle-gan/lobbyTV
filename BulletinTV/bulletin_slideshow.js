var currentIndex = 0;

// Array of image sources and headers
const imageSources = ["./bulletin_images/AndyM.png", "./bulletin_images/BruceM.png", "./bulletin_images/ScottB.jpg"];
const headerTexts = ["Andy Mandell", "Bruce Mandell", "Scott Braunstein"] ;
const header2Texts = ["Founder", "Owner", "Chief of Operations"] ;

// Function to update image and header with fade-in effect
function updateRotatingImages() {
    // Get elements
    const rotatingImg = document.getElementById("rotating-img");
    const rotatingHeader = document.getElementById("rotating-header");
    const rotatingHeader2 = document.getElementById("rotating-header2");

    // Update image source and alt text
    rotatingImg.src = imageSources[currentIndex];
    rotatingImg.alt = headerTexts[currentIndex];

    // Update header text
    rotatingHeader.textContent = headerTexts[currentIndex];
    rotatingHeader2.textContent = header2Texts[currentIndex];

    rotatingImg.style.animation = 'fadeInFromNone 8s ease-in-out infinite'; 
    rotatingHeader.style.animation = 'fadeInFromNone 8s ease-in-out infinite';
    rotatingHeader2.style.animation = 'fadeInFromNone 8s ease-in-out infinite';

    // Increment index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % imageSources.length;
}

updateRotatingImages();

// // Set interval to change images every 8 seconds (adjust with the above animations as needed)
setInterval(updateRotatingImages, 8000);

