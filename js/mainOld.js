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

  // check lenght max possible
  if (indexImageNonevisible > slides.length) {indexImageNonevisible = 7;      indexFirstImageVisible = 0}   
  // check lenght min possible
  if (indexFirstImageVisible < 0) {indexFirstImageVisible = slides.length - 7;
    indexImageNonevisible = slides.length}

  // Positionne toutes les images invisible
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Et n'affiche que 7 images visible par une boucle limitée de 7 en 7 (7/14, 14/21...)
  for (i = indexFirstImageVisible; i < indexImageNonevisible; i++) {
    slides[i].style.display = "block";
  }

}