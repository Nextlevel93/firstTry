function fibonacci(num) {
    if (num == 0 || num == 1) {
        return console.log("Число Фибоначчи под номером " + num + ' : ' + num)
    }
    else if (!isNaN(num) && num >= 0) {
        var arg1 = 0, arg2 = 1;
        var sum = arg1 + arg2;
        for (var i = 2; i < num; i++) {
            arg1 = arg2, arg2 = sum;
            sum = arg1 + arg2;
        }
        var result = num;
        console.log("Число Фибоначчи под номером " + result + " : " + sum)
    }
    else {
        x = console.log("Вводите только целые неотрицательные числа")
        return x;
    }
}

fibonacci(prompt("Введите порядковый номер числа Фибоначчи:"));