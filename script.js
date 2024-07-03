let left;
let operator;
let right;

function storeNumber(num){
    //check if the left variable is stored
    //if the variable is not stored, store a variable
    //else store in the right
    if(left === null || left === undefined) {
        left = num;
    }else{
        right = num;
    }
    displayToScreen();
}

function storeOperator(op){
    operator = op;
    displayToScreen();
}

function displayToScreen(){
    document.getElementById("screen").textContent = `${left ?? ""} ${operator ?? ""} ${right ?? ""}`;
}

function calculateResult(){
    //compare the operators using if statement
    //if operator = +, return left+right;
    //if operator = -, return left-right;
    //if operator = *, return left*right;
    //if operator = /, return left/right

    let result;
    
    if(operator == "+"){
        result = (left+right);
    }if(operator == "-"){
        result = (left-right);
    }if(operator == "*"){
        result = (left*right);
    }if(operator == "/"){
        result = (left/right);
    }
    document.getElementById("screen").textContent = `${left ?? ""} ${operator ?? ""} ${right ?? ""} = ${result} `;
}

function clearScreen(){
    //change the variables back to their original state
    //change the left variable back to its original state
    //do the same for the operator and the right
    //assign them to the screen content
    left = undefined;
    right = undefined;
    operator = "";

    document.getElementById("screen").textContent = `${left ?? ""} ${operator ?? ""} ${right ?? ""}`;
}
//to store a function, it has to be turned to a string cause of the format for the local storage
//the key: storingCalculations
//the value: calculateResult.toString()
//this particular function is used because, this is the function where the calculation is done and displayed to the screen
localStorage.setItem('storingCalculations',calculateResult.toString());

let clear = document.getElementById("clear").addEventListener("click", clearScreen);
let brackets = document.getElementById("brackets");
let percentage = document.getElementById("percentage");
let divide = document.getElementById("divide").addEventListener("click", () =>  storeOperator("/"));

let one = document.getElementById("one").addEventListener("click",() => storeNumber(1));
let two = document.getElementById("two").addEventListener("click", () => storeNumber(2));
let three = document.getElementById("three").addEventListener("click", () => storeNumber(3));
let multiply = document.getElementById("multiply").addEventListener("click", () => storeOperator("*"));

let four = document.getElementById("four").addEventListener("click", () => storeNumber(4));
let five = document.getElementById("five").addEventListener("click", () => storeNumber(5));
let six = document.getElementById("six").addEventListener("click", () => storeNumber(6));
let add = document.getElementById("add").addEventListener("click", () => storeOperator("+"));

let seven = document.getElementById("seven").addEventListener("click", () => storeNumber(7));
let eight = document.getElementById("eight").addEventListener("click", () => storeNumber(8));
let nine = document.getElementById("nine").addEventListener("click", () => storeNumber(9));
let subtract = document.getElementById("subtract").addEventListener("click", () => storeOperator("-"));

let decimalPoint = document.getElementById("decimalPoint");
let zero = document.getElementById("zero").addEventListener("click", () => storeNumber(0));
let tripleZero = document.getElementById("tripleZero");
let result = document.getElementById("result").addEventListener("click", calculateResult);


// let screen = document.getElementById("screen");


// addEventListener(click, function(){
//     alert(1);
// })