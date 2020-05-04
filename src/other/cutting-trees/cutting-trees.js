let cuttingTrees = (trees) => {
  if (trees.length < 2) return 0;

  let min1 = 0;
  let min2 = 0;

  // if first is bigger than second and we leave it this way
  for (let i = 0; i < trees.length; i++) {
    if (i == trees.length) break;

    if (i %2 == 0) {
      if (trees[i] <= trees[i+1]) {
        min1++;
      }
    } else {
      if (trees[i] >= trees[i+1]) {
        min1++;
      }
    }
  }

  // if first is bigger than second and we cut it
  for (let i = 0; i < trees.length; i++) {
    if (i == trees.length) break;

    if (i %2 == 0) {
      if (trees[i] >= trees[i+1]) {
        min2++;
      }
    } else {
      if (trees[i] <= trees[i+1]) {
        min2++;
      }
    }
  }


  return Math.min(min1, min2);
};


let res = cuttingTrees([5, 4, 3, 2, 6]);
console.log("exptected 1: " + res);

res = cuttingTrees([3, 7, 4, 5]);
console.log("exptected 0: " + res);

res = cuttingTrees([4, 5, 6, 7, 8, 9]);
console.log("exptected 2: " + res);