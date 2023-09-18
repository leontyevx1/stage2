function isPalindrome(str) {
    // Удаляем все пробелы и приводим строку к нижнему регистру
    str = str.replace(/\s/g, '').toLowerCase();

    // Проверяем, является ли строка палиндромом
    // split превращает строку в массив
    // reverse разворачивает строку
    // join собирает массив с строку
    return str === str.split('').reverse().join('');
}

// Пример использования функции
let string = "аргентина манит негра";
console.log(isPalindrome(string));