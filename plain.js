document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("main-title");
    const textElement = document.getElementById("main-text");
    const boxElement = document.getElementById("main-caption");
    const imgElement = document.getElementById("main-img");

    const texts = [
      { title: "Data Driven", text: "Strategize with confidence and precision – we are a data-driven powerhouse. Unlock insights, make informed decisions, and propel your success forward. At the intersection of innovation and analytics, we transform raw data into actionable intelligence, guiding your business toward unparalleled growth and efficiency.", src:"./bulletin_images/AndyM.webp" },
      { title: "Family Owned", text: "Rooted in tradition, thriving through generations – a testament to the strength and unity of a family-owned business. Our commitment to quality and personalized service has been passed down with care, creating a legacy that continues to grow and evolve.", src:"./bulletin_images/BruceM.webp" },
      { title: "Customer Focused", text: "Elevating excellence by serving world-class blue-chip businesses. Our commitment to precision, innovation, and top-tier service sets us apart. Join hands with a partner dedicated to exceeding the standards of the best, because your success deserves nothing less.", src:"./bulletin_images/ScottB.jpg" }
    ];

    let index = 0;

    function updateContent() {
        const currentText = texts[index];
      
        // Update content
        titleElement.textContent = currentText.title;
        textElement.textContent = currentText.text;
        imgElement.src = currentText.src;
      
        // Remove animation class
        boxElement.classList.remove("shrink-animation");
        imgElement.classList.remove("shrink-right-animation");


        // Trigger reflow to restart the animation
        void boxElement.offsetWidth;
        void imgElement.offsetWidth;
      
        // Add animation class
        boxElement.classList.add("shrink-animation");
        imgElement.classList.add("shrink-right-animation");

        // Loop through the array
        index = (index + 1) % texts.length;
      
        // Call the function again after a delay
        setTimeout(updateContent, 5000); // Wait for 7 seconds before updating content (1s for animation + 6s delay)
      }
      
      // Initial call to start the loop
      updateContent();
      
      
    
});