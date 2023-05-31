// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value}; 오브젝트는 키와 값의 집합체

// object를 사용하지 않을 때
const name = 'sky';
const age = 3;

function print1(name, age) {
    console.log(name);
    console.log(age);
}

print1(name, age);

// object로 만들어서 사용할 때
const dol = { name: 'dol', age: 5 };

function print2(person) {
    console.log(person.name);
    console.log(person.age);
}

print2(dol);

// 오브젝트를 만드는 방법 
// 1) 'object literal' syntax
const obj1 = {};

// 2) 'object constructor' syntax
const obj2 = new Object();


//  with JavaScript magic(dynamically typed language)
// can add properties later 추가 속성 작성 가능(하지만 유지보수 어려우니까 사용하지말기)
dol.hasJob = true;
console.log(dol.hasJob); // true

// can delete properties later 속성 삭제 가능
delete dol.hasJob;
console.log(dol.hasJob); // undefined



// 2. computed properties 계산된 속성
// key should be alwyas string
console.log(dol.name); // dol
console.log(dol['name']); // dol 
dol['hasJob'] = true;
console.log(dol.hasJob); // true

function printValue1(obj, key) {
    console.log(obj.key); // undefined
}

printValue1(dol, 'name');

function printValue2(obj, key) {
    console.log(obj[key]); // dol
}
printValue2(dol, 'name'); 



// 3. Property value shorthand
const person1 = {name: 'bob', age:2}
const person2 = {name: 'steve', age:3}
const person3 = {name: 'dave', age:4}
const person4 = makePerson('sky', 30)

console.log(person4);

function makePerson(name, age) {
    return {
        name: name,
        age: age,
    };
}


// 4. Constructor
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const person5 = new Person('sky', 30);
console.log(person5);


// 5. in operator: property existence check (key in obj)
console.log('name' in dol); // true
console.log('age' in dol); //true
console.log('random' in dol); // false


// 6. for..in vs for..of
// for(key in obj)
console.clear();
for(key in dol) {
    console.log(key);
}

// for(value of iterable)
const array = [1, 2, 3, 4];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'sky', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);


// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big

