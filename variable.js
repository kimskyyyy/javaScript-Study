// 1. use strict 
'use sitrict';

// 2. Variable(read/write, 메모리에 읽고 쓰기 가능)
// let (ES6에서 추가됨)
let globalName = 'glabal name';
{
    let name = 'sky';
    console.log(name); // sky
    name = 'hello';
    console.log(name); // hello
}

//console.log(name); // 출력되지 않음
console.log(globalName) // glabal name

// var(사용하지 말기!!!!)
// 호이스팅 hoisting(선언을 가장 위로 끌어올림 --> 변수 선언 전 값을 넣을 수 있음)
// block scope가 적용되지 않음
{
    age = 4;
    var age;
}
console.log(age); // 4


// 3. Constant(read only, 메모리에 값 읽기만 가능)
// 값이 변하지 않은 데이터에는 const 변수 타입을 사용하자
// - security(보안)
// - thread safety(안전한 스레드)
// - reduce human mistakes(개발자의 실수 감소)
const dayInWeek = 7;
const maxNumber = 3;

// Note!
// Immutable data types(불변적 데이터형): primitive type, frozen objects(i.e. object.freeze())
// Mutable data type(변경 가능한 데이터형): all objects by default are mutable in JS(자바스크립트에서 기본적으로 모든 객체는 변화 가능)



// 4. Variable types
// primitive, single item: number, stirng, boolean, null, nudefined, symbol object, box container function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number;
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values: Infinity, -Infinity, NaN
const infinity = 1 / 0; // 숫자를 0으로 나누는 경우 무한대를 나타내는 infinity
const negativeInfinity = -1 / 0; 
const nAn = 'not a number' / 2; // 숫자가 아닌 것을 숫자로 나누는 경우
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt(fairy new, don't use it yet)
// 끝에 n을 붙임
const BigInt = 9876654321324556677889900998877665544n;
console.log(`value: ${BigInt}, type: ${typeof BigInt}`); // value: 9876654321324556677889900998877665544, type: bigint
Number.MAX_SAFE_INTEGER;

// stirng
const char = 'a';
const name = 'sky';
const greeting = 'hello ' + name;
console.log(`value: ${greeting}, type: ${typeof greeting} `) // value: hello sky, type: string 

// boolean
// false: 0, null, nudefined, NaN, ''
// true: any other value
const read = true;
const test = 3 < 1; // false
console.log(`value: ${read}, type: ${typeof read}`); // value: true, type: boolean
console.log(`value: ${test}, type:${typeof test}`); // value: false, type:boolean

// null
// 명확한 null 값으로 할당되어 있는 경우
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // value: null, type: object

// nudefined
// 선언만 상태(null이나 값이 정의되지 않은 상태)
let x;
console.log(`vlaue: ${x}, type: ${typeof x}`); // vlaue: undefined, type: undefined

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요한 경우 사용하는 symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// symbol의 출력은 .description을 붙여야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// object, real-life object, data structure
// object
const sky = {name: 'sky', age: 20}
sky.age = 21;


// 5. Dynamic typing: dynamicaly typed language(동적 타입 언어)
// 런타임에서 타입이 정해짐
// --> TypeScript가 탄생한 이유
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type:${typeof text}`) // value: hello, type:string
text = 1;
console.log(`value: ${text}, type:${typeof text}`) // value: 1, type:number
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`) // value: 75, type:string


