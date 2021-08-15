// --- Demande les informations détaillées sur un film avec l'identifiant pour enrichir le modal

function allInformations(ident) {
    fetch(`http://localhost:8000/api/v1/titles/${ident}`).then((response) =>
    response.json().then((data) => {
        let imageFilm=data.image_url
        let title=data.original_title
        let genre=data.genres
        let date=data.year
        let rated=data.rated
        let score=data.imdb_score
        let director=data.directors
        let actors=data.actors
        let duration=data.duration
        let countryFrom=data.countries
        let boxOffice=data.metascore
        let resume=data.description
        
        actionModal(imageFilm, title, genre, date, rated, score, director, actors, duration, countryFrom, boxOffice, resume);
    })
    ).catch(err => console.log('Erreur ' + err));
}

//------------------------------------------------------
// Carousel 1 - Recherche les films par notation IMBd

function filterNotationMini(imdb_score) {

    fetch(`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=${imdb_score}&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=28&`).then((response) =>
    response.json().then((data) => {
        let films = data["results"];
        // classement selon imdb_score
        let tri = films.sort(function (a, b) {
        return a.imdb_score - b.imdb_score;
        });

        responseSorted = Object.values(tri)
        responseSortedReversed = Object.values(tri).reverse()

        // Mise en place de l'image du meilleur film
        document.querySelector(".bestFilmImage").innerHTML = `<img class="theBestFilm" src=${responseSortedReversed[0].image_url}  "onclick="allInformations(${responseSortedReversed[0]["id"]})" style="width:100%" alt=${responseSortedReversed[0].title}/>`
        // Mise en place du titre du meilleur film à côté du bouton play de l'image 
        document.querySelector(".titleBestFilm p").innerHTML = responseSortedReversed[0].title
        // modification du onclik du bouton play pour ouvrir le modal
        document.querySelector(".titleBestFilm img").setAttribute("onclick",`allInformations(${responseSortedReversed[0].id})`);
        
        // on adresse l'ident pour chercher le résumé
        resumeResearch(responseSortedReversed[0].id)

        // Création des div des vignettes du carousel
        for (let film of responseSorted) {
            let affichage = `<img src=${film.image_url} onclick="allInformations(${film.id})" style="width:100%" alt=${film.title}/><br><p id="Note">${film.imdb_score}</p>`;
        
            // !!! en raison du mode de mise en place des div, reverse() est inutile.

            // Se positionne dans la div class="visuals" du carousel 1
            let elt = document.querySelector("#carousel1 div.visuals");
            // Se positionne au niveau de <a class="next" pour pouvoir placer la nouvelle Div au dessus
            newPlace = elt.children.item(1)
            // Création de la nouvelle Div
            let newDiv = document.createElement("div");
            // on y ajoute la classe
            newDiv.setAttribute('class', 'mySlides1');
            // On l'ajoute dans le html
            elt.insertBefore(newDiv, newPlace);
            // On recupère la nouvelle classe et y ajoute <img src=...
            // querySelector retourne le 1er trouvé, soit la dernière classe créée
            document.querySelector(".mySlides1").innerHTML = affichage

        };
        // On avance de +0 pour afficher les 7 premières images collectées
        carousel1.moreSlides(0);
        })
        ).catch(err => console.log('Erreur requête carousel 1' + err));
    }
        

    function resumeResearch(ident) {
        fetch(`http://localhost:8000/api/v1/titles/${ident}`).then((response) =>
        response.json().then((data) => {
            let resume=data.description
            // Mise en place du résumé du meilleur film sous le bouton play de l'image 
            document.querySelector(".resumeBestFilm p").innerHTML = resume 
        })
        ).catch(err => console.log('Erreur recherché résumé ' + err));
    }
        
    filterNotationMini(9)


//------------------------------------------------------
// Carousel 2 - Demande les films de l'année 2020. Utilisation du filtre &page_size=7& pour n'avoir que 7 retour par demande

