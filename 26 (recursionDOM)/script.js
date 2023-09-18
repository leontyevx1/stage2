function traverseDOM(element) {
    // Выполняем действие с текущим узлом (например, выводим информацию о теге)
    console.log(element.className);

    // Рекурсивно обходим все дочерние узлы
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
        traverseDOM(children[i]);
    }
}

// Пример использования функции
let rootElement = document.body; // Начинаем обход с элемента body

traverseDOM(rootElement);