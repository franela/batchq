var BatchQueue = require('../index');
var assert = require('assert');

describe('BatchQueue', function() {
  describe('#push', function() {
    it('Should work', function() {
      var batchq = new BatchQueue();
      batchq.push('element');
      assert.equal(batchq.length, 1);
    });

    it('Should work with multiple arguments', function() {
      var batchq = new BatchQueue();
      batchq.push('element1', 'element2');
      assert.equal(batchq.length, 2);
    });

    it('Should call a callback when it grows over a predefined capacity', function(done) {
      var batchq = new BatchQueue(5, done);

      batchq.push(1, 2, 3, 4, 5);
    });
  });

  describe('#splice', function() {
    it('Should work', function() {
      var batchq = new BatchQueue(5, function() {
        var elements = this.splice(0, this.length);

        assert.deepEqual([1, 2, 3, 4, 5], elements);
      });
      batchq.push(1, 2, 3, 4, 5);
      assert.equal(batchq.length, 0);
    });
  });
});
