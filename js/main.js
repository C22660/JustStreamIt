
// // ----- MODAL MANAGEMENT -------
function actionModal() {
    modal.style.display = "block";
    // --------- remplace le contenu du modal----------
    document.getElementById('imageFilm').src = "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg";
    document.getElementById('imageFilm').alt = `Image de ${"mettre titre"}`
    document.getElementById('title').innerHTML = "Avatar";
    document.getElementById('genre').innerHTML = "<strong>Genres : </strong>" +"Action, Adventure, Fantasy";
    document.getElementById('date').innerHTML = "<strong>Date de sortie : </strong>" +"2009";
    document.getElementById('rated').innerHTML = "<strong>Note : </strong>"+"12";
    document.getElementById('score').innerHTML = "<strong>Score IMDB : </strong>"+"7.8";
    document.getElementById('director').innerHTML = "<strong>Réalisateur(s) : </strong>"+ "James Cameron";
    document.getElementById('actors').innerHTML = "<strong>Acteurs : </strong>" +"CCH Pounder, Dileep Rao, Giovanni Ribisi, Jason Whyte, Joel David Moore, Laz Alonso, Matt Gerald, Michelle Rodriguez, Sam Worthington, Scott Lawrence, Sean Anthony Moran, Sigourney Weaver, Stephen Lang, Wes Studi, Zoe Saldana";
    document.getElementById('duration').innerHTML = "<strong>Durée : </strong>"+"162"+" minutes";
    document.getElementById('country').innerHTML = "<strong>Pays d'origine : </strong>"+"USA";
    document.getElementById('boxOffice').innerHTML = "<strong>Box Office : </strong>"+"83%";
    document.getElementById('resume').innerHTML = "<strong>Résumé : </strong>"+"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.";
   
} "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"

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