//Task 1a

let number = prompt("Please enter a number: ");
number = parseFloat(number);
let refToTask1 = document.querySelector(".task1");
refToTask1.innerHTML = "Quantity: "+number;

//Task 1b

let percentageAmount = prompt("Enter a percentage amount: ")
percentage = parseFloat(percentageAmount);
let refToTask1b = document.querySelector(".task1b");
let calculatedPercentage = (percentage / 100) * number;
let displayString =`${percentage}% of ${number} is ${calculatedPercentage}`;
refToTask1b.innerHTML = displayString;

//Task2
let points = prompt("Give me your exam point: ");
points = parseFloat(points);

if (isNaN(points) || points < 0 || points > 100) {
    alert("Please input a value between 0 - 100")
} else {
    let ifStr = "The grade on 'if' is: ";
    if (points > 90) ifStr += "A";
    else if (points > 80) ifStr += "B";
    else if (points > 70) ifStr += "C";
    else if (points > 60) ifStr += "D";
    else if (points <= 60) ifStr += "F";
    else ifStr += "invalid";

    let refToTask2 = document.querySelector(".task2");
    refToTask2.innerHTML = ifStr;


//Task 2b

 let switchStr = "The grade of 'switch' is: ";
 switch (true) {
    case points > 90:
            switchStr += "A";
            break;
        case points > 80:
            switchStr += "B";
            break;
        case points > 70:
            switchStr += "C";
            break;
        case points > 60:
            switchStr += "D";
            break;
        case points <=60:
            switchStr += "F";
            break;
        default:
            switchStr += "Invalid"
    }
    

let refToTask2b = document.querySelector(".task2b");
    refToTask2b.innerHTML = switchStr;
}
// Task3

let profname = prompt("Name of professor punishing harry");
let line = prompt("What to write:");
let numLine = prompt("How many lines: ")
numLine = parseInt(numLine);
for (let lineNum = 1; lineNum <= numLine; lineNum++) {
    console.log(lineNum + " : " + line)
}

//Task 4
let displayStr = ""
let lineNum = 1;
while (lineNum <= numLine) {
    displayStr += `${lineNum} : ${line}<br>`;
    lineNum++
}
let refToTask4 = document.querySelector(".task4");
refToTask4.innerHTML = displayStr;


//Task 5
const arrowLines = () => {
    let lineNum = 1;
    let displayStr = "";
    while (lineNum <= numLine) {
        displayStr += `${lineNum} : ${line}<br>`;
        lineNum++
    }
    let refToTask5 = document.querySelector(".task5");
    refToTask5.innerHTML = displayStr; 
}
arrowLines()

//Task 6
let timesTableStr = "Times table 6a<br>";
for (let factor1 = 1; factor1 <=12; factor1++){
    for (let factor2 = 1; factor2 <=12; factor2++){
        timesTableStr += `${factor1} x ${factor2} = ${factor1 * factor2}<br>`;
    }
}
let refToTask6a = document.querySelector(".task6a");
    refToTask6a.innerHTML = timesTableStr;
    
//Task 6b
let createTable = (factor1) =>{
    let timesTableStr ="";
    for (let factor2 =1; factor2 <=12; factor2++){
        timesTableStr += `${factor1} X ${factor2} = ${factor1 * factor2}<br>` 
    }
    return timesTableStr;
};
let allTable = "Times table 6b<br>";
for(let factor1 = 1; factor1 <=12; factor1++){
    allTable += createTable(factor1)
}
let refToTask6b = document.querySelector(".task6b");
    refToTask6b.innerHTML = allTable;

//Task 6c
const createTableTo = (factor1, delimiter) => {
    let timesTableStr = "";
    let factor2 = 1;

    while (factor2 <= delimiter) {
        timesTableStr += `${factor1} x ${factor2} = ${factor1 * factor2}<br>`;
        factor2++;
    }

    return timesTableStr;
};

const allTables = (delimiter) => {
    let timesTableStr = "Times Table 6C<br>";
    let factor = 1;

    while (factor <= 12) {
        timesTableStr += createTableTo(factor, delimiter);
        factor++;
    }

    let refToTask6c = document.querySelector(".task6c");
    refToTask6c.innerHTML = timesTableStr;
};
allTables(10);

//Task 7
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the
// current scope (to the top of the current script or the current function).
//a) Function Hositing in context of a Function
//  JavaScript function declarations to the top of their containing scope.
//  This means that you can call afunction before its actual declaration appears in the code.
//b) Variable hoisting is when using var to declear a variable before it is used. 

//Example of function hoisting 
functionHoisting ();

function functionHoisting(){
    console.log("The function is a hosted function")
}
//Example of variable hoisting 
console.log(webProg);
var webProg = "javascript programming is fun";
console.log(webProg)
//explain how the ECMA standards resolved the issue of hoisting.

 //The EMCA standard did not resolved the issue of hoisting but explain 
 //as hoisting was never deemed a problem. 
 //The EMCA explaind hoisting by specifying that variable and function 
 //declarations are hoisted to the top of the scope but the assignment of variable 
 //and function are never hoisted. 
