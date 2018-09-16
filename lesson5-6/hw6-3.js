// Задание 3
function checkNumber(num = 0) {
    var simple, pair, ten;
    if (num <= 1) {
        simple = false;
    }
    else if (num == 2) {
        simple = true
    }
    else {
        for (var index = 2; index < num; index++) {
            if (+num % index == 0) {
                simple = false;
                break;
            } else {
                simple = true
            }
        }
    }
    (num % 10 === 0 && num !== 0)
        ? ten = true
        : ten = false;
    (num % 2 === 0)
        ? pair = true
        : pair = false;
    console.log([simple, pair, ten])
}
checkNumber(prompt('Enter number'))