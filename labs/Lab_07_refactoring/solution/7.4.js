let studentClass = [{FIO: 'Шакиханова Г.И.', Grade: 5},
                    {FIO: 'Хусаинов В.Р.', Grade: 3.4},
                    {FIO: 'Каркошко М.А.', Grade: 9},
                    {FIO: 'Чезганова Я.А.', Grade: 2},
                    {FIO: 'Цыгикало Е.Е.', Grade: 3.4}];
let averageGrade = 0;
let quantity = 0;
let badStudent = [];

for (let numberStudent = 0; numberStudent < studentClass.length; numberStudent++) {

    if ((studentClass[numberStudent].Grade > 5) && (studentClass[numberStudent].Grade < 0)) {
        console.log('Значение не учитывается');
    }
    else if (!(studentClass[numberStudent].Grade <= 5) && (studentClass[numberStudent].Grade >= 0)) continue;
    else if (studentClass[numberStudent].Grade < 4) {
        badStudent.push(studentClass[numberStudent]);
    }

    averageGade += studentClass[numberStudent].Grade;
    quantity += 1;
}

averageGrade /= quantity;
console.log('Средняя оценка: '+ averageGrade);
console.log('Плохие студенты:' + badStudent);

if (badStudent.length === 0) {
    console.log('не существует');
}

badStudent.forEach((info)=> {
    console.log('Фио: '+ info.FIO + '; Оценка: ' + info.Grade)
});
r