// Функция, которая будет вызываться при отправке формы
function submitForm(event) {
    event.preventDefault();

    // Получаем данные из формы
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Создаем объект с данными формы
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    // Отправляем данные на сервер

    fetch('http://имитированный-сервер.com/api/submit', {
        method: 'POST',
        body: formData

    })
        .then(function(response) {
            if (response.ok) {
                alert('Данные успешно отправлены на сервер');
            } else {
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
        .catch(function(error) {
            alert(error.message);
        });
}

// Находим форму по её id и назначаем обработчик события submit
document.getElementById('myForm').addEventListener('submit', submitForm);