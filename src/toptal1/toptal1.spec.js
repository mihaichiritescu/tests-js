QUnit.module('toptal1', {
  setup: function() {
    this.sandbox = sinon.sandbox.create();
  },
  teardown: function() {
    delete this.sandbox;
  }
});

QUnit.test("toptal1", function (assert) {
  assert.equal(true, true, "true is true");
});