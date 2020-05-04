import test from 'ava';
import {} from "./flight";

test.beforeEach(async () => {

});

test.afterEach(async () => {

});

test('flight', t => {
  var result = solution(1, "");
  t.is(result, 2, "Returns proper result");

  var result = solution(2, "1A 2F 1C");
  t.is(result, 2, "Returns proper result");

});