// Вариант с использованием цикла while:

function isStrangeNumber(num) {
    let i = 1;
    let sum = 0;

    // Перебираем числа от 1 до 27
    while (i < num) {

        // Проверяем остаток от деления каждого делителя
        if (num % i === 0) {
            // если остаток - целое число, то прибавляем делитель к sum
            sum += i;
        }
        i++;
    }

    return sum === num;
}

// Пример использования функции

let number = 28;
console.log(isStrangeNumber(number));  // Выведет true