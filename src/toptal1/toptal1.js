var getStrCompacted = function (str) {
  var result = "";  
  var prevChar;
  var nr = 1;

  for (var i=0;i<str.length; i++) {
    var char = str[i];

    if (!prevChar) {
      prevChar = char;
      continue; 
    }

    // reset nr & save char and number
    if (char != prevChar) {
      if (nr == 1) result += prevChar;
      else result += nr + prevChar;

      nr = 1;
    } else {
      nr ++;
    }

    // if last
    if (i == str.length - 1) {
      if (nr == 1) result += prevChar;
      else result += nr + prevChar;
    }


    prevChar = char;
  }



  return result;
}

function solution(str, k) {
  var map = {};
  var sequences = [];
  var result = "";  
  var prevChar;
  var nr = 1;

  for (var i=0;i<str.length; i++) {
    var char = str[i];

    if (!prevChar) {
      prevChar = char;
      continue; 
    }

    if (char == prevChar) nr ++;
    else {
      sequences.push({
        char: prevChar,
        nr: nr
      });

      nr = 1;
    }

    // if last
    if (i == str.length - 1) {
      sequences.push({
        char: prevChar,
        nr: nr
      });
    }
    

    prevChar = char;
  }

  // secvente care se repeta despartite de k sau mai putin litere 
  var duplicates = sequences.filter(seq => );

  return sequences;





    // numere single consecutive

}


var result = solution("ABBBCCDDCCC", 3);
console.log(JSON.stringify(result));