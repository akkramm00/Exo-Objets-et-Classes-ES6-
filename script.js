//Pour cet exercice Final , nous allons devoir créer un petit jeu mettant en scène trois joueurs
//Chaque joueurs possède un capital de départ de points, le but étant de faire perdre des points 
//à ses adversaires en les attanquant. Le joueur gardant le plus de point à la fin de la partie gagne .

// => Procédons par étapes :
// Dans un premier temps implémentons deux classes , que nous intitulerons "Partie" et "Joueur"
// Un joueur dispose d'un nom, prenom, nombre de points valant 100 par défaut. 
// On doit également pouvoir connaitre son tour de jeu ?valant 0 par défaut.

// Une partie comporte des joueurs, un joueur Vainqueur que l'on ne connait pas par défaut,et d'un tour .
// Initialisons une partie ?ainsi que 3 nouveaux joueurs .

//===================================== Solution ========================================

//+++++++++++++++++++++++++++++++  création des classes  ++++++++++++++++++++++++++++++++

class Partie {
    constructor(tour , joueurs) {
        this.tour = tour
        this.joueurs = joueurs
        this.joueurVainqueur = nul
    }
}

class Joueur {
    constructor(nom, prenom, points, tour) {
        this.nom = nom
        this.prenom = prenom
        this.points = points
        this.tour = tour
    }
}

//+++++++++++++++++++++++++++++++ Instanciation des joueurs +++++++++++++++++++++++++++++++++

let joueur1 = new Joueur('Joueur' , '1' , 100 , 0)
let joueur2 = new Joueur('Joueur' , '2' , 100 , 0)
let joueur3 = new Joueur('Joueur' , '3' , 100 , 0)

//+++++++++++++++++++++++++++++++ Instanciation de  La Partie ++++++++++++++++++++++++++++++

let parrtie = new Partie(3 , [joueur1, joueur2, joueur3])



