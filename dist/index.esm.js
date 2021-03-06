function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
function isNull(payload) {
    return getType(payload) === 'Null';
}
function isObject(payload) {
    return getType(payload) === 'Object';
}
function isFunction(payload) {
    return getType(payload) === 'Function';
}
function isArray(payload) {
    return getType(payload) === 'Array';
}
function isString(payload) {
    return getType(payload) === 'String';
}
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}

export { getType, isUndefined, isNull, isObject, isFunction, isArray, isString, isNumber, isBoolean, isRegExp, isDate };
