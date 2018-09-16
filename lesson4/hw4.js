//Задание 1.
var firstPrice = 100;
var discont = '31%';
var trueDiscont = parseFloat(discont);
if (typeof firstPrice !== 'number' || typeof trueDiscont !== 'number') {
    console.log('Wrong value');
}
else {
    if (trueDiscont >= 0 && trueDiscont < 100) { //Првоерка на размер скидки(не может быть >100 и <0)
        var lastPrice = (Math.round((firstPrice * 100) * (1 - (trueDiscont * 10) / 1000)) / 100);
        (trueDiscont === 0)
            ? console.log("Ukrainian apples price - " + firstPrice.toFixed(2) + ' uah')
            : console.log('Ukrainian apples price (with ' + trueDiscont.toFixed(2) + '%  discount) is ' + lastPrice + ' uah')
    }
    else {
        console.log('Wrong value');
    }
}


//Задание 2

var string = "Abrvadffgh";
if (string.length < 10) {
    for (var index = 0; index < string.length; index++) {
          (console.log(string[index])); 
        }
    }
else {
    console.log(string.substring(0, 7));
    console.log(string.substring(9));
    }



