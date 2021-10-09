// Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
// - prvočíslo - dělitelné pouze 1 a samo sebou​
//  zbytek po dělení: % - modulo​
// - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.

function jePrvocislo(cislo) {
  for (let i = 2; i < cislo; i++) {
    if (cislo % i === 0) {
      return false;
    }
  }

  return true;
}

let vstup = Number(prompt('Zadej číslo:'));

if (jePrvocislo(vstup)) {
  console.log('Ano, číslo ' + vstup + ' je prvočíslo.');
} else {
  console.log('Ne, číslo ' + vstup + ' není provočíslo.');
}
