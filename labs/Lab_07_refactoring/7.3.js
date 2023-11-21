let quantity_person = prompt('Введите кол-во человек: ', '');

if (!isNaN(parseFloat(quantity_person))) {
    quantity_person = parseFloat(quantity_person);
}else {
    quantity_person = 0;
}

while (quantity_person === 0) {
    let quantity_person = prompt('Введите кол-во человек ', '');

    if (!isNaN(parseFloat(quantity_person))) {
        quantity_person = parseFloat(quantity_person);
    }else {
        quantity_person = 0;
    }
}

let salary = prompt('Введите зарплату на человека ', '');

if (!isNaN(parseFloat(salary))) {
    salary = parseFloat(salary);
}else {
    salary = 0;
}

while(quantity_person === 0) {
    let salary = prompt('Введите зарплату на человека ', '');
    if (!isNaN(parseFloat(salary))) {
        salary = parseFloat(salary)
    } else {
        salary = 0;
    }
}
alert('Затраты на ЗП' + salary * quantity_person);