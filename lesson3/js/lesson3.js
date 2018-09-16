//скидка на яблоки
var firstPrice = 14.654465;
var discount = 1;
if (discount > 0) {
    var lastPrice = (Math.round((firstPrice * 100) * (1 - (discount * 10) / 1000)) / 100);
    console.log(lastPrice === 12.6); //chek
    var alert = "Ukrainian apples \n price: ";
    console.log(`${alert}${lastPrice} uah`);
    console.log(alert + lastPrice + ' uah');
}
else{
    console.log("Discount is less than 0");
}


//наценка на апельсины
var Price = 14;
var markup = -1;
if (markup > 0) {
    var newPrice = (Math.round((Price * 100) * (1 + (markup * 10) / 1000)) / 100);
    console.log(newPrice === 15.4); //chek
    var message = "Turkish oranges \n price: ";
    console.log(`${message}${newPrice} uah`);
    console.log(message + newPrice + ' uah');
}
else {
    console.log("Markup is less than 0");
}