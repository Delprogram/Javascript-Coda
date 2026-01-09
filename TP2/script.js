//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

// Partie 1 : Etude des valeurs

console.log("Taille du tableau :", taille);
let min_note = notes[0];
let max_note = notes[0];

for (let i = 0; i < notes.length - 1; i++) {
    if (max_note < notes[i + 1]) 
        max_note = notes[i + 1];
    if (min_note > notes[i + 1]) 
        min_note = notes[i + 1];
}

console.log("Maximum :", max_note);
console.log("Minimum :", min_note);

console.log("Tableau :", notes);

// Partie 2 : Première étape du tri 
for (let i = 0; i < notes.length; i++) {
    if (notes[i] === min_note) {
        console.log("Indice de", min_note, 'est :', i);

// Partie 3 : Échange de valeurs
        notes[i] = notes[0];
        notes[0] = min_note;
    }
}

// Affichage du tableau avant tri
console.log("Tableau avant tri :", notes);

// Partie 4 : Tri par sélection complet

// Nombre de vérifications et d’échanges
console.log("=== Tri ordre croissant ===");

let nb_exchange = 0;
let nb_verify = 0;

for (let j = 0; j < notes.length - 1; j++) {
    for (let i = j + 1; i < notes.length; i++) {
        nb_verify ++;
        if (notes[j] > notes[i]) {
            let tmp = notes[j];
            notes[j] = notes[i];
            notes[i] = tmp;
            nb_exchange ++;
            console.log("Tableau :", notes);
        }   
    }
}

// Partie 5 : Affichage du résultat

// Affichage du tableau après tri
console.log("Tableau après tri :", notes);
console.log("Nombre d’échanges :", nb_exchange);
console.log("Nombre de vérifications :", nb_verify);

// Tri dans l'ordre décroissant
console.log("=== Tri ordre décroissant ===");

let nb_exchange1 = 0;
let nb_verify1 = 0;

for (let j = 0; j < notes.length - 1; j++) {
    for (let i = j + 1; i < notes.length; i++) {
        nb_verify1 ++;
        if (notes[j] < notes[i]) {
            let tmp = notes[j];
            notes[j] = notes[i];
            notes[i] = tmp;
            nb_exchange1 ++;
            console.log("Tableau :", notes);
        }   
    }
}

// Affichage du tableau après tri
console.log("Tableau après tri :", notes);
console.log("Nombre d’échanges :", nb_exchange1);
console.log("Nombre de vérifications :", nb_verify1);




///////////////////////////////////////////////////////////////////////////////