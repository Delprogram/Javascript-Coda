// Partie 1 : Informations générales

const CLASS = "B1-A";
let nb_student = 3;
let isopen = true;

// Affichage des informations de la classe
console.log("Nom de la classe : " + CLASS);
console.log("Nombre d'étudiant : " + nb_student);
console.log("Classe ouverte ? " + isopen);

// Partie 2 : Représenter un élève

// Création d'un objet représentant un étudiant
let student = {
    name : "Fidel",
    note_math : 19,
    note_francais : 14
};

// Affichage du prénom de l'étudiant
console.log("Prénom de l'élève : " + student.name);

// Partie 3 : Gérer plusieurs élèves

// Création d'autres objets étudiants
let student1 = {
    name : "Johan",
    note_math : 18,
    note_francais : 15
};

let student2 = {
    name : "Tev",
    note_math : 8,
    note_francais : 10
};

// Création d'un tableau contenant tous les étudiants
let students = [student, student1, student2];

// Mise à jour du nombre total d'étudiants
nb_student = students.length;

// Parcours du tableau pour afficher le prénom de chaque étudiant
for (let stud of students) {
    console.log("Prénom :", stud.name);
}

// Partie 4 : Calcul des moyennes

// Calcul de la moyenne de chaque étudiant et ajout de la clé average
for (let stud of students) {
    let average = (stud.note_math + stud.note_francais) / 2;
    stud.average = average;
    console.log("Moyenne de", stud.name, "est :", stud.average);
}

// Partie 5 : Résultat de l’élève

// Attribution de la décision selon la moyenne
for (let stud of students) {
    if (stud.average >= 10) {
        stud.decision = "admis";
        console.log(stud.name, "est", stud.decision);
    } else {
        stud.decision = "refusé";
        console.log(stud.name, "est", stud.decision);   
    }
}

// Partie 6 : Résultat de l’élève

// Parcours des étudiants pour afficher leur mention selon la moyenne
students.forEach(stud => {
    console.log(stud.name);
    console.log("Mention : ");
    if (stud.average >= 16) {
        console.log("Très bien");
    } else if (stud.average >= 14) {
        console.log("Bien");
    } else if (stud.average >= 12) {
        console.log("Assez Bien");
    } else if (stud.average >= 10) {
        console.log("Passable");
    } else {
        console.log("Insuffisant");
    }
});

// Partie 7 : Statistiques de la classe

// Initialisation de l'index et du compteur d'admis
let i = 0;
let nb_student_admis = 0;

while (i < nb_student) {
    if (students[i].decision === 'admis') {
        nb_student_admis++;
    }
    i++;
}

// Affichage du nombre d'admis et de refusés
console.log("Nombre d'élèves admis :", nb_student_admis);
console.log("Nombre d'élèves refusés :", nb_student - nb_student_admis);

// Calcul de la somme des moyennes
let som = 0;
students.forEach(stud => {
    som += stud.average;
});

// Bonus 

// Calcul de la moyenne générale de la classe
let average_class = som / nb_student;

// Affichage de la moyenne de la classe
console.log("Moyenne de la class", CLASS, 'est :', average_class);

// Ajout d'un nouvel étudiant dans le tableau
students.push({
    name : "Ayoub",
    note_math : 10,
    note_francais : 10
});

// Mise à jour du nombre d'étudiants
nb_student = students.length;

// Récupération du dernier étudiant ajouté
let student_add = students[nb_student - 1];

// Calcul et ajout de sa moyenne
let average = (student_add.note_math + student_add.note_francais) / 2;
student_add.average = average;

// Attribution de la décision pour le nouvel étudiant
if (student_add.average >= 10) {
    student_add.decision = "admis";
} else {
    student_add.decision = "refusé";
}

// Affichage du nombre total d'étudiants
console.log("Nombre d'élèves :", nb_student);

// Message de félicitations si tous les étudiants sont admis
if (nb_student === nb_student_admis) {
    console.log("FELICITATION!");
}
