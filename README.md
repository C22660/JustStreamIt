# Application web permettant de visualiser en temps réel un classement de films

L'objectif est de développer un site web qui permettra d'afficher en temps réel des films.

L’interface comprend les zones suivantes : 

* “Meilleur film” : Cette zone affiche la photo du film qui a la meilleur note Imdb toutes catégories confondues, ainsi que son titre, un bouton et le résumé du film sous le bouton.
* “Films les mieux notés” : Cette zone affiche les 7 autres films les mieux notés toutes catégories confondues. On peut les faire défiler avec une flèche à gauche et à droite.
* “Les films de l'année 2020” : Montre les 7 films les mieux notés de cette catégorie. 
* “Spécial Romy Schneider” : Montre les 7 films les mieux notés de cette catégorie.
* “Une sélection des meilleures comédies française” : Idem sur cette catégorie (depuis 2000).

Lorsqu’on clique sur le bouton play du film en vedette ou sur l’image d’un des films une fenêtre modale s’ouvre. Dans cette fenêtre des informations sont présentes (L’image de la pochette du film ; Le Titre du film ; Le genre complet du film ; Sa date de sortie ; Son Rated ; Son score Imdb ; Son réalisateur ; La liste des acteurs ; Sa durée ; Le pays d’origine ; Le résultat au Box Office ; Le résumé du film).

Un bouton permet de refermer la fenêtre modale.

Pour ce projet, les données sont collectées sur une version locale de d’API OCMovies :
https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

**Exécution du programme**
La page web sera executée depuis ```python JustStreamIt.html```

## Techologies
HTML 5
CSS
Vanilla JavaScript pour gérer les événements de la page web.

## Auteur
Cédric M