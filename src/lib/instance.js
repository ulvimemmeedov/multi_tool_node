const cryptic = require('./coder');
const request = require('./request');
const instance = {};

Object.defineProperty(instance, "request", {
    value: request,
    enumerable: false,
    configurable: false,
    writable: false,
});
Object.defineProperty(instance, "cryptic", {
    value: cryptic,
    enumerable: false,
    configurable: false,
    writable: false,
});



module.exports = instance;