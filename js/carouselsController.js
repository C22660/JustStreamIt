// --- Contrôle les carousel par l'intermédiaire d'un classe
// --- Pour afficher les 7 slides suivants à partir du Onclick sur la base d'un import globale des images en une fois
// --- Toutes les vignettes étant chargées, gestion de l'affichage par la modification du style.display none ou block

class SlidesManagement {
    constructor(classSlide) {
        this.indexFirstImageVisible = 0;
        this.indexImageNoneVisible = 7;
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

        // Positionne toutes les images invisibles
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Et n'affiche que 7 images visibles par une boucle limitée de 7 en 7 (7/14, 14/21...)
        // Les div n'étant créées que par requetes.js, mise en place d'un if pour vérifier si présentent
        // évite un mesg d'anomalie lors du premier chargement de la page
        if (slides.length != 0) {
            for (let e = this.indexFirstImageVisible; e < this.indexImageNoneVisible; e++) {
                slides[e].style.display = "block";
        }}

    }

}

const carousel1 = new SlidesManagement("mySlides1");
const carousel2 = new SlidesManagement("mySlides2");
const carousel3 = new SlidesManagement("mySlides3");
const carousel4 = new SlidesManagement("mySlides4");

carousel1.openSlides();
carousel2.openSlides();
carousel3.openSlides();
carousel4.openSlides();