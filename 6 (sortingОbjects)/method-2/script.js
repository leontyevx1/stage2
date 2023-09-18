const array = [
    { name: 'Max', age: 27 },
    { name: 'Anton', age: 27 },
    { name: 'Julia', age: 23 },
    { name: 'Semen', age: 30 },
    { name: 'Alexey', age: 39 },
    { name: 'Anna', age: 20 },
];

array.sort((a, b) => {

    // Сортируем по возрастанию возраста
    if (a.age !== b.age) {
        return a.age - b.age;
    }

    // При равных возрастах сортируем по алфавиту по полю name
    return a.name.localeCompare(b.name);
});

console.log(array);