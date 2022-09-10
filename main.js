const topOutput = document.querySelector(".upper-right");
const botOutput = document.querySelector(".lower-right");
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const symbols = ["/","+","-","=","*","AC","DEL"]
const buttonsArr = Array.from(buttons);
let nextDisplayValue;
let displayValue;
let count = 0;

buttonsArr.map(btn => {
   btn.addEventListener("click",()=>{
      if(symbols.includes(btn.textContent)){
         botOutput.textContent += btn.textContent
         // console.log(operate(displayValue,nextDisplayValue(),btn.textContent))
      }else{
         botOutput.textContent += btn.textContent
         displayValue = botOutput.textContent
      }
      console.log(displayValue);
   }) 
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