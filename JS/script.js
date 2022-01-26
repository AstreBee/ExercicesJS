//Exercice 1

var monTexte = "Notre formation DL commence aujourd'hui"
var count = monTexte.length
console.log(monTexte + " " + "contient" + " " + count + " " + "caractères")


//Exercice 2

var wordCount = monTexte.split(" ").length
console.log(monTexte + " " + "contient" + " " + wordCount + " " + "mots")


//Exercice 3

var monNouveauTexte = monTexte.replace("aujourd'hui", "demain")
console.log(monTexte + "\n" + monNouveauTexte)


//Exercice 4 

var francs = 100
var tauxConversion = 6.55957
var euros = (francs / tauxConversion).toFixed(2)
console.log("Montant en francs :" + " " + francs + "\n" + francs + " " + "francs =" + " " + euros + "€");


//Exercice 5

var prixUnitaire = 9.99
var quantite = 5 
var tva = 0.2 
var prixHT = prixUnitaire * quantite
var prixTVA = prixHT * tva
var prixTTC = prixHT + prixTVA
console.log("prix unitaire de l'article:" + " " + prixUnitaire + " " + "€" + "\n" + "Quantité : 5 taux de TVA:" + " " + tva + " " + "\n" + "Le montant de la facture à régler est de:" + prixTTC.toFixed(2) + " " + "€")


//Exercice 6 

var age = 12 
var response = ""

if(typeof age == "number"){
    if(age >= 12){
        response = "Cadet"
    } else if(age > 9 && age < 12 ) {
        response = "Minime"
    } else if (age > 7 && age < 10) {
        response = "Pupille"
    } else if (age > 5 && age < 8) {
        response = "Poussin"
    } else { 
        response = "Âge non géré"
    }
} else { 
    response = "La valeur n'est pas numérique"
}
console.log("l'enfant qui a" + " " + age + " " + "ans appartient à la catégorie" + " " + "«" + " " + response + " " + "»")


//Exercice 7 

var age = 32
var clientSexe = "F"
var response = ""
if((clientSexe == "F" && age <= 35 && age >= 18) | ( clientSexe == "H" && age> 20 )){ 
    response = "impossable"
} else {
    response = "non imposable"
}
console.log("Âge :" + " " + age + " " + "Sexe :" + " " + clientSexe + " " + "La personne est" + " " + response)


//Exercice 8

//A partir de ce tableau, faites en sorte de créer une adresse mail pour chaque salarié
//employes = ["Stephane SMAIL", "Virgile GIBELLO", "Mickael MURMANN"]
//- 2 premières lettres du prénom
//- puis un "point"
//- puis le nom de famille en entier
//- enfin "@elan.fr"
//- le tout en minuscule
//Tous les mails seront stockés dans un tableau





//1 Personne

let salarie = "Stephane SMAIL"
salarie = salarie.toLowerCase()                   //stephane smail
let tableau = salarie.split (" ")                 // ["stephane", "smail"] 
let mail = tableau[0].substring(0, 2) + "." + tableau[1] + "@elan.fr"
console.log(mail)


//tableau
let salarie = ["Stephane SMAIL", "Virgile GIBELLO", "Mickael MURMANN"]
let salarie = "Stephane Smail" 
salarie = salarie.toLowerCase()                   //stephane smail
let tableau = salarie.split (" ")                 // ["stephane", "smail"] 
let mail = tableau[0].substring(0, 2) + "." + tableau[1] + "@elan.fr"
console.log(mail)

