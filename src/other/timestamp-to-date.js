const MILLISECONDS = 1;
const SECOND = 1000 * MILLISECONDS;
const MINUTE = 60 * SECOND * MILLISECONDS;
const HOUR = 60 * MINUTE * SECOND * MILLISECONDS;
const DAY = 24 * HOUR * MINUTE * SECOND * MILLISECONDS;
const WEEK = 7 * DAY * HOUR * MINUTE * SECOND * MILLISECONDS;;
const MONTH = 4 * WEEK * DAY * HOUR * MINUTE * SECOND * MILLISECONDS;
const YEAR = 12 * MONTH * WEEK * DAY * HOUR * MINUTE * SECOND * MILLISECONDS;

const TIME_TO_STRING = {
  MILLISECONDS: "millisecond",
  SECOND: "second",
  MINUTE: "minute",
  HOUR: "hour",
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
  YEAR: "year"
};

const TIME_TO_VALUE = {
  YEAR: YEAR,
  MONTH: MONTH,
  WEEK: WEEK,
  DAY: DAY,
  HOUR: HOUR,
  MINUTE: MINUTE,
  SECOND: SECOND,
  MILLISECONDS: MILLISECONDS
};

//const ORDER = ["MILLISECONDS", "SECOND", "MINUTE", "HOUR", "DAY", "YEAR", "MONTH"];

let timestampToDate = (timestamp) => {
  console.log(Object.keys(TIME_TO_VALUE));
  let result = [];
  let timeNames = Object.keys(TIME_TO_VALUE);
  for (let i=0; i<timeNames.length; i++) {
    let timeName = timeNames[i];
    let timeValue = TIME_TO_VALUE[timeName];
    let modulus = timestamp % timeValue;
    let division = Math.floor(timestamp / timeValue);

    if (division < 1) {
      continue;
    }
    else if (division >= 1) {
      let str = division + " " + TIME_TO_STRING[timeName] + (division > 1 ? "s" : "");
      result.push(str);
    } else if (modulus == 0) {
      let str = division + " " + TIME_TO_STRING[timeName] + (modu > 1 ? "s" : "");
      result.push(str);
      break;
    }

    timestamp = timestamp%timeValue;
  }

  return result;
};

//let res = timestampToDate(100);
//console.log("expected: 100 milliseconds : " + res);


//console.log("expected: 1 second : " + timestampToDate(1000));
//console.log("expected: 1 second, 1 millisecond : " + timestampToDate(1001));
console.log("expected: 1 second, 1 millisecond : " + timestampToDate(666666));