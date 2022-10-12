let fruites = [
  "apple",
  "pear",
  "banana",
  "orange",
  "kiwi",
  "strawberry",
  "lemon",
  "lime",
];

let scores = [
  { game: 2, points: 12 },
  { game: 4, points: 45 },
  { game: 5, points: 29 },
  { game: 8, points: 38 },
  { game: 9, points: 12 },
  { game: 15, points: 23 },
  { game: 16, points: 68 },
  { game: 17, points: 17 },
  { game: 20, points: 10 },
  { game: 22, points: 23 },
];

//-----------Question Number 1 and 2-----------------------
console.log("Fruits which have the letter “e” in their names?",'\n');

var maxL = { len: 0, idx: 0 };
fruites.forEach((e, i) => {
  if (e.includes("e")) {
    console.log(e);
  }
  if (e.length > maxL.len) {
    maxL.len = e.length;
    maxL.idx = i;
  }
});
console.log('\n',"Longest name from “fruits”?",'\n',fruites[maxL.idx]);

//-----------Question Number 3 -----------------------
let total = scores.reduce((pValue, cvalue) => {
  return pValue + cvalue.points;
}, 0);


console.log('\n',"Sum total number of ‘points’ from all games in the “scores” variable",'\n',total);


//-----------Question Number 4 and 5-----------------------
let skipped = [];
let fillgames = [];

for (let i = 0; i < 25; i++) {
  let checker = scores.find((e, x) => e.game == i + 1);
  if (checker == undefined) {
    skipped.push(i + 1);
    fillgames.push({ game: i + 1, points: 0 });
  } else {
    fillgames.push(checker);
  }
}


console.log('\n',"List of Skipped games",'\n',skipped);
console.log('\n',"fill the missing games outof the 25 games and their scores",'\n',fillgames);

