// Определить сколько раз можно вызвать функцию document.write() внутри другого document.write() невозможно.
// Это связано с тем, что каждый вызов document.write() перезаписывает текущее содержимое страницы.
// После каждого вызова document.write() браузер начинает новый парсинг и рендеринг страницы,
// что делает невозможным точное определение количества вызовов.
//
// В большинстве современных браузеров, после первого вызова document.write(),
// все последующие вызовы перезаписывают предыдущее содержимое, а не добавляют его.
// Это происходит потому, что document.write() используется для создания и изменения содержимого страницы во время загрузки документа,
// а не после его полной загрузки.
document.write('<script>document.write("Hello, World!")</script>');