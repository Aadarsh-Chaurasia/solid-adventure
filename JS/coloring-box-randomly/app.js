
let  boxes = document.getElementsByClassName("box")

// Since boxes variable is HTMLCollection and NOT an array, we can't directly iterate over it.

let boxArray = Array.from(boxes)

function getRandomColor(){
    // to to get random no.b/w a and b, do [a + r(b-a)]
    let r = Math.ceil(0 + Math.random() *(255));
    let g = Math.ceil(0 + Math.random() *(255));
    let b = Math.ceil(0 + Math.random() *(255));
    let a = Math.ceil(0 + Math.random() *(10));
    // Math.ceil(n) act as G.I.F
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

boxArray.forEach(box => {
    box.style.backgroundColor = getRandomColor();
    box.style.Color = getRandomColor();
});