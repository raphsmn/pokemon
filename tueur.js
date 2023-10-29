// Création du tueur en série Jason
const tueur = {
    nom: "Jason",
    PV: 100
  };
  
// Création des caractéristiques des survivants
  const caracteristiques = [
    { nom: "Nerd", ProbaMourir: 0.2, ProbaDegats: 0.2, ProbaMourirDegats: 0.6 },
    { nom: "Sportif", ProbaMourir: 0.1, ProbaDegats: 0.5, ProbaMourirDegats: 0.3 },
    { nom: "Blonde", ProbaMourir: 0.4, ProbaDegats: 0.3, ProbaMourirDegats: 0.2 },
    { nom: "Riche", ProbaMourir: 0.3, ProbaDegats: 0.4, ProbaMourirDegats: 0.2 },
    { nom: "Survivaliste", ProbaMourir: 0.1, ProbaDegats: 0.2, ProbaMourirDegats: 0.7 },
  ];
  
// Fonction pour générer un nom de survivant aléatoire
  function GenererNomSurvivant() {
    const prenoms = ["Mark", "John", "Lisa", "David", "Noe", "Trevor", "Marine", "Boris", "Jeanne", "Suzanne","Jack", "Christophe", "Alexandre","Noémie","Julie","Nolan","Zoe"];
    return prenoms[Math.floor(Math.random() * prenoms.length)]; // Même méthode utilisée dans le programme taxi (voir taxi.js pour explication)
  }
  
// Fonction pour sélectionner une caractéristique de survivant aléatoire
  function CaracteristiqueSurvivant() {
    return caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
  }
  
// Tableau pour stocker les survivants vivants ou non
  const survivantsVivants = [];
  const survivantsMorts = [];
  
// Création de 5 survivants avec des caractéristiques aléatoires
  for (let i = 0; i < 5; i++) {
    const nom = GenererNomSurvivant();               // Attribut un nom de survivant aléatoire
    const caracteristique = CaracteristiqueSurvivant(); // Attribut une caractéristique aléatoire
    survivantsVivants.push({ nom, caracteristique }); // Ajoute le survivant à la liste des survivants vivants
  }
  
// Fonction attaque de Jason
  function attaquerSurvivant(caracteristique) {

    const random = Math.random();
  
    if (random < caracteristique.ProbaMourir) {
      return "mort";
    } else if (random < caracteristique.ProbaDegats) {
      return "esquive et inflige 10 points de dégâts";
    } else if (random < caracteristique.ProbaMourirDegats) {
      return "inflige 15 points de dégâts mais meurt";
  
    }
  }
  
// Boucle while du jeu jusqu'à la victoire ou la défaite
  while (tueur.PV > 0 && survivantsMorts.length < 5) {
    const survivantAleatoire = survivantsVivants[Math.floor(Math.random() * survivantsVivants.length)];
    const action = attaquerSurvivant(survivantAleatoire.caracteristique);
  
    if (action === "mort") {
      console.log(tueur.nom + " a tué " + survivantAleatoire.nom);
      survivantsMorts.push(survivantAleatoire); // On ajoute le survivant tué à la liste des morts
    } else if (action === "esquive et inflige 10 points de dégâts") {
      tueur.PV -= 10;
      console.log(survivantAleatoire.nom + " esquive et et inflige 10 points de dégâts à " + tueur.nom);
    } else if (action === "inflige 15 points de dégâts mais meurt") {
      tueur.PV -= 15;
      console.log(survivantAleatoire.nom + " inflige 15 points de dégâts à " + tueur.nom + " mais n'a pas survécu");
      survivantsMorts.push(survivantAleatoire);
    }
  }
  
// Affichage des résultats
  if (tueur.PV >= 0) {
    console.log(tueur.nom + " a fait un massacre, tout le monde est mort");
  } else {
    console.log("Les survivants ont gagné, mais RIP à " + survivantsMorts);
  }
// J'ai essayé de faire avec les commandes qu'on avait apprises mais il me manque des choses, le code ne renvoit pas vraiment tout correctement :/ J'espère que vous pourrez m'éclairer merci !
  