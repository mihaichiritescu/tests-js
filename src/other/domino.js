let domino = (input) => {
  let max = 1;
  let pieces = input.split(',');

  for (let i=0; i<pieces.length;i++) {
    if (i == pieces.length-1) break;

    let first = pieces[i];
    let second = pieces[i+1];
    if (first[first.length-1] == second[0]) max++;
    else max = 1;
  }

  return max;
};

console.log(domino("1-1,3-5,5-2,2-3,2-4"));