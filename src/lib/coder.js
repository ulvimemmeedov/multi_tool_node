var cryptic = {};
function encoder(params) {
    return btoa(params);
}
function decoder (hash){
    return atob(hash);
};

Object.defineProperty(cryptic, "encoder", {
    value: encoder,
    enumerable: false,
    configurable: false,
    writable: false,
});
Object.defineProperty(cryptic, "decoder", {
    value: decoder,
    enumerable: false,
    configurable: false,
    writable: false,
});

module.exports =cryptic;