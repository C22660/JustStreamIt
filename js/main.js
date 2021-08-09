
// // ----- MODAL MANAGEMENT -------
function actionModal(imageFilm, title, genre, date, rated, score, director, actors, duration, country, boxOffice, resume) {
    modal.style.display = "block";
    // --------- remplace le contenu du modal----------
    document.getElementById('imageFilm').src = imageFilm;
    document.getElementById('imageFilm').alt = `Image de ${title}`
    document.getElementById('title').innerHTML = title;
    document.getElementById('genre').innerHTML = "<strong>Genres : </strong>" + genre;
    document.getElementById('date').innerHTML = "<strong>Date de sortie : </strong>" + date;
    document.getElementById('rated').innerHTML = "<strong>Note : </strong>"+ rated;
    document.getElementById('score').innerHTML = "<strong>Score IMDB : </strong>"+ score;
    document.getElementById('director').innerHTML = "<strong>Réalisateur(s) : </strong>"+ director;
    document.getElementById('actors').innerHTML = "<strong>Acteurs : </strong>" + actors;
    document.getElementById('duration').innerHTML = "<strong>Durée : </strong>"+ duration +" minutes";
    document.getElementById('country').innerHTML = "<strong>Pays d'origine : </strong>"+ country;
    document.getElementById('boxOffice').innerHTML = "<strong>Box Office : </strong>"+ boxOffice+"%";
    document.getElementById('resume').innerHTML = "<strong>Résumé : </strong>"+ resume;
   
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function changeClick () {
//   document.getElementsByClassName(".image 1 C2").onclick = function (){console.log("Hello");};
// }

// changeClick()

// ---------onclick="plusSlides() management----------------
let pageIndex = 1;
showSlides(pageIndex);

function plusSlides(n) {
  showSlides(pageIndex += n);
}

function currentSlide(n) {
  showSlides(pageIndex = n);
}

function showSlides(n) {
  if (n <= 0) {pageIndex = 1;}
  filmsOfTheYear(pageIndex)
}