const array = [
    { name: 'Max', age: 27 },
    { name: 'Anton', age: 27 },
    { name: 'Julia', age: 23 },
    { name: 'Semen', age: 30 },
    { name: 'Alexey', age: 39 },
    { name: 'Anna', age: 20 },
];

array.sort((a, b) => {

    // Сравниваем возраст
    if (a.age < b.age) {
        return -1; // a будет раньше b

    } else if (a.age > b.age) {
        return 1; // a будет позже b

    } else {

        // Если возрасты равны, сравниваем по полю name
        if (a.name < b.name) {
            return -1; // a будет раньше b

        } else if (a.name > b.name) {
            return 1; // a будет позже b

        } else {
            return 0; // a и b равны

        }
    }
});

console.log(array);