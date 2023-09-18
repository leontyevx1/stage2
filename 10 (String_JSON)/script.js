// функция принимает строку str и пытается преобразовать ее в объект JSON с помощью метода JSON.parse()
// если конвертация проходит успешно, объект JSON возвращается из функции
function convertStringToJSON(str) {
    // если входная строка не является валидным JSON, метод JSON.parse() вызовет исключение
    // чтобы обработать это, мы используем конструкцию try...catch, чтобы перехватить исключение
    // в случае ошибки конвертации, выводим сообщение об ошибке в консоль и возвращаем null из функции
    try {
        // метод JSON.parse() сам по себе проверяет и валидирует входную строку на соответствие формату JSON
        const obj = JSON.parse(str);
        return obj;
    } catch (error) {
        console.error('Ошибка конвертации строки в JSON:', error);
        return null;
    }
}

// создаем строку jsonString, которую хотим преобразовать в объект JSON
const jsonString = '{"name":"Anton","age":27,"city":"Novosibirsk"}';

// вызываем функцию convertStringToJSON с этой строкой
const jsonObject = convertStringToJSON(jsonString);
console.log(jsonObject);
// Вывод: { name: 'Anton', age: 27, city: 'Novosibirsk' }