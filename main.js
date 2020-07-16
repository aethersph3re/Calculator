function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = Number(num1) / Number(num2);
    return result;
}

function add(num1, num2) {
    let result = Number(num1) + Number(num2);
    return result;
}

function subtract(num1, num2) {
    let result = Number(num1) - Number(num2);
    return result;
}

function modulus(num1, num2) {
    let result = Number(num1) % Number(num2);
    return result;
}

function allClear(val) {
    document.getElementById("output").innerHTML = ""
}

function storeValue(val) {
    let outputbox = document.getElementById("output");
    if (parseInt(val) >=0 && parseInt(val) <=9)
    {
        outputbox.innerHTML = outputbox.innerHTML+val;
    }
    else if (val == ".") {
        outputbox.innerHTML = outputbox.innerHTML+val;
    }
    else
    {
        outputbox.innerHTML = outputbox.innerHTML+" "+val+" ";
    }
}

function calculate() {
    let outputbox = document.getElementById("output");
    let calculation = outputbox.innerHTML.split(" ");
    let operand1 = calculation[0];
    let operand2 = calculation[2];
    let operator = calculation[1];

    if (operator == "/") {
        result = divide(operand1, operand2);
    }
    else if (operator == "*") {
        result = multiply(operand1, operand2)
    }
    else if (operator == "+") {
        result = add(operand1, operand2)
    }
    else if (operator == "-") {
        result = subtract(operand1, operand2)
    }
    else if (operator == "%") {
        result = modulus(operand1, operand2)
    }
 
    outputbox.innerHTML = result;

    // fx = outputbox.innerHTML;
    
}


