function checkObj(obj) {
    if (!obj) {
        return false;
    }
    return Object.keys(obj).length > 0 ? true : false 
}

module.exports = {checkObj};