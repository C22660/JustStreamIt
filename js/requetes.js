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
        
        // Création des div des vignettes du carousel
        for (let film of responseSorted) {
            let affichage = `<img src=${film.image_url} onclick="allInformations(${film.id})" style="width:100%" alt=${film.title}/><br><p id="Note">${film.imdb_score}</p>`;
        
            // !!! en raison du mode de mise en place des div, reverse() est inutile.

            // Se positionne dans la div class="visuals" du carousel 3
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
        
        
    filterNotationMini(9)


//------------------------------------------------------
// Carousel 2 - Demande les films de l'année 2020. Utilisation du filtre &page_size=7& pour n'avoir que 7 retour par demande

function filmsOfTheYear(pageIndex) {

    fetch(`http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=${pageIndex}&page_size=7&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=2020`).then((response) =>
    response.json().then((data) => {
        let films = data["results"]
        document.querySelector(".image_1_C2").innerHTML = `<img src="${films[0]["image_url"]}" onclick="allInformations(${films[0]["id"]})" style="width:100%" alt="${films[0]["title"]}">`;

        document.querySelector(".image_2_C2").innerHTML = `<img src="${films[1]["image_url"]}" onclick="allInformations(${films[1]["id"]})" style="width:100%" alt="${films[1]["title"]}">`;
        
        document.querySelector(".image_3_C2").innerHTML = `<img src="${films[2]["image_url"]}" onclick="allInformations(${films[2]["id"]})" style="width:100%" alt="${films[2]["title"]}">`;

        document.querySelector(".image_4_C2").innerHTML = `<img src="${films[3]["image_url"]}" onclick="allInformations(${films[3]["id"]})" style="width:100%" alt="${films[3]["title"]}">`;

        document.querySelector(".image_5_C2").innerHTML = `<img src="${films[4]["image_url"]}" onclick="allInformations(${films[4]["id"]})" style="width:100%" alt="${films[4]["title"]}">`;

        document.querySelector(".image_6_C2").innerHTML = `<img src="${films[5]["image_url"]}" onclick="allInformations(${films[5]["id"]})" style="width:100%" alt="${films[5]["title"]}">`;

        document.querySelector(".image_7_C2").innerHTML = `<img src="${films[6]["image_url"]}" onclick="allInformations(${films[6]["id"]})" style="width:100%" alt="${films[6]["title"]}">`;

    })
    ).catch(err => console.log('Erreur requête carousel 2' + err));
}

filmsOfTheYear(1)

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
        
            // Se positionne dans la div class="visuals" du carousel 3
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