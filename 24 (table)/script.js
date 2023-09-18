// Функция загрузки данных
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.filltext.com/?rows=1000&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            renderTable(data);
        }
    };

    xhr.send();
}

// Функция отрисовки таблицы та функция отрисовывает таблицу на основе полученных данных.
// Она сначала очищает содержимое <tbody> (тело таблицы), а затем создает строки (<tr>) и ячейки (<td>) для каждого элемента данных. Затем эти строки добавляются в <tbody>.
// Когда данные успешно загружены (с кодом 200), функция вызывает renderTable() для отображения данных в таблице.

function renderTable(data) {
    let table = document.getElementById('data-table');
    let tbody = document.getElementById('data-body');

    // Очистка таблицы

    tbody.innerHTML = '';

    // Добавление данных в таблицу

    let startIndex = (currentPage - 1) * 50;
    let endIndex = startIndex + 50;

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        let row = document.createElement('tr');
        let firstNameCell = document.createElement('td');
        let lastNameCell = document.createElement('td');
        let phoneCell = document.createElement('td');
        let addressCell = document.createElement('td');
        let cityCell = document.createElement('td');
        let stateCell = document.createElement('td');
        let zipCell = document.createElement('td');

        firstNameCell.textContent = data[i].fname;
        lastNameCell.textContent = data[i].lname;
        phoneCell.textContent = data[i].tel;
        addressCell.textContent = data[i].address;
        cityCell.textContent = data[i].city;
        stateCell.textContent = data[i].state;
        zipCell.textContent = data[i].zip;

        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(phoneCell);
        row.appendChild(addressCell);
        row.appendChild(cityCell);
        row.appendChild(stateCell);
        row.appendChild(zipCell);

        tbody.appendChild(row);
    }

    // После отрисовки таблицы функция также создает ссылки для пагинации с помощью элемента <div> с id "pagination".
    // Каждая ссылка имеет номер страницы и при клике на нее вызывает функцию renderTable() с соответствующими данными.

    let pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    let pageCount = Math.ceil(data.length / 50);

    for (let j = 1; j <= pageCount; j++) {
        let link = document.createElement('a');
        link.href = '#';
        link.textContent = j;
        link.onclick = function() {
            currentPage = parseInt(this.textContent);
            renderTable(data);
        };

        if (j === currentPage) {
            link.classList.add('active');
        }

        pagination.appendChild(link);
    }
}

// Эта функция сортирует таблицу по выбранному столбцу. Она сначала получает все строки таблицы (<tr>) из <tbody>, преобразуя их в массив с помощью Array.from().
// Затем функция сортирует массив строк с использованием функции сравнения.
// В зависимости от типа данных столбца (имя, фамилия, телефон и т.д.), функция sort() сортирует строки по алфавиту или по числовому значению.
// После сортировки таблица обновляется, очищая <tbody> и добавляя отсортированные строки обратно.

function sortTable(column) {
    let table = document.getElementById('data-table');
    let tbody = document.getElementById('data-body');
    let rows = Array.from(tbody.getElementsByTagName('tr'));

    // Сортировка

    rows.sort(function(a, b) {
        let textA = a.getElementsByTagName('td')[column].textContent;
        let textB = b.getElementsByTagName('td')[column].textContent;

        if (column === 2 || column === 6) {
            if (column === 2) {
                textA = textA.replace(new RegExp("[- )(]", "gm"), "")
                textB = textB.replace(new RegExp("[- )(]", "gm"), "")
            }
            return parseInt(textA) - parseInt(textB);
        } else {
            return textA.localeCompare(textB);
        }
    });

    // Обновление таблицы

    tbody.innerHTML = '';

    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

    // Установка активного класса для сортируемого столбца

    let thCells = Array.from(table.getElementsByTagName('th'));

    thCells.forEach(function(cell) {
        cell.classList.remove('active');
    });

    thCells[column].classList.add('active');
}

// Загрузка данных при загрузке страницы
let currentPage = 1;

// Это событие загрузки страницы, при котором вызывается функция loadData() для начальной загрузки данных при загрузке страницы.
window.onload = function() {
    loadData();
};