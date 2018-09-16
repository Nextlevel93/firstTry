// Задание 2
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

