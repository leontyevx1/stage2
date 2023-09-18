// функция, которая будет возвращать другую функцию
function outerFunction() {
    // объявляем переменную и присваиваем ей значение
    let externalFunction = "Переменная была объявлена во внешней функции";

    // создаем функцию, которая будет иметь доступ к переменной outerVariable, определенной во внешней функции.
    function internalFunction() {
        console.log(externalFunction);
    }

    // возвращаем функцию innerFunction из outerFunction.
    return internalFunction;
}

// создаем переменную newFunction и присваиваем ей результат выполнения outerFunction
// теперь newFunction ссылается на innerFunction.
let newFunction = outerFunction();

// В результате в консоль будет выведено значение переменной outerVariable,
// которая была определена во внешней функции,
// даже после того, как outerFunction завершила свое выполнение.
newFunction(); // выведет "Переменная была объявлена во внешней функции"