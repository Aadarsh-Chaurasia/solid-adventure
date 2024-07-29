let result = document.querySelector('.result');
let equation = document.querySelector('.equation');
// result.innerHTML = "8371";
// console.log(equation.innerHTML);

function add(event) {
    let value = event.target.id; // Get the value from the button that was clicked
    console.log(`${value} clicked`);
    equation.innerHTML += value; // Append the value to the content of the equation element
    evaluate();
}

let buttons = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.'];

buttons.forEach(element => {
    document.getElementById(element).addEventListener("click", add);
});


// Adding AC
document.getElementById('AC').addEventListener("click", ()=> {
    equation.innerHTML = '';
    result.innerHTML = ""});

// Adding X
document.getElementById("X").addEventListener("click", ()=> equation.innerHTML = equation.innerHTML.slice(0, equation.innerHTML.length-1));

// Adding equal
function evaluate(){
    let val;
    let len = equation.innerHTML.length;
    if(['+', '-','*', '/', '%', '.'].includes(equation.innerHTML.charAt(len-1))){
        val = eval(equation.innerHTML.slice(0,len-1));
    }
    else{
        val = eval(equation.innerHTML);
    }
    
    result.innerHTML = val;
}

function equal(){
    evaluate();
    equation.innerHTML  = result.innerHTML;
    result.innerHTML = '';
}
document.getElementById('equal').addEventListener("click", equal);