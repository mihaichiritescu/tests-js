let wordsVertices = (allVertices, finalWord) => {
  let letters = finalWord.split('');
  let wordVertices = [];
  for (var i=0; i<letters.length; i++) {
    if (i==letters.length-1) break;

    wordVertices.push([letters[i], letters[i+1]]);
  }

  console.log(JSON.stringify(wordVertices));

  let finalVertices = [];
  for (var i=0; i<wordVertices.length; i++) {
    let vertex = wordVertices[i];

    if (allVertices.filter(item => { return item[0] == vertex[0] && item[1] == vertex[1] }).length == 0) return false;
  }

  return true;
};

let res = wordsVertices([['P', 'E'], ['R', 'U'], ['E', 'R']], "PERU");
console.log(JSON.stringify(res));