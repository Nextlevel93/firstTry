/*//������� 1.
var firstNum = '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000';
var secondNum = '7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
//if (typeof firstNum === 'string' && typeof secondNum === 'string') {
var maxLength = 358; //����� �������� 358
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


//������� 2.

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

//������� 3.

function checkNumber(num) {
    var simple, pair, ten;
    (num % 2 == 1)
        ? pair = false
        : pair = true,




        result = [simple, pair, ten]
    console.log(result)
}
checkNumber(prompt('Enter number'))