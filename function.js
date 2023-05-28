'use strict';
// Function
// - fundamental building block in the program(프로그램을 구성하는 기본적인 구성요소)
// - subprogram can be used multiple times(서브 프로그램으로도 불리며 재사용 가능)
// - performs a task or calculates a value(작업을 수행하거나 값을 계산함)

// 1. Function declaration(함수 선언)
// function name(pram1, pram2) {body... return;} 함수명(인자1, 인자2) {함수내용... 반환;}
// one function === one thing(하나의 함수는 한 가지의 일만 수행하도록 작성)
// naming: doSomething, command, verb(함수명: 동사형태, 명령 형태)
// e.g. createCardAndPoint -> createCard, createPoint (한 가지 동작으로 나누기!!!)
// function is object in JS(자바스크립트에서 함수는 객체)

function printHello() {
    console.log('Hello');
}

printHello();


function log(message) {
    console.log(message);
}

// 파라미터의 타입을 알 수 없음..!
log('Hello~~!');
log(1234);


// Parameters
// primitive parametes: passed by value; (기본 파라미터: 값 전달)
// object parameters: passed by reference(객체 파라미터 : 참조 값 전달)
function changeName(obj) {
    obj.name = 'coder';
} 
const sky = {name: 'sky'};
console.log(`sky's name: ${sky.name}`); // sky's name: sky
changeName(sky);
console.log(`sky's name: ${sky.name}`); // sky's name: coder


// 3. Default paramets(added in ES6)
// default 값을 지정할 수 있음
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`); // Hi~! by nuknown
}
showMessage('Hi~!');


// 4. Rest parameters(added in ES6)
//... 배열 형태로 전달됨
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // args의 값이 arg로 넣어서 하나하나 출력 
    for(const arg of args) {
        console.log(arg);
    }

    // 배열의 함수형 언어를 이용해서 출력
    args.forEach((arg) => console.log(arg));
}

printAll('sky', 'love', 'dol');


// 5. Local scope

// global Level
let globalMessage = 'global'; // global variable
function printMessage() {
    // block Level
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();



// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); 
console.log(`sum: ${sum(1, 2)}`); // sum: 3



// 7. Early return, early exit

// bad code
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...

    }
}

// good code
 function upgradeUser(user) {
    // 조건이 맞지 않는 경우 함수 종료
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
 }


 
 // First-class function
 // functions are treated like any other variable(함수는 다른 변수처럼 처리됨)
 // can be assigned as a value to variable(변수 값으로 할당 될 수 있음)
 // can be passed as an argument to other functions.(다른 함수에 인자로 전달될 수 있음)
 // can be returned by another function.(다른 함수에 의해 반환될 수 있음)

 // 1. Function expression(1. 함수 표현식)
 // a function declaration can be called earlier than it is defined.(hoisted)
 // 함수 선언은 함수가 정의 되기 전에 호출될 수 있음
 // a function expression is created when the execution reached it.
 // 함수 표현식은 
 const print = function() { // anonymous function(익명함수)
    console.log('print');
 };
 print();
 const printAgain = print;
 printAgain();

 const sumAgain = sum;
 console.log(sumAgain(1, 3));


 // 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions(재귀)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

// function 과 블록을 지우고 '=>'추가
const simplePrintArrow = () => console.log('simplePrint!');



const add = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// 로직이 길어지는 경우 중괄호'{}'를 넣고 return을 해줘야함
const simpleMultiply = (a, b) => {
    // do something more
 return  a* b;
};

// IIFE: Immediately Invoked Function Expression(즉시 함수 호출 표현식)

// 기존 방법
function hello() {
    console.log('IIFE');
}
hello();

// IIFE
(function hello() {
    console.log('IIFE');
})();


// Quiz
function calculate(command, a, b) {
    switch(command) {
        case 'add':
            console.log(`a + b = ${a + b}`);
            break;
        case 'substract':
            console.log(`a - b = ${a - b}`);
            break;
        case 'divide':
            console.log(`a / b = ${a / b}`);
            break;
        case 'multiply':
            console.log(`a * b = ${a * b}`);
            break;
        case 'reminder':
            console.log(`a % b = ${a % b}`);
            break;
        default:
            console.log("명령을 확인해주세요.")
    }
}

calculate('add', 6, 3);
calculate('substract', 6, 3);
calculate('divide', 6, 3);
calculate('multiply', 6, 3);
calculate('reminder', 6, 3);
calculate('sky', 6, 6)
