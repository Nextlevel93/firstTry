function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }
    return result
}
function mult() {
    var result = 1;
    for (var i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }
    return result
}
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}


console.log(applyAll(sum, 3, 4, 2, 3, 4, 2, 4))