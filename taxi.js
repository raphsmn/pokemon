// Création du personnage
const personnage = {
    Prenom: "Raphaël",
    SanteMentale: 10,
  };
// Création des musiques dont Anissa
  const musiques = [
    "UMLA - Alpha Wann",
    "Cassius - Baby Neelou",
    "Cléopâtre - Mairo",
    "God is - Kanye West",
    "Anissa - Wejdene",
  ];
// Création du trajet
  const trajet = {
    FeuxRouges: 30,
    changements: 0, // Initialisation donc 0 pour l'instant
  };
  
// Choisir une musique aléatoire
  function choisirMusique() {
    return musiques[Math.floor(Math.random() * musiques.length)]; // Math.random génère un nombre en 0 et 1 (inclus) qui est multiplié par la longueur du tableau "musiques" (5). Puis Math.floor est utilisée pour arrondir ce nombre à l'entier inférieur le plus proche, ce qui donne un index aléatoire pour sélectionner une musique  
  }
  
// Création boucle while pour simuler le trajet
  while (trajet.FeuxRouges > 0) {
    const musique = choisirMusique();
    console.log("Musique en cours : " + musique + ". Feux restants : " + trajet.FeuxRouges);  // Affiche la musique jouée et le nombre de feux rouges restants
  
    if (musique === "Anissa - Wejdene") { // Mise à jour des données en cas de lecture du son Anissa
      personnage.SanteMentale -= 1;
      trajet.changements += 1;
  
      if (personnage.SanteMentale === 0) {
        console.log("EXPLOSION !");
        break; // Sortie de la boucle car épuisement de la santé mentale
      }
    }
  
    trajet.FeuxRouges -= 1;
  }
// Affichage du bilan du trajet si il n'y a pas d'explosion   
  if (trajet.FeuxRouges === 0) {
    console.log("Arrivé à destination. Vous avez emprunté : " + trajet.changements + " taxis.");
  }