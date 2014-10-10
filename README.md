BatchQ
======

Simple queue implementation which calls a callback every time the capacity is reached

## Example

```javascript

var BatchQueue = require('batchq');

var batchq = new BatchQueue(5, function() {
    console.log(this.splice(0,this.length)) //Will print [0,1,2,3,4]
});

batchq.push(0,1,2,3,4);
console.log(batchq.length); //Will be 1 as callback was executed
batchq.push(5);
batch.flush();  //Forces the callback to run as capacity hasn't been reached
```
