alert("Сегодня мы будем готовить блинчики. Для одной порции нам понадобиться:\n-500 г молока\n-30 г сахара\n-200 г муки\n-30 г масла\n-2 г соли\n-3 яйца")
const pancakes = {
    milk: 500,
    eags: 3,
    flour: 300,
    butter: 30,
    salt: 3,
    sugar: 30
};
alert("Введите количество ингридиентов, которые у вас есть")
var products = {
    milk: prompt("Молока(мл)") || undefined,
    eags: prompt("Яйца(шт)") || undefined,
    flour: prompt("Мука(гр)") || undefined,
    butter: prompt("Масло(гр)") || undefined,
    salt: prompt("Соль(гр)") || undefined,
    sugar: prompt("Сахар(гр)") || undefined
};
var dose = {};
for (var key in pancakes) {
    dose[key] = products[key] / pancakes[key];
    dose[key] = Math.floor(dose[key]);
}
var arr = Object.values(dose);
var min = Math.min(...arr);
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
for (var key in products) {

    if (products.milk == undefined || products.eags == undefined || products.flour == undefined || products.butter == undefined || products.sugar == undefined || products.salt == undefined) {
        console.log("Вы заполнили не все поля")
        break;
    }
    else if (!isNumeric(products[key])) {
        console.log('Вводите только цифры');
        break;
    }
    else if (min === 0) {
        console.log(`Недостаточно проуктов даже для приготовления 1 порции`);
        break;
    } else if (min < 0) {
        console.log(`Количество продуктов должно быть положительным`);
        break;
    }
    else {
        console.log(`Количество порций блинов, которые можно приготовить: ${min}`);
        break;

    }
}