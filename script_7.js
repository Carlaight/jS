console.log("~~~~Bibliothécaire~~~~")
console.log("===================================================");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

for(let i = 0; i < books.length; i++)

{
  if (books[i].rented > 1)
    console.log(books[i].title + " a été emprunté " + books[i].rented + " fois");
}

console.log("===================================================");

console.log("Quel est livre le plus emprunté ?");



console.log("===================================================");

console.log("Quel est le livre le moins emprunté ?");



console.log("===================================================");

console.log("Trouve le livre avec l'ID: 873495");

let book873495 = books.findIndex(i => i.id === 873495);

console.log(books[book873495].title);

console.log("===================================================");

console.log("Supprime le livre avec l'ID: 133712");

let books_clone = books;






console.log("===================================================");

console.log("Trie les livres par ordre alphabétique");

books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})

console.log(books); 

console.log("===================================================");

