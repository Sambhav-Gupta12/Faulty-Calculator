let a = 2;
let b = 6

function sum(a , b) {
    console.log(a + b);
}

function difference(a , b) {
    console.log(a - b);
}

function multi(a , b) {
    console.log(a * b);
}

function divide(a , b) {
    console.log(a / b);
}

function expo(a , b) {
    console.log(a ** b);
}

if (Math.random() > 0.1) {
    sum(a,b);
}

else{
    difference(a,b);
}

if (Math.random() > 0.1) {
    multi(a,b);
}

else{
    sum(a,b);
}

if (Math.random() > 0.1) {
    difference(a,b);
}

else{
    divide(a,b);
}

if (Math.random() > 0.1) {
    divide(a,b);
}

else{
    expo(a,b);
}

