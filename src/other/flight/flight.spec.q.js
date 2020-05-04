QUnit.module('flight', {
  setup: function() {
    this.sandbox = sinon.sandbox.create();
  },
  teardown: function() {
    delete this.sandbox;
  }
});

QUnit.test("flight", function (assert) {
  /*(var updateBalanceStub = this.sandbox.stub(BANK, 'updateBalance').callsFake(function(currency, amount, uid, props){
    return true;
  });*/
  
  var result = solution(1, "");
  assert.equal(result, 2, "Returns proper result");

  var result = solution(2, "1A 2F 1C");
  assert.equal(result, 2, "Returns proper result");

});