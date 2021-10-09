let cislo = Number(prompt('Zadej:'));
let pole = [];
while (cislo != 0) {
  pole.push(cislo);
  cislo = Number(prompt('Zadej:'));
}
// 10, 5, 8, 24

let nejmensi = pole[0];
for (let i = 0; i < pole.length; i++) {
  if (nejmensi > pole[i]) {
    nejmensi = pole[i];
  }
}

console.log('Nejmenší zadané číslo je: ' + nejmensi);
