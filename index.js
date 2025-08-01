let a = parseFloat(prompt("Enter the First Number"));
let b = parseFloat(prompt("Enter the Second Number"));

function showResult(operationName, actualResult) {
    alert(`The ${operationName} is ${actualResult}`);
    console.log(`The ${operationName} of ${a} and ${b} is ${actualResult}`);
}

// Operation logic with 10% chance of fault
function performOperation(label, correctFn, faultyFn) {
    const isCorrect = Math.random() > 0.1;
    const result = isCorrect ? correctFn(a, b) : faultyFn(a, b);
    showResult(label, result);
}

// Define basic math operations
function sum(x, y) {
    return x + y;
}

function difference(x, y) {
    return x - y;
}

function multi(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function expo(x, y) {
    return x ** y;
}

// Now simulate the operations
performOperation("sum", sum, difference);       // 90% sum, 10% faulty difference
performOperation("multiplication", multi, sum); // 90% multi, 10% faulty sum
performOperation("difference", difference, divide); // etc.
performOperation("division", divide, expo);
