// --- Contrôle les carousel 1, 3 et 4 par l'intermédiaire d'un classe
// --- Pour afficher les 7 slides suivants à partir du Onclick sur la base d'un import globale des images en une fois
// --- Toutes les vignettes étant chargées, gestion de l'affichage par la modification du style.display none ou block

class SlidesManagement {
    constructor(classSlide) {
        this.indexFirstImageVisible = 0;
        this.indexImageNoneVisible = 7;
        //this.numberOfElements = numberOfElements;
        this.classSlide = classSlide;
    } 

    moreSlides(n) {
        this.indexFirstImageVisible +=n;
        this.indexImageNoneVisible +=n;
        this.openSlides()
    }


    openSlides() {
        let slides = document.getElementsByClassName(this.classSlide);

        // check lenght max possible
        if (this.indexImageNoneVisible > slides.length) {this.indexImageNoneVisible = 7; this.indexFirstImageVisible = 0}   
        // check lenght min possible
        if (this.indexFirstImageVisible < 0) {this.indexFirstImageVisible = slides.length - 7;
            this.indexImageNoneVisible = slides.length}

        // Positionne toutes les images invisible
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Et n'affiche que 7 images visibles par une boucle limitée de 7 en 7 (7/14, 14/21...)
        for (let e = this.indexFirstImageVisible; e < this.indexImageNoneVisible; e++) {
            console.log(slides[e])
            slides[e].style.display = "block";
        }

    }

}

const carousel1 = new SlidesManagement("mySlides1");
const carousel3 = new SlidesManagement("mySlides3");
const carousel4 = new SlidesManagement("mySlides4");

carousel1.openSlides();
carousel3.openSlides();
carousel4.openSlides();

// --- Contrôle le carousel 2.  Cette fois ci, c'est le numéro de la page qui est adressé à la requête.
// --- Cela remplacera les 7 images au coup par coup.
let pageIndex = 1;
nextSlides(pageIndex);

function plusSlides(n) {
  nextSlides(pageIndex += n);
}

function currentSlide(n) {
  nextSlides(pageIndex = n);
}

function nextSlides(n) {
if (n <= 0) {pageIndex = 1;}
filmsOfTheYear(pageIndex)
}