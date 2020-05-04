
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

distanceMin = (points) => {
  if (Array.isArray(points)) throw "Input data needs to be array";
  if (points.length < 2) throw "Array needs to have 2 elements";

  let min;
  let firstPoint;
  let secondPoint;

  for (let i=0; i<points.length; i++) {
    let point = points[i];    

    for (let j=i+1; j<points.length; j++) {
      let otherPoint = points[j];
       
      let dist = computeDistance(point, otherPoint);
      if (dist < min || min == undefined) {
        min = dist;
        firstPoint = point;
        secondPoint = otherPoint;
      }
    } 
  }

  return [firstPoint, secondPoint];
};


let points = [{x: 1, y:4}, {x: 4, y:4}, {x:3, y:2}, {x:5, y:1}];
let result = distanceMin(points);
console.log(JSON.stringify(result));