function jsonToLinkedList(json) {

    // Парсим JSON
    const data = JSON.parse(json);

    // Создаем голову списка
    let head = null;

    // Создаем текущий элемент списка
    let current = null;

    // Проходим по каждому объекту в JSON
    for (let i = 0; i < data.length; i++) {

        // Создаем новый узел списка
        const node = {
            data: data[i],
            next: null

        };

        // Если это первый элемент списка, делаем его головой
        if (i === 0) {
            head = node;
            current = node;
        } else {

            // Добавляем текущему элементу ссылку на новый узел
            current.next = node;

            // Перемещаем текущий элемент на новый узел для дальнейшего добавления
            current = node;
        }
    }

    // Возвращаем голову списка
    return head;
}

const json = '[{"data": "A"}, {"data": "B"}, {"data": "C"}]';

const linkedList = jsonToLinkedList(json);
console.log(linkedList);