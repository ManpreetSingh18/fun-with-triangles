const inputs=document.querySelectorAll('.angle-input');
var isTriangleBtn=document.querySelector('#is-triangle-btn');
const outputEl=document.querySelector('#output');

function  calculateSumOfAngles(angle1,angle2 ,angle3){
    const sumOfAngels=angle1 +angle2 +angle3;
    return sumOfAngels;
}
function isTriangle(){
    
    const sumOfAngels=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if(sumOfAngels === 180){
        console.log("Yay,The angles form a triangle");
    }else{
        console.log("Oh Oh! The angles don't form a triangle");
    }

    // console.log(inputs[0].value ,inputs[1].value,inputs[2].value)
}

isTriangleBtn.addEventListener("click",isTriangle);