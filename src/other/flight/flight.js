solution = (rows, reserved) => {
  console.log("solution flight");

  let letterToIndexMap = {
    A: 0, 
    B: 1, 
    C: 2, 
    D: 3,
    E: 4,
    F: 5, 
    G: 6, 
    H: 7, 
    J: 8, 
    K: 9
  };

  // init matrix
  let matrix = [];
  for (let i=0; i<rows; i++) {
    matrix[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  // set reserved seats
  let reservedArray = reserved.split(" ").filter(item => item != "");
  reservedArray.forEach((element) => {
    let letters = element.split("");
    let line = letters[0] - 1;
    let column = letterToIndexMap[letters[1]];

    matrix[line][column] = 1;
  });

  // check each line
  let max = 0
  matrix.forEach((line, index) => {
    if (line.slice(1, 9).filter(item => item == 0).length == 8) max += 2;
    else if (line.slice(3, 7).filter(item => item == 0).length == 4) max += 1;
    else if (line.slice(1, 5).filter(item => item == 0).length == 4) max += 1;
    else if (line.slice(5, 9).filter(item => item == 0).length == 4) max += 1;
  })

  return max;
};

let result = solution(10, "1A 2F 1C");
console.log(result);


// 