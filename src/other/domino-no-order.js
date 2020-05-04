let dominoNoOrder = (input) => {
  let pieces = input.split(",");
  let piecesMap = {};
  let max = 0;

  pieces.forEach(element => {
    piecesMap[element] = pieces.filter(elem => { return elem != element && element[element.length - 1] == elem[0]; });
  });

  pieces.forEach(element => {
    let goodPieces = piecesMap[element];
    let mymax = 1;
    let myPieces = [element];
    while (goodPieces && goodPieces.length > 0 && goodPieces.filter(item => { return myPieces.indexOf(item) == -1; }).length > 0) {

      let goodPiece = goodPieces.filter(item => { return myPieces.indexOf(item) == -1; })[0];
      if (goodPiece) { 
        mymax++;
        myPieces.push(goodPiece);
        goodPieces = piecesMap[goodPiece]; 
      }
      else break;
    }

    max = Math.max(max, mymax);
  });

  console.log(max);
};

dominoNoOrder("7-8,1-3,3-5,5-2,2-3,3-4,4-1,1-3");