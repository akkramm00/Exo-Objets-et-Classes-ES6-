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

//=====================================  INSTRUCTION  ======================================

// Mettons les en place les éléments suivants 
// Modifions la la classe Joueur afin d'implémenter les méthodes suivantes/
// ==> Une méthode permettant de retrouver l'identité du joueur(son nom et son prénom).
// ==> Une méthpode permettant d'afficher lels points du joueur, qui appelera la méthode
// précédente et affichera le nombre de pints du joueur.
// ==> Une méthode permettant à un joueur d'attaquer : Une attaque peut faire perdre aléatoirement
// entre 1 et 50 points à un adversaire. Si l'adversaire n'a plus de points , son total ne peut etre 
// négatif, il vaudra simplement zéro. Un joueur dispose de 3 tours, chaque attaque augmente le nombre de tours consommés.

//+++++++++++++++++++++++++++++++++++++++ Script +++++++++++++++++++++++++++++++++++++++++

class Joueur {
    constructor(nom, prenom, points, tour) {
        this.nom = nom
        this.prenom = prenom
        this.points = 100
        this.tour = 0
    }
    rand(nb) {
        return Math.floor(Math.random() * Math.floor(nb));
    }


    attaque(adversaire) {
        if (this.tour < 3) {
            adversaire . points -= this.rand(51)
            if(adversaire.points < 0) {
                adversaire.points =0
            }
            adversaire.affichPoints()
            ++this.tour
        }
    }
    identite() {
        return `${this.nom} ${this.prenom}`
    }

    affichePoints() {
        console.log(`${this.identite()} possède ${this.points} points`)
    }
}

// ===================================== Answer two ==================================
// +++++++++++++++++++++++++++++++++++ Instruction +++++++++++++++++++++++++++++++++++

// Considérons désormais ces éléments supplémentaires :
// Définissons,  pour chaque joueur, une méthode lui permettant d'effectuer une " Super attaque".
// Une super attaque est une attaque faisant perdre 10 points de plus .

// Modifions la méthode 'attaque()' afin qu'elle accepte in second paramètre "bonus". Le bonus sera cumulé à la valeur initiale de l'attaque.

Joueur.prototype.superAttaque = function(adversaire) {
    this.attaque(adversaire, 10)
}

class Joueur {
    //...
    attaque(adversaire,bonus = 0) {
        if (this.tour < 3) {
            adversaire.points -= this.rand(51) + bonus
            if (adversaire.points < 0) {
                adversaire.points = 0
            }
            adversaire.affichePoints()
            ++this.tour
        }
    }
    //...
}









