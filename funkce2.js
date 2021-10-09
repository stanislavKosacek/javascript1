// Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
// - prvočíslo - dělitelné pouze 1 a samo sebou​
//  zbytek po dělení: % - modulo​
// - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.

function jePrvocislo(cislo) {
  let jePrivocislo = true;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i === 0) {
      console.log('Číslo ' + cislo + ' je dělitelné: ' + i);
      jePrivocislo = false;
    }
  }

  return jePrivocislo;
}

let vstup = Number(prompt('Zadej číslo:'));

if (jePrvocislo(vstup)) {
  console.log('Ano, číslo ' + vstup + ' je prvočíslo.');
} else {
  console.log('Ne, číslo ' + vstup + ' není provočíslo.');
}
