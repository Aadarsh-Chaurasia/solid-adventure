number  = prompt("Enter the number: ");
console.log(number)

// function factorial(number) {
//     if (number == 1){
//         return 1;
//     }
//     return number * factorial(number-1);
// }

const factorial = (n)=>{
    if (n == 1){
        return 1;
    }
    return factorial(n-1);
};

console.log(`The factorial of ${number} is ${factorial(number)}`);
