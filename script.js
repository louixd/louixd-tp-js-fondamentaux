console.log("Laboratoire prêt !");  
const nom = "Cuzin";
let age = 15;
//Uncaught SyntaxError: Identifier 'nom' has already been declared (at script.js:4:7)
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345"; // Changez cette valeur pour tester
if ( motDePasseUtilisateur ===motDePasseAttendu  ) {
    console.log("Accès autorisé. Bienvenue !");
} else if ( motDePasseUtilisateur.length < 8 ) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Louis",
    nom: "Cuzin",
    age: 19,
    ville: "Paris",
    competences: ["HTML", "CSS"]
};

console.log(moi.prenom); // Affiche "VotrePrénom"
console.log ("je m'appelle " + moi.prenom  +" "+ moi.nom ); // Affiche "Je m'appelle Louis Cuzin"