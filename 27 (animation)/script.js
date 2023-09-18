// element - элемент, для которого добавляем анимацию
// property - свойство элемента, которое будем изменять
// startValue - начальное значение свойства
// endValue - конечное значение свойства
// duration - продолжительность анимации в миллисекундах

function animateElement(element, property, startValue, endValue, duration) {
    // startTime будет хранить время начала анимации
    let startTime = null;
    // currentValue - текущее значение свойства
    let currentValue = startValue;

    // Создаем функцию animationStep, которая будет вызываться при каждом кадре анимации с помощью requestAnimationFrame.
    // Эта функция принимает один параметр - timestamp, который представляет текущее время.
    function animationStep(timestamp) {
        // проверяем, было ли установлено значение startTime
        // если нет, то устанавливаем его равным текущему значению timestamp
        if (!startTime) startTime = timestamp;
        // вычисляем прогресс анимации progress, путем вычитания времени начала startTime из текущего времени timestamp
        const progress = timestamp - startTime;

        // если progress меньше duration, значит анимация еще не завершена
        // В этом случае мы вычисляем delta,
        // которая представляет разницу между начальным и конечным значением свойства,
        // умноженную на прогресс анимации деленный на продолжительность
        if (progress < duration) {
            const delta = (endValue - startValue) * (progress / duration);
            // вычисляем новое текущее значение currentValue, добавляя delta к начальному значению
            currentValue = startValue + delta;
            // присваиваем новое значение свойству элемента element.style[property]
            element.style[property] = currentValue + 'px';
            // вызываем requestAnimationFrame(animationStep) снова, чтобы продолжить анимацию на следующем кадре.
            requestAnimationFrame(animationStep);
        } else {
            // если progress больше или равно duration, значит анимация завершена.
            // в этом случае мы устанавливаем конечное значение свойства endValue для элемента element.style[property].
            element.style[property] = endValue + 'px';
        }
    }

    requestAnimationFrame(animationStep);
}
// получаем элемент по его id с помощью document.getElementById и передаем его в качестве первого аргумента функции animateElement.
const element = document.getElementById('myElement');
// Затем мы указываем свойство width, начальное значение 100, конечное значение 700 и продолжительность анимации 5000 миллисекунд.
animateElement(element, 'width', 100, 700, 5000); // Изменение ширины элемента с 100px до 700px за 5 секунды