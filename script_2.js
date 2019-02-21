//Un prompt s'affiche avec la question suivante
number = prompt("De quel nombre veut tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)

function calcFact(number) {
  
  let fact = 1;
  for (let i=1 ; i<=number ; i++)
    fact = fact * i;
  return fact
}

// Dans la console le résultat suivant est affiché "Le résultat est : 24"
console.log(calcFact(number))
