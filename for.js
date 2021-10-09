//Nechte uzivatele zadat 2 cisla, ktere znaci dolni a horni mez na ciselne ose celych cisel - vcetne, pokud tedy zada 3 a 7, uvazujme cisla 3, 4, 5, 6, 7. Vypište pomocí FOR cyklu pouze sudá čísla.

let cislo1 = Number(prompt('Zadej první:'));
let cislo2 = Number(prompt('Zadej druhé:'));

for (let i = cislo1; i <= cislo2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
