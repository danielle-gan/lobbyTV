var currentIndex = 0;

// Array of image sources and headers
const imageSources = ["./slideshow_images/pantone.jpg", "./slideshow_images/InformedDelivery.png", "./slideshow_images/2024Q1_NewHires.jpg", "./slideshow_images/Hiring.png"];
const headerTexts = ["2024 Color Of The Year", "Sign Up For Informed Delivery", "Say hello to our new employees!", "Join Our Family!"] ;

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

