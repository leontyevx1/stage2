function analyzePassword(password) {
    // Оцениваем длину пароля

    let lengthScore = password.length >= 8 ? 2 : 1;

    // Оцениваем использование различных символов

    let symbolScore = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) ? 2 : 1;

    // Оцениваем наличие чисел

    let numberScore = password.match(/\d/g) ? 2 : 1;

    // Оцениваем наличие букв в разных регистрах

    let upperCaseScore = password.match(/[A-ZА-Я]/g) ? 2 : 1;
    let lowerCaseScore = password.match(/[a-zа-я]/g) ? 2 : 1;

    // Вычисляем общую оценку сложности пароля

    let totalScore = lengthScore + symbolScore + numberScore + upperCaseScore + lowerCaseScore;


    // Предлагаем улучшения, если пароль слишком слабый

    let suggestions = [];

    if (password.length < 8) {
        suggestions.push("Увеличьте длину пароля до 8 символов.");
    }

    if (totalScore < 10 && !password.match(/\d/g)) {
        suggestions.push("Добавьте в пароль числа.");
    }

    if (totalScore < 10 && !password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {
        suggestions.push("Используйте различные символы, например: (!@#$).");
    }

    if (totalScore < 10 && !password.match(/[A-ZА-Я]/g)) {
        suggestions.push("Используйте буквы в верхнем регистре.");
    }

    if (totalScore < 10 && !password.match(/[a-zа-я]/g)) {
        suggestions.push("Используйте буквы в нижнем регистре.");
    }


    // Выводим оценку сложности пароля и предложения для улучшения

    console.log("Оценка сложности пароля: " + totalScore);
    console.log("Предложения для улучшения:");
    suggestions.forEach((suggestion, index) => {
        console.log(index + 1 + ". " + suggestion);
    });

    // Проверяем, является ли пароль надежным

    if (totalScore >= 10) {
        console.log("Пароль является надежным.");
    }


}

// Используем функцию для анализа пароля

analyzePassword("qA1@wQer");