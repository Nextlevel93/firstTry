function fibonacci(num) {
    if (num == 0 || num == 1) {
        return console.log("����� ��������� ��� ������� " + num + ' : ' + num)
    }
    else if (!isNaN(num) && num >= 0) {
        var arg1 = 0, arg2 = 1;
        var sum = arg1 + arg2;
        for (var i = 2; i < num; i++) {
            arg1 = arg2, arg2 = sum;
            sum = arg1 + arg2;
        }
        var result = num;
        console.log("����� ��������� ��� ������� " + result + " : " + sum)
    }
    else {
        x = console.log("������� ������ ����� ��������������� �����")
        return x;
    }
}

fibonacci(prompt("������� ���������� ����� ����� ���������:"));