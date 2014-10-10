var BatchQueue = require('../index');
var assert = require('assert');

describe('BatchQueue', function() {
  describe('#push', function() {
    it('Should work', function(){
      var bqueue = new BatchQueue();
      bqueue.push('element');
      assert.equal(bqueue.length, 1);
    });
    it('Should work with multiple arguments', function() {
      var bqueue = new BatchQueue();
      bqueue.push('element1', 'element2');
      assert.equal(bqueue.length, 2);
    });
  });
});
