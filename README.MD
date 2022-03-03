<h3>Encoder decoder</h3>

```JavaScript
const instance = require('./src/index');

console.log(instance.cryptic.encoder('test')); // dGVzdA==

console.log(instance.cryptic.decoder("dGVzdA==")); // test
```

<h3>Request example</h3>

```JavaScript
const instance = require('./src/index');

instance.request.sendRequest('https://google.com','',"","GET")
.then(data=>{
    console.log(data);
})
```