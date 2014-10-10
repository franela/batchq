function BatchQueue(limit, callback) {
  this.limit = limit;
  this.callback = callback;
  this.array = new Array();

  Object.defineProperty(this,"length", {
    get: function() { return this.array.length }
  });

};

BatchQueue.prototype.push = function() {
  this.array.push.apply(this.array, arguments);

  if(this.array.length >= this.limit) {
    this.callback();
  }
}

module.exports = BatchQueue;



