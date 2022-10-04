

const sides=document.querySelectorAll('.side-input');

const hypotenuseBtn =document.querySelector('#hypotenuse-btn');

const outputEl=document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSquares = 1/2*a * b;
    return sumOfSquares;
    //console.log(sumOfSquares);
}
function calculateHypotenuse(){
    const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    
   
    
    outputEl.innerText="The Area of triangle is:"+sumOfSquares;
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);