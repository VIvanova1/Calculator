const displayHistoryEl = document.querySelector(".history");
const displayWorkEl = document.querySelector(".workDisplay");
const tempResEl = document.querySelector(".temp-res");

const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");

const clearAllEl = document.querySelector(".all-clear");
const lastClearEl = document.querySelector(".last-clear");

const equalEl = document.querySelector(".equal");

const negateEl = document.querySelector(".negate")

let dispHistoryNum = "";
let displWorkNum = "";
let result = null;
let lastOperation = "";
let haveDot = false;


numbersEl.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.textContent === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.textContent === "." && haveDot) {
            return;
        }

        displWorkNum += e.target.textContent;
        displayWorkEl.textContent = displWorkNum;

    })
});



operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!displWorkNum) {
            displWorkNum += 0;
        }
        haveDot = false;
        const operationName = e.target.textContent;
        if (dispHistoryNum && displWorkNum && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displWorkNum);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    dispHistoryNum += displWorkNum + ' ' + name + ' ';
    displayHistoryEl.textContent = dispHistoryNum;
    displayWorkEl.textContent = '';
    displWorkNum = '';
    tempResEl.textContent = result;
}

function mathOperation() {
    if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(displWorkNum);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(displWorkNum);
    } else if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(displWorkNum);
    } else if (lastOperation === '÷') {
        result = parseFloat(result) / parseFloat(displWorkNum);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(displWorkNum);
    }

}


equalEl.addEventListener('click', (e) => {
    if (!dispHistoryNum || !displWorkNum) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayWorkEl.textContent = result;
    tempResEl.textContent = '';
    displWorkNum = result;
    dispHistoryNum = '';
})


clearAllEl.addEventListener('click', (e) => {
    displayHistoryEl.textContent = '0';
    displayWorkEl.textContent = '0';
    dispHistoryNum = '';
    displWorkNum = '';
    result = '';
    tempResEl.textContent = '0';
});


lastClearEl.addEventListener('click', (e) => {
    displayWorkEl.textContent = '0';
    displWorkNum = '';
});

negateEl.addEventListener('click', (e) => {
    displayWorkEl.textContent = -displayWorkEl.textContent;
    displWorkNum *= -1;
})