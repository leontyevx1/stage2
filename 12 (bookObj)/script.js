// создаем объект book, который будет представлять книгу
const book = {
    title: "Название книги",
    author: "Автор",
    year: 2021,

    // определяем метод getTitle, который возвращает значение свойства title
    getTitle: function() {
        // this.title обращается к свойству title объекта, в котором определен данный метод
        return this.title;
    },

    // определяем метод setTitle,
    // который принимает новое название книги в качестве аргумента и присваивает его свойству title объекта book
    setTitle: function(newTitle) {
        this.title = newTitle;
    },

    // аналогично методам getTitle и setTitle определяем другие методы
    getAuthor: function() {
        return this.author;
    },

    setAuthor: function(newAuthor) {
        this.author = newAuthor;
    },

    getYear: function() {
        return this.year;
    },

    setYear: function(newYear) {
        this.year = newYear;
    }
};

// Выводит текущее значение title
console.log(book.getTitle());
// Изменяет текущее значение title
book.setTitle("Новое название книги");
// Выводит новое значение title
console.log(book.getTitle());

console.log(book.getAuthor());
book.setAuthor("Новый автор");
console.log(book.getAuthor());

console.log(book.getYear());
book.setYear(2022);
console.log(book.getYear());