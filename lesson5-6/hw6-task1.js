
//Задание 3.

function checkNumber(num) {
    var simple, pair, ten;
    (num % 2 == 0)
        ? pair = true
        : pair = false;

    (num % 10 == 0 && num != 0)
        ? ten = true
        : ten = false;
    if (num <= 0) {
        simple = false;
    }
    for (var index = 0; index < num; index++) {
        for (var index2 = -1; index2 < index; index2++) {
            if (index % index2 == 0) {
                simple = false
                continue
            }
            else {
                simple = true
            }
        }

    }

    result = [simple, pair, ten]
    console.log(result)
}
checkNumber(prompt('Enter number'))