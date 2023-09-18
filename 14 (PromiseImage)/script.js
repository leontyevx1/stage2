// функция loadImage, которая принимает URL изображения в качестве аргумента.
function loadImage(url) {
    return new Promise((resolve, reject) => {
        // создаем новый объект изображения и
        // устанавливаем обработчики событий onload и onerror для обработки успешной загрузки и
        // ошибки загрузки изображения
        const img = new Image();
        img.onload = () => {
            // в обработчике события вызываем функцию resolve, передавая в нее объект изображения img
            // это означает, что промис разрешается с данными об изображении после его успешной загрузки
            resolve(img);
        };
        img.onerror = () => {
            // в обработчике события onerror вызываем функцию reject, передавая объект ошибки new Error('Ошибка загрузки изображения')
            // это означает, что промис отклоняется с ошибкой загрузки изображения
            reject(new Error('Ошибка загрузки изображения'));
        };
        img.src = url;
    });
}

// В функции displayImage принимаем родительский элемент parentElement и изображение img
function displayImage(parentElement, img) {
    // используем метод appendChild родительского элемента, чтобы добавить изображение внутрь родительского элемента
    parentElement.appendChild(img);
}

const imageUrl = 'https://images.unsplash.com/photo-1687561114579-7154862207a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80';
const parentElement = document.getElementById('parent-element');

loadImage(imageUrl)
    .then((img) => {

        img.width = 300;

        // Выводим изображение на страницу
        displayImage(parentElement, img);
    })
    .catch((error) => {
        console.error('Ошибка загрузки изображения:', error);
    });

