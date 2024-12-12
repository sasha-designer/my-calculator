
// 버튼에 이벤트 리스너 추가

//3-1단계
//모든 버튼 요소를 선택합니다.
const btns = document.querySelectorAll('.button');
// console.log(btns);
// const btnsArr = Array.from(btns);
//각 버튼에 클릭 이벤트 리스너를 추가합니다.
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 버튼이 클릭되었을 때, 해당 버튼의 값을 콘솔에 출력합니다.
        // console.log(btn.value);
    });
});

//3-2단계
//숫자 버튼을 클릭하면 디스플레이에 해당 숫자가 표시되도록 하세요.
//초기 디스플레이 값이 `0`일 때는 클릭한 숫자로 바뀌어야 합니다.
//초기 값이 `0`이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 합니다.
//클래스가 `number`인 버튼에 대해서만 처리하세요.

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
let firstOperand = null;
let operator = null;
let secondOperand = null;
let reset = false;
// console.log(display.textContent);

numbers.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        // 버튼이 클릭되었을 때, 해당 버튼의 값을 콘솔에 출력합니다. 
        if (display.textContent === '0' || reset===true) {
            display.textContent = numBtn.value;
            reset = false;
        }


         else {
            display.textContent += numBtn.value;
        }
    });
});






//도전 미션
// 소수점(`.`) 버튼을 클릭하면 디스플레이에 소수점을 추가하세요. (이미 소수점이 있는 경우 추가되지 않도록)
// `C` 버튼을 클릭하면 디스플레이를 `0`으로 초기화하세요.



const dotBtn = document.querySelector('#dotBtn');
dotBtn.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return;
    } else {
        display.textContent += '.';
    }
 });

const clear = document.querySelector('#clearBtn');
clear.addEventListener('click', () => {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    secondOperand = null;
    result = null;

    console.log(
        `
        firstOperand: ${firstOperand}
        operator: ${operator}
        secondOperand: ${secondOperand}
        result: ${result}
        `
    )   
});



//연산버튼을 클릭하면 연산자가 디스플레이에 표시되도록 하세요.



operators.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        firstOperand = display.textContent;
        //연산기호 버튼이 클릭되면 연산기호를 operator에 저장합니다.
        operator = operatorBtn.textContent;
        reset = true;
        // display.textContent = null;
        
        // console.log(firstOperand);
        // console.log(operator);
        console.log(
            `
            firstOperand: ${firstOperand}
            operator: ${operator}
            secondOperand: ${secondOperand}
            `
        )
        return operator;
        //디스플레이를 초기화합니다.
        // display.textContent = '0';
        // firstOperand = '';

    });
}   );


//4-2단계  
// 매개 변수로 두 숫자를 입력 받아서 결과를 반환하는 `calculate` 함수를 만듭니다.


function calculate (firstOperand, operator, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return;
    }
}

// `=` 버튼을 누르면 `firstOperand`, `operator`, `secondOperand`를 전달하여 계산이 되도록 합니다.
const equalBtn = document.querySelector('#equalBtn');
let result = null;
equalBtn.addEventListener('click', () => {
    //디스플레이에 있는 값을 secondOperand에 저장합니다.
    // const secondOperand = display.textContent;
    if (operator === null) {
        // return;
    } else {secondOperand = display.textContent;
    
        console.log(firstOperand);
        console.log(secondOperand);
        console.log(operator);
        console.log(calculate(parseFloat(firstOperand), operator, parseFloat(secondOperand)));
        display.textContent = calculate(parseFloat(firstOperand), operator, parseFloat(secondOperand));
        // result = display.textContent;
        firstOperand = null;
        operator = null;
        reset = true;}
    
});