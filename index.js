"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstVal = (0, readline_sync_1.question)("Enter first number : ");
    var operator = (0, readline_sync_1.question)("Enter operator : ");
    var secondVal = (0, readline_sync_1.question)("Enter second number : ");
    var isValidInput = isNum(firstVal) && isOperator(operator) && isNum(secondVal);
    if (isValidInput) {
        var firstNum = parseInt(firstVal);
        var secondNum = parseInt(secondVal);
        var result = calculate(firstNum, operator, secondNum);
        console.log("Result : " + result);
    }
    else {
        console.log("Enter valid Input \n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        case "%":
            return firstNum % secondNum;
    }
}
function isOperator(opr) {
    switch (opr) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return true;
        default:
            return false;
    }
}
function isNum(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
