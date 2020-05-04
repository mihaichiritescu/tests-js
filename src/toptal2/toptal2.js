let computeDistance = function (point, otherPoint) {
  let dist;
  if (point.x == otherPoint.x) {
    // check horizontally
    dist = Math.abs(point.y - otherPoint.y);
  } else if (point.y == otherPoint.y) {
    // check vertically
    dist = Math.abs(point.x - otherPoint.x);
  } else {
    // diagonal
    dist = Math.sqrt( Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2) );
  }

  return dist;
};

function solution(tags, arrayX, arrayY) {
  var points = [];
  for (var i=0; i<tags.length; i++) {
    var point = {
      x: arrayX[i],
      y: arrayY[i],
      tag: tags[i],
      distance: computeDistance({x: 0, y: 0}, {x: arrayX[i], y: arrayY[i]})
    };

    points.push(point);
  }

  // sortez in functie de dist

  points.sort(function (a, b) {
    if (a.distance < b.distance) return -1;
    if (a.distance > b.distance) return 1;

    return 0;
  });

  var goodPoints = [];
  for (var i=0; i<points.length; i++) {
    var point = points[i];

    if (i==0) {
      goodPoints.push(point);
      continue;
    }

    var existingPoint = goodPoints.filter(p => p.tag == point.tag)[0];
    if (existingPoint) {
      // CHECK DISTANCE EQUAL
      if (existingPoint.distance == point.distance) {
        const index = goodPoints.indexOf(existingPoint);
        goodPoints.splice(index, 1);
      }

      break;
    }

    goodPoints.push(point);
  }

  
  console.log(JSON.stringify(points));
  return goodPoints.length;
}

//var result = solution("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3]);
//console.log(JSON.stringify(result));

var result = solution("ABB", [1, -2, -2], [1, -2, 2]);
console.log(JSON.stringify(result));