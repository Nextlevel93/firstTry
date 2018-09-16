/*//Задание 1.
var firstNum = '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000';
var secondNum = '7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
//if (typeof firstNum === 'string' && typeof secondNum === 'string') {
var maxLength = 358; //длина символов 358
console.log(firstNum.length);
var numOfSeparete = Math.floor(firstNum.length / 358);
console.log(numOfSeparete);
console.log(firstNum.substring((firstNum.lenght - maxLength * i), maxLength * numOfSeparete));
for (numOfSeparete; numOfSeparete * maxLength > 0; --numOfSeparete) {
    console.log(numOfSeparete);
    var i = 1;
    i++;
    console.log(firstNum.substring((firstNum.lenght - maxLength * i), maxLength * numOfSeparete));
    console.log(firstNum.length);
}*/


//Задание 2.

/*
function validatePasward(variable) {
    if (variable.length < 6 || variable.length > 20) {
        alert('Invalid');
    }
    else {
        for (index = 0; index < variable.length; index++) {
            console.log(typeof (isFinite(variable[index])));
            typeof (variable[+index]) == 'number'
                ? console.log('good')
                : console.log('bad');
        }
    }
    /* else if(typeof variable!=='string'&& typeof variable!=='number'){
          alert('Invalid');*/
    /* else {
   alert('Valid');
        }
    return variable
}

validatePasward(prompt("Enter password"));

*/

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