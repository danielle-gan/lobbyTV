document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("main-title");
    const textElement = document.getElementById("main-text");
    const boxElement = document.getElementById("main-caption");
    const imgElement = document.getElementById("main-img");


    const boxLeft = document.getElementById("box-left");
    const imgLeft = document.getElementById("img-left");
    const titleLeft = document.getElementById("title-left");
    const captionLeft = document.getElementById("caption-left");

    const boxRight = document.getElementById("box-right");
    const imgRight = document.getElementById("img-right");
    const titleRight = document.getElementById("title-right");
    const captionRight = document.getElementById("caption-right");
  

    const texts = [
      { title: "Data Driven", text: "Strategize with confidence and precision – we are a data-driven powerhouse. Unlock insights, make informed decisions, and propel your success forward. We transform raw data into actionable intelligence, guiding your business toward unparalleled growth and efficiency.", src:"./stock_imgs/data-driven.jpg" },
      { title: "Family Owned", text: "Rooted in tradition, thriving through generations – a testament to the strength and unity of a family-owned business. Our commitment to quality and personalized service has been passed down with care, creating a legacy that continues to grow and evolve.", src:"./stock_imgs/family-owned.jpg" },
      { title: "Customer Focused", text: "Elevating excellence by serving world-class blue-chip businesses. Our commitment to precision, innovation, and top-tier service sets us apart. Join hands with a partner dedicated to exceeding the standards of the best, because your success deserves nothing less.", src:"./stock_imgs/customer-focused.jpg"}
    ];

    let index = 0;
    let index2 = 1;
    let index3 =2;

    function updateContent() {
        const currentText = texts[index];

        const nextText = texts[index2];

        const lastText = texts[index3];
      
        // Update content
        titleElement.textContent = currentText.title;
        textElement.textContent = currentText.text;
        imgElement.src = currentText.src;

        titleLeft.textContent = nextText.title;
        captionLeft.textContent = nextText.text;
        imgLeft.src = nextText.src;

        titleRight.textContent = lastText.title;
        captionRight.textContent = lastText.text;
        imgRight.src = lastText.src;

      
        // Remove animation class
        boxElement.classList.remove("shrink-animation");
        imgElement.classList.remove("shrink-right-animation");
        boxLeft.classList.remove("fade-in-animation");
        boxRight.classList.remove("fade-in-animation");
        imgLeft.classList.remove("fade-in-animation");
        imgRight.classList.remove("fade-in-animation");



        // Trigger reflow to restart the animation
        void boxElement.offsetWidth;
        void imgElement.offsetWidth;
      
        // Add animation class
        boxElement.classList.add("shrink-animation");
        imgElement.classList.add("shrink-right-animation");

        boxLeft.classList.add("fade-in-animation");
        boxRight.classList.add("fade-in-animation");
        imgLeft.classList.add("fade-in-animation");
        imgRight.classList.add("fade-in-animation");

        // Loop through the array
        index = (index + 1) % texts.length;
        index2 = (index2 + 1) % texts.length;
        index3 = (index3 + 1) % texts.length;
      
        // Call the function again after a delay
        setTimeout(updateContent, 8000); // Wait for 7 seconds before updating content (1s for animation + 6s delay)
      }
      
      // Initial call to start the loop
      updateContent();
      
      
    
});