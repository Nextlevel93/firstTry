var twentyFiveNum = 3, fiftyNum = 3, hundredNum = 3;
var twentyFive = 25, fifty = 50, hundred = 100;
function getMoney() {
    var getPrompt = prompt("Какая купюра для расчета за билет у вас есть?");
    if (getPrompt == twentyFive || getPrompt == fifty || getPrompt == hundred) {
        if (getPrompt == twentyFive) {
            return ++twentyFiveNum
        }
        else if (getPrompt == fifty) {
            return ++fiftyNum
        }
        else {
            return ++hundredNum
        }
    }
    else {
        return console.log('wrong value');
    }
}
console.log(getMoney());
console.log(twentyFiveNum,hundredNum,fiftyNum);