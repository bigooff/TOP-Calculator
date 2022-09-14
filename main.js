
const topOutput = document.querySelector(".upper-right");
const botOutput = document.querySelector(".lower-right");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const numArray = Array.from(numberBtns);
const opsArray = Array.from(operationBtns);
let operationChain = [];
let displayValue;


deleteBtn.addEventListener("click", ()=>{
   if(operationChain.length >= 1){return;}
   botOutput.textContent = botOutput.textContent.slice(0 , -1)
});


clearBtn.addEventListener("click", ()=>{
   operationChain = [];
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


let opResult;
let chosenOperation;
let prevOperation;
opsArray.forEach((operation) => {
   operation.addEventListener("click", ()=>{
      operationChain.push(chosenOperation)
      if(botOutput.textContent === ""){return;}
      chosenOperation = operation.textContent;
      
      if(topOutput.textContent !== ""){
         prevOperation = operationChain[operationChain.length - 1]
         // console.log(prevOperation);
         // console.log(operationChain);
         currentOperand = parseFloat(botOutput.textContent);
         previousOperand = parseFloat(topOutput.textContent);
         opResult = operate(previousOperand,currentOperand,prevOperation)       
         topOutput.textContent = opResult + " " + chosenOperation;
         botOutput.textContent = "";
         return;
      }
      opResult = operate(previousOperand,currentOperand,chosenOperation) 
      topOutput.textContent = botOutput.textContent + " " + operation.textContent;
      botOutput.textContent = "";
      return;
      // console.log(chosenOperation);
   })
})


let previousOperand;
let currentOperand;
equalsBtn.addEventListener("click", ()=>{
   let result;
    currentOperand = parseFloat(botOutput.textContent);
    previousOperand = parseFloat(topOutput.textContent);
   if(topOutput.textContent === "" || isNaN(currentOperand) || isNaN(previousOperand)){return;}
   result = operate(previousOperand,currentOperand,chosenOperation)
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
       if(firstNum === 0 || secondNum === 0){return "Division by 0 is prohibited"}
       return divide(firstNum,secondNum)
    }
}