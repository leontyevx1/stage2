//Внутри файла dateUtils.js импортируем библиотеку Moment.js и создаем функцию для работы с датами:
const moment = require('moment')

function formatDate(date, format) {
    return moment(date).format(format);
}

// Экспортируем только нужную функцию
module.exports = { formatDate };