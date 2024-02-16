var myIndex = 0;
carousel();
carouselheaders();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}

function carouselheaders() {
    var headers = document.getElementsByClassName("myHeaders");
    for (var i = 0; i < headers.length; i++) {
      headers[i].classList.remove("slideInFromLeft");
      headers[i].classList.remove("slideOutToLeft");
  
      // Check if the corresponding carousel image is displayed
      if (i === myIndex-1) {
        headers[i].classList.add("slideInFromLeft");
      } else {
        headers[i].classList.add("slideOutToLeft");
      }
    }
}