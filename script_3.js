console.log("~~~~Pyramide de Mario~~~~")
console.log("===================================================");
/* "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
##### */

function buildPyramid(nbfloors)
{
  nbfloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

  for (let i = 0; i < nbfloors; i++)
  {
    let string1 = " ".repeat(nbfloors-i);
    let string2 = "#".repeat(i);
    console.log(string1 + string2);
  }
}

console.log(buildPyramid())

// manque le dernier étage

console.log("===================================================");
