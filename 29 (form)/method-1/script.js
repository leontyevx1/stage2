// Функция, которая будет вызываться при отправке формы
function submitForm(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем данные из формы
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Выполняем действия с данными, отображаем всплывающее окно с результатами

    alert('Имя: ' + name + '\nEmail: ' + email);
}

// Находим форму по её id и назначаем обработчик события submit
document.getElementById('myForm').addEventListener('submit', submitForm);