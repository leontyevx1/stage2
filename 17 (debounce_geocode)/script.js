// Функция debounce возвращает новую функцию, которая будет вызывать переданную функцию func только после окончания задержки.
// Если в течение задержки происходят новые вызовы функции, таймер сбрасывается и задержка начинается заново.
// Таким образом, при вводе адреса в поле ввода будет происходить геокодинг только после окончания задержки,
// что позволяет уменьшить количество лишних запросов к API геоинформационного сервиса и улучшить производительность приложения
function debounce(callback, wait){
    let timeoutId = null;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

let returnedFunction = debounce(geocode, 500)


function geocode() {
    console.log(2)
    const input = document.getElementById('addressInput');
    const select = document.getElementById('addressDropdown');
    const query = input.value;

    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "bab06958cfe4c0842cfe4279c79741f7422273ad";

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token

        },
        body: JSON.stringify({query: query})
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {

            // Очищаем список
            select.innerHTML = '';

            // Добавляем найденные адреса в список
            data.suggestions.forEach(suggestion => {
                const option = document.createElement('div');
                option.classList.add('dropdown-item');
                option.textContent = suggestion.value;
                option.addEventListener('click', function() {
                    input.value = suggestion.value;
                    select.innerHTML = '';
                })
                select.appendChild(option);

            });
        })
        .catch(error => console.log("error", error));
}