function filmsOfTheYear(year) {

    fetch(`http://localhost:8000/api/v1/titles/?year=${year}&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=28&`).then((response) =>
    response.json().then((data) => {
        let films = data["results"]

        // classement selon imdb_score
        let tri = films.sort(function (a, b) {
            return a.imdb_score - b.imdb_score;
            });
    
            responseSorted = Object.values(tri)

        for (let film of responseSorted) {
            let affichage = `<img src=${film.image_url} onclick="allInformations(${film.id})" style="width:100%" alt=${film.title}/>`;
        
            // Se positionne dans la div class="visuals" du carousel 2
            let elt = document.querySelector("#carousel2 div.visuals");
            // Se positionne au niveau de <a class="next" pour pouvoir placer la nouvelle Div au dessus
            newPlace = elt.children.item(1)
            // Création de la nouvelle Div
            let newDiv = document.createElement("div");
            // on y ajoute la classe
            newDiv.setAttribute('class', 'mySlides2');
            // On l'ajoute dans le html
            elt.insertBefore(newDiv, newPlace);
            // On recupère la nouvelle classe et y ajoute <img src=...
            // querySelector retourne le 1er trouvé, soit la dernière classe créée
            document.querySelector(".mySlides2").innerHTML = affichage
        };
        // On avance de +0 pour afficher les premières images collectées
        carousel2.moreSlides(+0);
    })
    ).catch(err => console.log('Erreur requête carousel 2' + err));
}

filmsOfTheYear(2020)

//------------------------------------------------------
// Carousel 4 - Recherche d'un genre précisé. Ici, comédies françaises

function fimsByGenreAndCountry(genre, country, since) {

    fetch(`http://localhost:8000/api/v1/titles/?year=&min_year=${since}&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${genre}&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=${country}&country_contains=${country}&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=28&`).then((response) =>
    response.json().then((data) => {
        let films = data["results"]

        // classement selon imdb_score
        let tri = films.sort(function (a, b) {
            return a.imdb_score - b.imdb_score;
            });
    
            responseSorted = Object.values(tri)

        for (let film of responseSorted) {
            let affichage = `<img src=${film.image_url} onclick="allInformations(${film.id})" style="width:100%" alt=${film.title}/>`;
        
            // Se positionne dans la div class="visuals" du carousel 4
            let elt = document.querySelector("#carousel4 div.visuals");
            // Se positionne au niveau de <a class="next" pour pouvoir placer la nouvelle Div au dessus
            newPlace = elt.children.item(1)
            // Création de la nouvelle Div
            let newDiv = document.createElement("div");
            // on y ajoute la classe
            newDiv.setAttribute('class', 'mySlides4');
            // On l'ajoute dans le html
            elt.insertBefore(newDiv, newPlace);
            // On recupère la nouvelle classe et y ajoute <img src=...
            // querySelector retourne le 1er trouvé, soit la dernière classe créée
            document.querySelector(".mySlides4").innerHTML = affichage
        };
        // On avance de +0 pour afficher les premières images collectées
        carousel4.moreSlides(+0);
        })
        ).catch(err => console.log('Erreur requête carousel 4' + err));
    }
        
    // genre, pays, depuis
    fimsByGenreAndCountry("Comedy", "France", "2000")

//------------------------------------------------------
// Carousel 3 - Recherche un acteur précisé. Ici, Romy Schneider

function fimsByActor(surname, name) {

    fetch(`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=${surname}+${name}&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=28&`).then((response) =>
    response.json().then((data) => {
        let films = data["results"]

        // classement selon imdb_score
        let tri = films.sort(function (a, b) {
            return a.imdb_score - b.imdb_score;
            });
    
            responseSorted = Object.values(tri)

        for (let film of responseSorted) {
            let affichage = `<img src=${film.image_url} onclick="allInformations(${film.id})" style="width:100%" alt=${film.title}/>`;
        
            // Se positionne dans la div class="visuals" du carousel 3
            let elt = document.querySelector("#carousel3 div.visuals");
            // Se positionne au niveau de <a class="next" pour pouvoir placer la nouvelle Div au dessus
            newPlace = elt.children.item(1)
            // Création de la nouvelle Div
            let newDiv = document.createElement("div");
            // on y ajoute la classe
            newDiv.setAttribute('class', 'mySlides3');
            // On l'ajoute dans le html
            elt.insertBefore(newDiv, newPlace);
            // On recupère la nouvelle classe et y ajoute <img src=...
            // querySelector retourne le 1er trouvé, soit la dernière classe créée
            document.querySelector(".mySlides3").innerHTML = affichage
        };
        // On avance de +0 pour afficher les premières images collectées
        carousel3.moreSlides(+0);
        })
        ).catch(err => console.log('Erreur requête carousel 3' + err));
    }
        
        
fimsByActor("Romy", "Schneider")