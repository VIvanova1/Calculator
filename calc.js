// const displayHistoryEl = document.querySelector(".history");
// const displayWorkEl = document.querySelector(".workDisplay");
// const tempResEl = document.querySelector(".temp-res");

// const numbersEl = document.querySelectorAll(".number");
// const operationEl = document.querySelectorAll(".operation");

// const clearAllEl = document.querySelector(".all-clear");
// const lastClearEl = document.querySelector(".last-clear");

// const equalEl = document.querySelector(".equal");

// const negateEl = document.querySelector(".negate")

// let dispHistoryNum = "";
// let displWorkNum = "";
// let result = null;
// let lastOperation = "";
// let haveDot = false;


// numbersEl.forEach(number => {
//     number.addEventListener("click", (e) => {
//         if (e.target.innerText === "." && !haveDot) {
//             haveDot = true;
//         } else if (e.target.innerText === "." && haveDot) {
//             return;
//         }

//         displWorkNum += e.target.innerText;
//         displayWorkEl.innerText = displWorkNum;

//     })
// });



// operationEl.forEach(operation => {
//     operation.addEventListener('click', (e) => {
//         if (!displWorkNum) {
//             displWorkNum += 0;
//         }
//         haveDot = false;
//         const operationName = e.target.innerText;
//         if (dispHistoryNum && displWorkNum && lastOperation) {
//             mathOperation();
//         } else {
//             result = parseFloat(displWorkNum);
//         }
//         clearVar(operationName);
//         lastOperation = operationName;
//         console.log(result);
//     })
// });

// function clearVar(name = '') {
//     dispHistoryNum += displWorkNum + ' ' + name + ' ';
//     displayHistoryEl.innerText = dispHistoryNum;
//     displayWorkEl.innerText = '';
//     displWorkNum = '';
//     tempResEl.innerText = result;
// }


// function mathOperation() {
//     if (lastOperation === '+') {
//         result = parseFloat(result) + parseFloat(displWorkNum);
//     } else if (lastOperation === '-') {
//         result = parseFloat(result) - parseFloat(displWorkNum);
//     } else if (lastOperation === 'x') {
//         result = parseFloat(result) * parseFloat(displWorkNum);
//     } else if (lastOperation === '÷') {
//         result = parseFloat(result) / parseFloat(displWorkNum);
//     } else if (lastOperation === '%') {
//         result = parseFloat(result) % parseFloat(displWorkNum);
//     }

// }


// equalEl.addEventListener('click', (e) => {
//     if (!dispHistoryNum || !displWorkNum) return;
//     haveDot = false;
//     mathOperation();
//     clearVar();
//     displayWorkEl.innerText = result;
//     tempResEl.innerText = '';
//     displWorkNum = result;
//     dispHistoryNum = '';
// })


// clearAllEl.addEventListener('click', (e) => {
//     displayHistoryEl.innerText = '0';
//     displayWorkEl.innerText = '0';
//     dispHistoryNum = '';
//     displWorkNum = '';
//     result = '';
//     tempResEl.innerText = '0';
// });


// lastClearEl.addEventListener('click', (e) => {
//     displayWorkEl.innerText = '0';
//     displWorkNum = '';
// });

// negateEl.addEventListener('click', (e) => {
//     displayWorkEl.innerText = -displayWorkEl.innerText;
//     displWorkNum *= -1;
// })


let result = document.getElementById('result');
result.value = null;
let tempValue = document.getElementById('workDisplay');
tempValue.value = null;

const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

// --- numbers
number.forEach(num => {
    num.addEventListener("click", (e) => {
        // if (e.target.innerText === "." && !haveDot) {
        //     haveDot = true;
        // } else if (e.target.innerText === "." && haveDot) {
        //     return;
        // }

        tempValue.value += Number(num.value);
    })
});

// --- history-result
// --- operation

operation.forEach(opp => {
    opp.addEventListener("click", (e) => {

        let val1 = tempValue.value;
        let val2 = result.textContent;

        if (val1 && !val2) {
            val2 += `${val1} ${opp.value} `
            val1 = null;
        } else {
            switch (opp.value) {
                case '+':
                    val2 = Number(val1) + Number(val2)
                    break;
            }
        }

    });
});

// --- clear-temp-value

const lastClearEl = document.getElementsByClassName("last-clear")[0];
lastClearEl.addEventListener("click", (e) => {
    tempValue.value = null;
});

// --- clear-ALL

const clearAll = document.getElementsByClassName('all-clear')[0];
clearAll.addEventListener("click", (e) => {
    tempValue.value = null;
    result.textContent = null;
});