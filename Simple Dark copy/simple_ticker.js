const funFacts = [
    "Postcards were one of the most popular forms of direct mail marketing in the 19th & early 20th centuries.",
    "Direct mail marketing dates back to 1000 B.C. when an Egyptian landowner sent an ad on a piece of papyrus",
    "Johannes Gutenberg developed the printing press in 1440",
    "ZIP codes were introduced in 1963 to improve the efficiency of direct mail delivery",
    'The term "Direct Marketing" was coined by Lester Wunderman in 1967',
    "Benjamin Franklin created one of the first mail-order catalogs",
    "Direct mail can have an ROI of over 29%",
    "Personalized mail, like using the recipient's name and tailored content, tends to yield higher response rates",
    "Modern direct mail often uses variable printing to personalize messages and offers for individual recipients",
    "According to the USPS, 77% of people sort through their mail upon retrieval"
  ];

  
  let index = 0;

  function updateTicker() {
    const tickerText = document.getElementById("ticker-text");
    tickerText.textContent = funFacts[index];
    tickerText.style.animation = 'fadeInFromNone 8s infinite';

    index = (index + 1) % funFacts.length;

  }

  const video = document.getElementById('myvideo');
  video.addEventListener("timeupdate", function () {
    if(this.currentTime >= 89.0) {
        this.currentTime = 0.5;
    }
});

  // Start the ticker
  updateTicker();

  setInterval(updateTicker, 8000);