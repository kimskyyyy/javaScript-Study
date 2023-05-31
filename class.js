'use strict';

// Object-oriented programming(객체 지향 프로그래밍)
// class: template (클래스: 템플릿)
// object: instance of a class ( 객체: 클래스의 인스턴스)
// JavaScript classes (자바스크립트 클래스)
// - introduced in ES6 (ES6에서 도입)
// - syntactical sugar over prototype-based inheritance(기존의 존재하던 프로토타입을 상속받은 문법)

// 1. Class declarations(클래스 선언)
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}, hello!`);
    }
}

const sky = new Person('sky', '20');
console.log(sky.name);
console.log(sky.age);
sky.speak();


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        // this._age = value;

        this._age = value < 0 ? 0 : value; 
    }
}

const user1 = new User('dol', 'king', -1);
console.log(user1.age);



// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    // '#'을 붙여서 private한 필드 생성, 클래스 내부에서만 값이 보여지고 사용 가능
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);


// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'sky';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inhertance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape{

}
class Triangle extends Shape{
    draw() {
        super.draw();
        console.log('🔺')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6.Class checking: instanceOf
// 왼쪽 object가 오른쪽에 있는 클래스의 인스턴스인지 아닌지
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());