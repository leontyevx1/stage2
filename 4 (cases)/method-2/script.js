// создание модуля в который помещаем анонимную самовыз. функцию для создания приватной области видимости
let wordModule = (function() {
    // создаем функцию которая принимает два аргумента: число и массив окончаний для разных падежей
    function changeEnding(number, endings) {
        let index;
        // определение последних двух цифр числа
        // используем оператор % для получения остатка от деления числа на 100.
        // Это позволяет нам получить последние две цифры числа, которые будем использовать для определения окончания.
        let lastTwoDigits = number % 100;

        // Определение индекса массива окончаний с помощью оператора switch case
        // используем оператор switch case для проверки значения lastTwoDigits.
        // Если значение соответствует 11, 12, 13, 14, то присваиваем переменной index значение 2,
        // так как для этих чисел используется третье окончание из массива endings.

        switch (lastTwoDigits) {
            case 11:
            case 12:
            case 13:
            case 14:
                index = 2;
                break;
            default:
                let lastDigit = number % 10;

                // В противном случае, переходим к определению индекса в зависимости от последней цифры числа.
                // используем еще один оператор switch case для проверки значения lastDigit, которое является остатком от деления числа на 10.
                // В зависимости от значения lastDigit присваиваем переменной index соответствующее значение:
                // 0 для 1;
                // 1 для 2, 3 и 4;
                // 2 для всех остальных случаев.
                switch (lastDigit) {
                    case 1:
                        index = 0;
                        break;
                    case 2:
                    case 3:
                    case 4:
                        index = 1;
                        break;
                    default:
                        index = 2;
                        break;
                }
                break;
        }

        // возвращаем элемент массива endings с индексом index, который был определн на предыдущих шагах.
        return endings[index];
    }
    // Возврат объекта с функцией changeEnding
    return {
        changeEnding: changeEnding

    };
})();

console.log(wordModule.changeEnding(112, ['сообщение', 'сообщения', 'сообщений']));
console.log(wordModule.changeEnding(12, ['сообщение', 'сообщения', 'сообщений']));
console.log(wordModule.changeEnding(1, ['сообщение', 'сообщения', 'сообщений']));
console.log(wordModule.changeEnding(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(wordModule.changeEnding(1026, ['пользователь', 'пользователя', 'пользователей']));
console.log(wordModule.changeEnding(121, ['пользователь', 'пользователя', 'пользователей']));
console.log(wordModule.changeEnding(1, ['родитель', 'родителя', 'родителей']));
console.log(wordModule.changeEnding(2, ['родитель', 'родителя', 'родителей']));
console.log(wordModule.changeEnding(10, ['родитель', 'родителя', 'родителей']));
console.log(wordModule.changeEnding(1, ['письмо', 'письма', 'писем']));
console.log(wordModule.changeEnding(4, ['письмо', 'письма', 'писем']));
console.log(wordModule.changeEnding(20, ['письмо', 'письма', 'писем']));
