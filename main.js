function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų
//masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

const masyvas = [];

for (let i = 0; i < 10; i++) {
  masyvas[i] = [];
  for (let x = 0; x < 5; x++) {
    // masyvas[i].push(rand(5, 25));
    masyvas[i][x] = rand(5, 25);
  }
}

console.log(masyvas);

// 1 A

let counter = 0;

masyvas.filter((value) => {
  const filtered = value.filter((digit) => digit > 10);
  counter += filtered.length;
});

counter = 0;

for (const child of masyvas) {
  for (const value of child) {
    if (value > 10) counter++;
  }
}

console.log("Reikšmių didesnių nei dešimt yra: ", counter);

// 1 B

let max = 0;

for (const child of masyvas) {
  for (const value of child) {
    if (value > max) max = value;
  }
}

console.log("Didžiausia reikšmė elementuose yra:", max);

// 1 C

const masyvas1 = [];

for (let i = 0; i < 10; i++) {
  masyvas1[i] = [];
  for (let x = 0; x < 7; x++) {
    // masyvas1[i].push(rand(5, 25));
    masyvas1[i][x] = rand(5, 25);
  }
}

console.log("Masyvai prailginti iki 7 elementu : ", masyvas1);

// 1 D

let sumArr = [];
for (let i = 0; i < 7; i++) {
  let sum = 0;
  for (let x = 0; x < 10; x++) {
    if (x === x) {
      sum += masyvas1[x][i];
    }
  }
  sumArr.push(sum);
}
console.log("Masyvas su elementu sumom : ", sumArr);

// 2

const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abc = a.split("");
console.log(abc);
const ltrArray = [];

for (let i = 0; i < 10; i++) {
  ltrArray[i] = [];
  ltrArray[i].length = rand(2, 20);
  for (let q = 0; q < ltrArray[i].length; q++) {
    ltrArray[i][q] = abc[rand(0, 25)];
  }
  ltrArray[i].sort(); //3 uzduotis
  ltrArray.sort((a, b) => a.length - b.length); // - rusioja masyva didejancia tvarka;
}
console.log(ltrArray);

// 3

const k = ltrArray.filter((v) => v.includes("K"));

const nk = ltrArray.filter((v) => !v.includes("K"));

const arrayK = [...k, ...nk];

console.log(" su K raidė: ", arrayK);
