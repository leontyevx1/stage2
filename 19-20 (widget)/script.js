// Функция для загрузки постов из VK API

async function loadPosts(offset) {
    let token = 'vk1.a.rgj4KED7Nj_pmkfMia2fZxPg7JoAmjJYyhW8Cmi7F0RtqB6bIBmPkNA4O_zlcqaYvYW5fUcezeV4GxLOSV4mIIUZ5qvyXwvsOTb7gAIrW2naJ-f76ykacWGD84ueUAI3xA-xN9FoZGTJNQNPaZBccFPlFPXO6bOE5aGgrFJ2zOZSRxt-moDb9HoWgKx_K2r3R2__alWYDcIVey9F8fb9Cw';
    let url = `https://api.vk.com/method/wall.get?owner_id=-9695053&count=10&offset=${offset}&filter=owner&access_token=${token}&v=5.131`;

    let response = await fetch(url);
    let data = await response.json();
    return data.response.items;
}

// Функция для отображения постов в виджете

function displayPosts(posts) {
    let widget = document.getElementById('widget');

    posts.forEach(post => {
        let postElement = document.createElement('div');
        let photoPostContainer = document.createElement('div');


        post.attachments.forEach(photo => {
                let photoPost = document.createElement('div');
                let img = document.createElement('img');
                img.src = photo.photo.sizes[1].url;
                photoPost.appendChild(img);
                photoPostContainer.appendChild(photoPost);
        })

        let textElement = document.createElement('div');
        textElement.innerText = post.text;
        postElement.appendChild(photoPostContainer);
        postElement.appendChild(textElement);


        postElement.classList.add('post');
        photoPostContainer.classList.add('photo-container');
        widget.appendChild(postElement);
    });
}

// Функция для проверки наличия кэшированных данных

function checkCache() {
    let cachedPosts = JSON.parse(localStorage.getItem('posts'));

    if (cachedPosts) {
        displayPosts(cachedPosts);
        return true;
    }

    return false;
}

// Функция для сохранения постов в кэш

function saveToCache(posts) {
    let cachedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // Вытеснение старых данных из кэша

    if (cachedPosts.length >= 20) {
        localStorage.removeItem('posts');
    }

    cachedPosts.push(...posts);
    localStorage.setItem('posts', JSON.stringify(cachedPosts));
    function calculateLocalStorageSize() {
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += ((localStorage[key].length + key.length) * 2); // учитываем размер ключа и значения в байтах

            }
        }
        return totalSize;
    }

// Функция для вывода информации о размере памяти

    function displayMemoryUsage() {
        let currentSize = calculateLocalStorageSize();
        let maxSize = (10 * 1024 * 1024);

        console.log(`Объем занятой памяти: ${currentSize} байт / ${maxSize} байт`);
    }

// Вставьте этот код в нужное место, например, после сохранения данных в LocalStorage

    displayMemoryUsage();
}

// Функция для обработки прокрутки виджета и подгрузки новых постов


function handleScroll() {
    let widget = document.getElementById('widget');
    let widgetHeight = widget.clientHeight;
    let scrollTop = widget.scrollTop;
    let scrollHeight = widget.scrollHeight;

    if (scrollTop + widgetHeight >= scrollHeight) {
        let offset = widget.children.length;
        loadPosts(offset)
            .then(posts => {
                displayPosts(posts);
                saveToCache(posts);
            });
    }
}

// Проверяем наличие кэшированных данных


if (!checkCache()) {
    // Если кэш пуст, загружаем посты


    loadPosts(0)
        .then(posts => {
            displayPosts(posts);
            saveToCache(posts);
        });
}

// Добавляем обработчик события прокрутки


let widget = document.getElementById('widget');
widget.addEventListener('scroll', handleScroll);

// Функция для подсчета объема памяти в LocalStorage

