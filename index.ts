import { type } from "os";
import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/" | "%";

function main(): void {
  const firstVal = question("Enter first number : ");
  const operator = question("Enter operator : ");
  const secondVal = question("Enter second number : ");

  const isValidInput =
    isNum(firstVal) && isOperator(operator) && isNum(secondVal);

  if (isValidInput) {
    const firstNum: number = parseInt(firstVal);
    const secondNum: number = parseInt(secondVal);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log("Result : " + result);
  } else {
    console.log("Enter valid Input \n");
    main();
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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

function isOperator(opr: string): boolean {
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

function isNum(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum = !isNaN(maybeNum);
  return isNum;
}

main();
