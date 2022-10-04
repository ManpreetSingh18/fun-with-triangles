const quizForm=document.querySelector('.quiz-form');
const submitAnswerBtn=document.querySelector('#submit-answer-btn');
const outputEl=document.querySelector('#output');
const correctAnswer=["90","rightangle","3","Equilateral"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults= new FormData(quizForm);

    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score++;
        } 
        index++;
    }
    outputEl.innerText="Your Score is "+score;

}
submitAnswerBtn.addEventListener('click',calculateScore);
