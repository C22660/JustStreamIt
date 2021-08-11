// // Demander des informations détaillées sur un film avec l'identifiant

function allInformations(ident) {
    fetch(`http://localhost:8000/api/v1/titles/${ident}`).then((response) =>
    response.json().then((data) => {
        console.log(data);
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

// allInformations(499549)

//------------------------------------------------------
// Demander les films de l'année 2020. Utilisation du filtre &page_size=7& pour n'avoir que 7 retour par demande

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
    ).catch(err => console.log('Erreur ' + err));
}

filmsOfTheYear(1)

//------------------------------------------------------
// Spécial Romy Schneider

function fimsByActor(surname, name) {

    fetch(`http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=${surname}+${name}&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=28&`).then((response) =>
    response.json().then((data) => {
        console.log(data);
        let films = data["results"]
        for (let film of films) {
            let affichage = `<img src=${film.image_url} onclick="actionModal(${film.id})" style="width:100%" alt=${film.title}/>`;
        
            // Se positionne dans la div class="visuals" du carousel 3
            let elt = document.querySelector("#carousel3 div.visuals");
            // Se positionne au niveau de <a class="next" pour pouvoir placer la nouvelle Div au dessus
            newPlace = elt.children.item(1)
            // Création de la nouvelle Div
            let newDiv = document.createElement("div");
            // on y ajoute la classe
            newDiv.setAttribute('class', 'mySlides');
            // On l'ajoute dans le html
            elt.insertBefore(newDiv, newPlace);
            // On recupère la nouvelle classe et y ajoute <img src=...
            document.querySelector(".mySlides").innerHTML = affichage
        };
        })
        ).catch(err => console.log('Erreur ' + err));
    }
        
        
fimsByActor("Romy", "Schneider")
