// создаем функцию convertObjectToJSON,
// которая принимает объект obj и возвращает его в виде строки JSON,
// используя метод JSON.stringify
function convertObjectToJSON(obj) {
    return JSON.stringify(obj);
}

const obj = { name: 'Anton', age: 27, city: 'Novosibirsk' };

const jsonString = convertObjectToJSON(obj);

console.log(jsonString);
// Вывод: {"name":"Anton","age":27,"city":"Novosibirsk"}