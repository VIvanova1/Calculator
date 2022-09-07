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