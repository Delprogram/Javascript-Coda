// ===============================
// Partie 1 – Génération des élèves
// ===============================

// Définition de la taille minimale et maximale de la classe
let taille_minimum = 7;
let taille_maximum = 10;

// Génération aléatoire du nombre d'élèves dans la classe
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Tableau qui contiendra les étudiants
let students = [];

// Note maximale possible pour une matière
let note_maximum = 20;

// Liste de prénoms possibles
let names = ["Fidel", "Tev", "Johan", "Del", "Enzo", "Romain", "Will", "Con", "Dilan", "Pierre"];

// Boucle pour créer chaque étudiant avec des notes aléatoires
for (let i = 0; i < taille; i++) {
    let indice_random = Math.floor(Math.random() * (names.length));
    students.push({
        firstName : names[indice_random],
        noteMath : Math.floor(Math.random() * (note_maximum + 1)),
        noteFrancais : Math.floor(Math.random() * (note_maximum + 1)),
        noteHistoire : Math.floor(Math.random() * (note_maximum + 1)),
    });
}

// Calcul de la moyenne de chaque étudiant et ajout de la propriété moyenne
for (let stud of students) {
    let moyenne = (stud.noteMath + stud.noteFrancais + stud.noteHistoire) / 3;
    stud.moyenne = Number(moyenne.toFixed(2));
}

// ===============================
// Partie 2 – Étude des valeurs
// ===============================

// Affichage du nombre total d'élèves
console.log("Nombre d'élèves :", students);
console.log("Nombre d'élèves :", students.length);

// Initialisation des valeurs min et max avec la moyenne du premier étudiant
let min_moyenne = students[0].moyenne;
let max_moyenne = students[0].moyenne;

// Parcours du tableau pour trouver la moyenne minimale et maximale
for (let i = 1; i < students.length; i++) {
    if (max_moyenne < students[i].moyenne) 
        max_moyenne = students[i].moyenne;
    if (min_moyenne > students[i].moyenne) 
        min_moyenne = students[i].moyenne;
}

// Affichage des moyennes extrêmes
console.log("Moyenne maximum :", max_moyenne);
console.log("Moyenne minimum :", min_moyenne);

// ===============================
// Partie 3 – Première étape du tri
// ===============================

// Recherche de l'étudiant ayant la plus petite moyenne
for (let i = 0; i < students.length; i++) {
    if (students[i].moyenne === min_moyenne) {

        // Affichage de l'élève ayant la moyenne minimale
        console.log("L'élève ayant la plus petite moyenne", min_moyenne, 'est :', students[i].firstName);
        console.log("Indice de", min_moyenne, 'est :', i);

        // ===============================
        // Partie 4 – Échange de valeurs
        // ===============================

        // Échange des moyennes entre l'élève trouvé et le premier élève du tableau
        let tmp = students[i];
        students[i] = students[0];
        students[0] = tmp;
    }
}

console.log("=== Afficher le tableau après échange avec prénom et sa moyenne ===");
for (let stud of students) {
    console.log(stud.firstName, '-', stud.moyenne);
}

// ===============================
// Copie du tableau avant le tri
// ===============================

// Tableau de stockage indépendant pour conserver l’état avant tri
let students_stockage = [];

// Copie manuelle des propriétés de chaque étudiant
for (let i = 0; i < taille; i++) {
    students_stockage.push({
        firstName : students[i].firstName,
        noteMath : students[i].noteMath,
        noteFrancais : students[i].noteFrancais,
        noteHistoire : students[i].noteHistoire,
        moyenne : students[i].moyenne,
    });
}

// Affichage du tableau avant le tri
console.log("=== Affichage du tableau avant tri avec prénom et moyenne ===");
for (let stud of students_stockage) {
    console.log(stud.firstName, '-', stud.moyenne);
}

// ===============================
// Partie 5 – Tri par sélection complet
// ===============================

// Compteurs du nombre d’échanges et de comparaisons
let nb_exchange = 0;
let nb_verify = 0;

// Algorithme de tri par sélection basé sur la moyenne
for (let j = 0; j < students.length - 1; j++) {
    for (let i = j + 1; i < students.length; i++) {
        nb_verify++;
        if (students[j].moyenne > students[i].moyenne) {

            // Échange des moyennes
            let tmp = students[j];
            students[j] = students[i];
            students[i] = tmp;

            nb_exchange++;
        }   
    }
}

// ===============================
// Partie 6 – Affichage du résultat
// ===============================

// Affichage du tableau trié par moyenne croissante
console.log("=== Tri par ordre croissant en fonction des moyennes ===");
for (let stud of students) {
    console.log(stud.firstName, '-', stud.moyenne);
}

// Affichage des statistiques du tri
console.log("Nombre d’échanges :", nb_exchange);
console.log("Nombre de comparaisons :", nb_verify);

// ===============================
// Bonus – Tri par note de Math
// ===============================

// Compteurs pour le tri par note de mathématiques
let nb_exchange_n = 0;
let nb_verify_n = 0;

console.log("=== Tri par ordre croissant en fonction de la note en Math ===");

// Tri par sélection basé sur la note de mathématiques
for (let j = 0; j < students.length - 1; j++) {
    for (let i = j + 1; i < students.length; i++) {
        nb_verify_n++;
        if (students[j].noteMath > students[i].noteMath) {
            // Échange des notes de math
            let tmp = students[j];
            students[j] = students[i];
            students[i] = tmp;
            nb_exchange_n++;
        }   
    }
}

// Affichage final avec moyenne et note de math
for (let stud of students) {
    console.log(stud.firstName, '- moyenne : ', stud.moyenne, '- note en Math :', stud.noteMath);
}

// Affichage des statistiques du tri bonus
console.log("Nombre d’échanges :", nb_exchange_n);
console.log("Nombre de comparaisons :", nb_verify_n);
