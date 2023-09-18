// создаем базовый класс Shape
class Shape {

    // в этом классе мы объявляем два метода: calculateArea (расчет площади) и calculatePerimeter (расчет периметра)
    // оба метода выбрасывают ошибку, так как класс Shape не предоставляет реализации этих методов
    // методы будут переопределены в подклассах
    calculateArea() {
        throw new Error('метод должен быть реализован');
    }

    calculatePerimeter() {
        throw new Error('метод должен быть реализован');
    }
}

// создаем подкласс Rectangle, наследующийся от базового класса Shape
// тут мы определяем конструктор, который принимает ширину и высоту прямоугольника

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    // затем мы переопределяем методы calculateArea и calculatePerimeter для расчета площади и периметра прямоугольника
    // внутри методов мы используем значения ширины и высоты, сохраненные в свойствах объекта
    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// создаем подкласс Circle, также наследующийся от базового класса Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // в классе Circle мы определяем конструктор, который принимает радиус круга
    // затем переопределяем методы calculateArea и calculatePerimeter для расчета площади и периметра круга соответственно
    // внутри методов используется значение радиуса, сохраненное в свойстве объекта
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// создаем подкласс Triangle, также наследующийся от базового класса Shape
// в классе Triangle мы определяем конструктор, который принимает длины трех сторон треугольника
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    // затем мы переопределяем методы calculateArea() и calculatePerimeter() для расчета площади и периметра треугольника
    // внутри методов используются значения сторон, сохраненные в свойствах объекта. Для расчета площади используется формула Герона.
    calculateArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    calculatePerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}


// создаем объекты разных фигур (прямоугольника, круга и треугольника) с помощью соответствующих конструкторов
// затем вызываем методы calculateArea и calculatePerimeter для каждого объекта и выводим полученные результаты в консоль
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); // Ожидаемый результат: 50

console.log(rectangle.calculatePerimeter()); // Ожидаемый результат: 30


const circle = new Circle(3);
console.log(circle.calculateArea()); // Ожидаемый результат: примерно 28.27

console.log(circle.calculatePerimeter()); // Ожидаемый результат: примерно 18.85


const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea()); // Ожидаемый результат: 6

console.log(triangle.calculatePerimeter()); // Ожидаемый результат: 12