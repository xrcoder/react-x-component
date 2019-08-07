export function getFuncName(func) {
    return func.toString().match(/function ([^\(]+)/)[1];
}
