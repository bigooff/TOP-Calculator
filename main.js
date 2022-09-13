const topOutput = document.querySelector(".upper-right");
const botOutput = document.querySelector(".lower-right");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const numArray = Array.from(numberBtns);
const opsArray = Array.from(operationBtns);
let displayValue;

deleteBtn.addEventListener("click", ()=>{
   botOutput.textContent = botOutput.textContent.slice(0 , -1)
});
clearBtn.addEventListener("click", ()=>{
   topOutput.textContent = "";
   botOutput.textContent = "";
});
numArray.forEach((num)=>{
   num.addEventListener("click",()=>{
      if(num.textContent === "." && botOutput.textContent.includes(".")) { return; }
      displayValue = num.textContent
      botOutput.textContent += displayValue;
      // console.log(displayValue);
   })
});

opsArray.forEach((operation) => {
   operation.addEventListener("click", ()=>{
      if(botOutput.textContent === ""){return;}
      topOutput.textContent = botOutput.textContent + " " + operation.textContent;
      botOutput.textContent = "";
      chosenOperation = operation.textContent;
      // console.log(chosenOperation);
   })
})


let chosenOperation;
equalsBtn.addEventListener("click", ()=>{
   if(topOutput.textContent === ""){return;}
   let currentOperand = parseFloat(botOutput.textContent);
   let previousOperand = parseFloat(topOutput.textContent);
   let result = operate(previousOperand,currentOperand,chosenOperation)
   topOutput.textContent = "";
   botOutput.textContent = result;
})

function add(a,b){return a + b;}
function divide(a,b){return a / b;}
function multiply(a,b){return a * b;}
function subtract(a,b){return a - b;}

function operate(firstNum,secondNum,operator){
    if(operator === "+"){
       return add(firstNum,secondNum);
    }else if(operator === "-"){
       return subtract(firstNum,secondNum);
    }else if(operator === "*"){
       return multiply(firstNum,secondNum);
    }else if(operator === "/"){
       return divide(firstNum,secondNum)
    }
}