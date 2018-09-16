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
/**
 * let a="324234324324"
let b= '32432'
var a1 = a.split('')
var b1 = b.split('')
var g=[],indexA,indexB,indexG,i=0;
a1[indexA]=a1.pop();
b1[indexB]=b1.pop();
g[indexG]=+a1[indexA]+ +b1[indexB]
g.forEach(function(g)
          console.log('sad')
var gElement=(g.join(' '))

console.log(+a1[indexA]+ +b1[indexB],g[indexG])
 * /
 * 
 */

//Задание 2.

function validatePasward(variable) {
    var countL = 0, countN = 0;
    if (variable.length < 6 || variable.length > 20) {
        alert('Wrong password length');
        return variable;
    }
    for (var j = 0; j < variable.length; j++) {
        if (variable.charCodeAt(j) <= 57 && variable.charCodeAt(j) >= 48) {
            countN++;
        }
        else if ((variable.charCodeAt(j) >= 65 && variable.charCodeAt(j) <= 90 ||
            variable.charCodeAt(j) >= 97 && variable.charCodeAt(j) <= 122)) {
            countL++;
        }
    }
    countN === 0 || countL === 0 && countN + countL == variable.length
        ? alert('The password must contain both letters and numbers') :
        countN !== 0 && countL !== 0 && countN + countL == variable.length
            ? alert("Valid")
            : alert("The password must contain only letters and numbers")
}
validatePasward(prompt("Enter password"));

//Задание 3.

function checkNumber(num = 0) {
    var simple, pair, ten;
    (num % 10 === 0 && num !== 0)
        ? ten = true
        : ten = false;
    (num % 2 === 0)
        ? pair = true
        : pair = false;
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
            }
            else {
                simple = true
            }
        }
    }
    console.log([simple, pair, ten])
}
checkNumber(prompt('Enter number'))




