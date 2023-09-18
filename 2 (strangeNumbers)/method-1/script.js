function isStrangeNumber(num) {
    let sum = 0;

    // Перебираем числа от 1 до num-1
    for (let i = 1; i < num; i++) {

        // Если i является делителем num, добавляем его к сумме
        if (num % i === 0) {
            sum += i;
        }
    }

    // Если сумма делителей равна num, это странное число
    return sum === num;
}

// Пример использования функции isStrangeNumber
let number = 28;
console.log(isStrangeNumber(number));  // Выведет true
