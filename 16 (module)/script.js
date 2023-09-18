// импортируем наш модуль и используем экспортированную функцию
const { formatDate } = require('./dateUtils');

const date = new Date();
const formattedDate = formatDate(date, 'DD.MM.YYYY');

console.log(formattedDate);