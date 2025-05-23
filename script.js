const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsSymbolEl = document.querySelector(".equals-symbol")
const numberInputEl = document.querySelector(".number-input");

let firstNumber = "";
let secondNumber = "";
let operatorSymbol = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const value = number.textContent;

        if (!operatorSymbol) {
            firstNumber += value;
            renderNumbers(firstNumber);
        } else {
            secondNumber += value;
            renderNumbers(secondNumber);
        }
        
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (operatorSymbol && secondNumber) {
            equalsSymbolEl.click();
        }
        const symbol = operator.textContent;
        operatorSymbol = symbol;
        console.log(operatorSymbol)
    })
})


equalsSymbolEl.addEventListener("click", () => {
    const result = calculate(parseInt(firstNumber), operatorSymbol, parseInt(secondNumber));
    renderNumbers(result);

    // Change the values for inputs 
    firstNumber = result;
    secondNumber = "";
    operatorSymbol = "";
})

const renderNumbers = (num) => {
    numberInputEl.textContent = num;
}

const calculate = (num1, operator, num2) => {
    
    if (operator === "+") {
        return addition(num1, num2);
    } else if (operator === "-") {
        return  subtraction(num1, num2);
    } else if (operator === "*") {
        return multiplication(num1, num2);
    } else {
        return division(num1, num2);
    }

}

const addition = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    return num1 - num2;
}

const multiplication = (num1, num2) => {
    return num1 * num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}

