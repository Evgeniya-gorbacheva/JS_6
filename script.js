/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.*/
let str_1 = 'aaa@bbb@ccc';

console.log(str_1.replace(/@/g, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31 . Замените все. Преобразуйте эту дату в
формат '31/12/2025'*/
let date = '2025-12-31';

let dateNew = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');

console.log(dateNew.replace(/-/g, '/'));

/*3. Дана строка 'я учу javascript!'.Вырежите из нее слово 'учу' и javascript'. Замените все тремя разными
способами (через substr, substring, slice).*/
let str_3 = 'я учу javascript!';

console.log(str_3.substring(2, 5));
console.log(str_3.substr(2, 3));
console.log(str_3.slice(2,5));

console.log(str_3.substring(6, 16));
console.log(str_3.substr(6, 10));
console.log(str_3.slice(6, 16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
кубов его элементов. Для решения воспользуйтесь циклом for.*/
let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/
let a = 3,
    b = 5,
    c = a - b;

console.log(Math.abs(c));

a = 6;
b = 1;
c = a - b;

console.log(Math.abs(c));

/*6. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой
задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/
let dateNow = new Date(),
    month = dateNow.getMonth(),
    day = dateNow.getDate(),
    year = dateNow.getFullYear(),
    hours = dateNow.getHours(),
    minutes = dateNow.getMinutes(),
    seconds = dateNow.getSeconds();

function zero(num) {

    if (num > 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

console.log(hours + ':' + minutes + ':' + seconds + ' ' + zero(day) + '.' + zero(month) + '.' + year);

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет
строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/
let str_7 = 'aa aba abba abbba abca abea';

console.log(str_7.match(/ab+a/g));




