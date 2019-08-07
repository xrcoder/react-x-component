export function getFuncName(func) {
    if (typeof func !== 'function') {
        return false;
    }
    return func.toString().match(/function ([^\(]+)/)[1];
}
