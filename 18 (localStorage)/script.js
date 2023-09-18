// для подсчета максимального объема localStorage браузера будем использовать метод localStorage.setItem()
// и увеличивать размер данных до тех пор, пока не будет сгенерировано исключение QuotaExceededError
function getMaxLocalStorageSize() {
    let max = 0;
    let step = 1024 * 1024; // Увеличиваем размер данных на 1 МБ

    try {
        while (true) {
            let data = 'a'.repeat(step); // Создаем строку длиной step

            let key = 'test_' + max; // Генерируем уникальный ключ

            localStorage.setItem(key, data); // Пытаемся записать данные в localStorage

            max += step;
        }
    } catch (e) {
        console.log(e)
        if (e instanceof DOMException && e.name === 'QuotaExceededError') {
            console.log('Максимальный объем данных в localStorage:', max, 'байт');
            localStorage.clear(); // Очищаем localStorage от созданных данных

        } else {
            console.error('Ошибка:', e);
        }
    }
}

getMaxLocalStorageSize();