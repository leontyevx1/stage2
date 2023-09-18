function addStyledElement() {

    // Создаем новый элемент
    let newElement = document.createElement('div');

    // Добавляем текст в элемент
    newElement.textContent = 'Новый элемент';

    // Устанавливаем стиль для элемента с помощью CSS
    newElement.style.backgroundColor = 'red';
    newElement.style.color = 'white';
    newElement.style.padding = '10px';

    // Добавляем элемент в DOM
    document.body.appendChild(newElement);
}

// Вызываем функцию для добавления нового элемента со стилем
addStyledElement();