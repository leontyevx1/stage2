// функция принимает два параметра:
// первый myTemplate - это id шаблона, который находится внутри тега <template>
// второй myContainer - это id элемента, в который мы хотим добавить созданный элемент
function createAndAddElement(templateId, containerId) {
    const template = document.getElementById(templateId);
    const container = document.getElementById(containerId);
    console.log(template)
    console.log(container)

    // Проверяем, поддерживается ли тег <template> в текущем браузере
    if ('content' in template) {

        // Клонируем содержимое шаблона
        const clone = template.content.cloneNode(true);
        container.appendChild(clone);
    } else {
        // Вариант для браузеров, не поддерживающих тег <template>
        const html = template.innerHTML;
        container.innerHTML += html;
    }
}

createAndAddElement('myTemplate', 'myContainer');