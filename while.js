let heslo = prompt('Zadej heslo:');

while (heslo !== '12345') {
  heslo = prompt('Zadej heslo:');
}

document.write('administrace');


///
let cislo = Number(prompt("Zadej:"));
let soucet = 0;
while (cislo !== 0) {
   soucet += cislo;
   cislo = Number(prompt("Zadej:"));
   console.log("Naakumulovany soucet:" + soucet);
}


///
let cislo1 = Number(prompt('Zadej první:'));
let cislo2 = Number(prompt('Zadej druhé:'));

for (let i = cislo1; i <= cislo2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}