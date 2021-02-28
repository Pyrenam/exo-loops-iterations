/*Ecrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2: L'affichage attendu:*/

//do while
let counter = 101
do {
  console.log(counter)
  counter -= 2
} while (counter > 0) 

//for
for (let counter = 101; counter > 0; counter -= 2) {
  console.log(counter)
}

//while
let counter = 101
while (counter > 0) {
  console.log(counter)
  counter -= 2
}

