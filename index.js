function BatchQueue(limit, callback) {
  this.limit = limit;
  this.callback = callback;
  this.array = new Array();


  Object.defineProperty(this,"length", {
    get: function() { return this.array.length }
  });

};

BatchQueue.prototype.push = function(value) {
  this.array.push(value);
}



module.exports = BatchQueue;



