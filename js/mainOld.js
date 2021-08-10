// --- Pour afficher les 7 slides suivants à partir du Onclick sur la base d'un import globale des images en une fois

let indexFirstImageVisible = 0;
let indexImageNonevisible = 7;
showSlides();

function otherSlides(n) {
  indexFirstImageVisible +=n;
  indexImageNonevisible+=n;
  showSlides();
}


function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  console.log(indexFirstImageVisible);
  console.log(indexImageNonevisible);

  // check lenght max possible
  if (indexImageNonevisible > slides.length) {indexImageNonevisible = (slides.length);      indexFirstImageVisible = (slides.length-7)}   
  // check lenght min possible
  if (indexFirstImageVisible < 0) {indexFirstImageVisible = 0;
    indexImageNonevisible = 7}

  // All images unvisible
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log("unvisible" + i);
  }

  // Only seven next images visible
  for (i = indexFirstImageVisible; i < indexImageNonevisible; i++) {
    slides[i].style.display = "block";
    console.log("visible " + i);
  }

}