// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);

// 백틱 안에서 줄바꿈 적용됨
console.log(`string literals: '''' 
1 + 2 = ${1 + 2}`);

// \n 으로 줄바꿈
console.log("sky's \nbook");


// 2. Numeric operators
console.log(1 + 1); // add, 2
console.log(1 - 1 ); // substract, 0
console.log(1 / 1); // divide, 0
console.log(1 * 1); //multiply, 1
console.log(5 % 2); // remainder, 1
console.log(2 ** 3); // exponentiation, 8


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2


// 4. Assigmebnt operators
let x = 3;
let y = 6;
console.log(x += y); // x = x +y ;, 9
console.log(x -= y); // x = x - y;, 3
console.log(x *= y); // x = x * y;, 18
console.log(x /= y); // x = x / y;, 3


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6.Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; // false

// ||(or)
console.log(`or: ${value1 || value2 || check()}`); // or: true

// &&(and)
console.log(`and: ${value1 && value2 && check()}`); // and: false

// !(not)
console.log(`not: ${!value1}`); // not: true

function check() {
    for(let i = 0; i < 10; i++) {
        // wasting time
        console.log('😍')
    }
    return true;
}


// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const sky1 = {name: 'sky'};
const sky2 = {name: 'sky'};
const sky3 = sky1;

console.log(sky1 == sky2); // false, ref가 다르기 때문에
console.log(sky1 === sky2); // false
console.log(sky1 === sky3); // true

// equality ex
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false



// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name === 'sky') {
    console.log('Welcome, Sky!');
} else if(name === 'coder') {
    console.log('You are amazing coder!');
} else {
    console.log('nunknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'sky' ? 'yes' : 'no'); // no


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy;
// body code is executed.
let i = 3;
while( i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, the check the condition.
do {
    console.log(`do while: ${i}`)
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for(let i = 3; i > 0; i -=2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let num = 0; num < 10; num++) {
    if(num % 2 !== 0) {
        continue;
    }
    console.log(num);
}

for(let num = 0; num < 10; num++) {
    if(num % 2 == 0) {
        console.log(num);
    }
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let num = 0; num < 10; num++) {
    console.log(num);
    if(num === 8) {
        break;
    }
}






