// асинхронная функция, которая ожидает выполнение других асинхронных операций
async function asyncFunction() {
    try {
        // функция имитации запроса к серверу возвращает промис
        function fetchData() {
            return new Promise((resolve, reject) => {
                // Имитация задержки загрузки данных на 2 секунды
                setTimeout(() => {
                    const data = "Данные с сервера";
                    resolve(data);

                    // Иммитация ошибки для проверки
                    /*const error = new Error("Произошла ошибка при загрузке данных");
                    reject(error);*/
                }, 2000);

            });
        }
        const result = await fetchData();

        // ожидаем выполнение другой асинхронной операции
        function processResult(result) {
            return new Promise((resolve) => {
                // Имитация задержки обработки результата на 1 секунду
                setTimeout(() => {
                    resolve(result);
                }, 1000);

            });
        }

        // возвращаем результат выполнения
        return await processResult(result);
    } catch (error) {

        // обрабатываем возможные ошибки
        throw new Error(error.message);
    }
}

// вызываем функцию asyncFunction
asyncFunction()
    .then((result) => {
        console.log('Результат выполнения:', result);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });