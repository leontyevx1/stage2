// у нас есть массив functions, в котором хранятся функции, которые нужно вызвать по порядку
const arrFunctions = [
    () => console.log(1),
    () => console.log(2),
    () => console.log(3),
    () => console.log(4),
    () => console.log(5)
];

// создаем функцию, которая будет вызывать функции из массива последовательно
function executeFunctionsSequentially(arrFunctions) {
    // создаем переменную, которая будет хранить текущий индекс функции, которую мы будем вызывать
    let index = 0;

    //создаем вложенную функцию,
    // которая будет вызывать следующую функцию из массива и увеличивать значение index после каждого вызова.
    function executeNextFunction() {
        if (index < arrFunctions.length) {
            const currentFunction = arrFunctions[index];
            currentFunction();
            index++;
            // функция рекурсивно вызывает саму себя,
            // чтобы продолжать вызывать функции, пока не будут вызваны все функции из массива
            executeNextFunction();
        }
    }

    executeNextFunction();
}

executeFunctionsSequentially(arrFunctions);