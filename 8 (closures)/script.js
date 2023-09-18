// функция которая принимает массив функций functions и
// возвращает новую функцию, которая вызывает каждую функцию в массиве и возвращает массив результатов
function executeFunctionsAndGetResults(functions) {
    return function() {
        // создаем массив results, который будет хранить результаты каждой вызванной функции
        const results = [];

        // используем цикл for...of для вызова каждой функции из functions и сохранения ее результата в массив results
        for (const func of functions) {
            const result = func();
            results.push(result);
        }

        return results;
    }
}

const functions = [
    () => 1,
    () => 2,
    () => 3

];

// вызываем executeFunctionsAndGetResults с массивом functions, чтобы получить новую функцию getResults
const getResults = executeFunctionsAndGetResults(functions);
// вызываем getResults, чтобы выполнить все функции из functions и получить массив результатов
const results = getResults();
console.log(results); // [1, 2, 3]