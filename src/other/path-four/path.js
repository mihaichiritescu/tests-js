let containsNode = (array, i, j) => {
  return array;
};

let getHighestNeighbors = (matrix, i, j, visited) => {
  let neighbors = [];

  if (i-1 >= 0) neighbors.push({
    value: matrix[i-1][j],
    i: i-1,
    j:j
  });

  if (i+1 <= matrix.length - 1) neighbors.push({
    value: matrix[i+1][j],
    i: i+1,
    j:j
  });

  if (j-1 >= 0) neighbors.push({
    value: matrix[i][j-1],
    i: i,
    j:j-1
  });

  if (j+1 <= matrix[0].length - 1) neighbors.push({
    value: matrix[i][j+1],
    i: i,
    j:j+1
  });

  neighbors = neighbors.filter(item => { return visited.filter(visit => { return visit.i == item.i && visit.j == item.j; }).length == 0; });
  neighbors = neighbors.sort((a, b) => { 
      return (a.value > b.value) ? -1 :
        (a.value < b.value) ? 1 : 0;
    }).filter(item => { return item.value == neighbors[0].value; });

  return neighbors;
};

let pathOfFour = (matrix) => {
  let max = 0;

  // sortez de la mare la mic 
  let allNodes = [];
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      allNodes.push({
        value: matrix[i][j],
        i: i,
        j: j
      });
    }
  }
  allNodes.sort((a, b) => { 
    return (a.value > b.value) ? -1 :
      (a.value < b.value) ? 1 : 0;
  });

  // folosim doar valoarea maxima
  let highNodes = allNodes;

  for (let i=0; i<highNodes.length; i++) {
    let node = highNodes[i];
    let first = matrix[node.i][node.j];
    let second;
    let third;
    let forth;
    let nodes = [node];

    // second 
    let neighbors1 = getHighestNeighbors(matrix, node.i, node.j, nodes);
    if (!neighbors1.length) continue;
    for (let j=0; j<neighbors1.length; j++) {
      second = neighbors1[j].value;
      nodes[1] = neighbors1[j];

      // third 
      let neighbors2 = getHighestNeighbors(matrix, neighbors1[j].i, neighbors1[j].j, nodes);
      if (!neighbors2.length) continue;
      for (let k=0; k<neighbors2.length; k++) {
        third = neighbors2[k].value;
        nodes[2] = neighbors2[k];
      
        // forth
        let neighbors3 = getHighestNeighbors(matrix, neighbors2[k].i, neighbors2[k].j, nodes);
        if (!neighbors3.length) continue;

        for (let l=0; l<neighbors3.length; l++) {
          forth = neighbors3[l].value;
          nodes[3] = neighbors3[l];
          
          let number = (first * 1000) + (second * 100) + (third * 10) + forth;
          max = Math.max(max, number);
        }
      }
    }

  }

  return max;
};

let matrix1 = [
  [9, 1, 1, 0, 7],
  [1, 0, 2, 1, 0],
  [1, 9, 1, 1, 0]
];
let result = pathOfFour(matrix1);
console.log(result);


let matrix2 = [
  [1, 1, 1],
  [1, 3, 4],
  [1, 4, 3]
];
result = pathOfFour(matrix2);
console.log(result);

let matrix3 = [
  [0, 1, 5, 0, 0]
];
let result3 = pathOfFour(matrix3);
console.log(result3);