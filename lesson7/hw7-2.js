alert("������� �� ����� �������� ��������. ��� ����� ������ ��� ������������:\n-500 � ������\n-30 � ������\n-200 � ����\n-30 � �����\n-2 � ����\n-3 ����")
const pancakes = {
    milk: 500,
    eags: 3,
    flour: 300,
    butter: 30,
    salt: 3,
    sugar: 30
};
alert("������� ���������� ������������, ������� � ��� ����")
var products = {
    milk: prompt("������(��)") || undefined,
    eags: prompt("����(��)") || undefined,
    flour: prompt("����(��)") || undefined,
    butter: prompt("�����(��)") || undefined,
    salt: prompt("����(��)") || undefined,
    sugar: prompt("�����(��)") || undefined
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
        console.log("�� ��������� �� ��� ����")
        break;
    }
    else if (!isNumeric(products[key])) {
        console.log('������� ������ �����');
        break;
    }
    else if (min === 0) {
        console.log(`������������ �������� ���� ��� ������������� 1 ������`);
        break;
    } else if (min < 0) {
        console.log(`���������� ��������� ������ ���� �������������`);
        break;
    }
    else {
        console.log(`���������� ������ ������, ������� ����� �����������: ${min}`);
        break;

    }
}