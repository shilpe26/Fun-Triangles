const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-ans-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = ["90", "right angle"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formresults = new FormData(quizForm);
    console.log(formresults);
    for(let value of formresults.values()){
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index = index+1;
    }
    // console.log(score);
    outputE1.innerText = "Score is "+ score;
    document.querySelector('#output').style.cssText = ` margin: auto;
    text-align: center;
    border:1px solid #B97A95;
    width: 25%;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    background: linear-gradient(to right, #F6AE99,#B97A95);
    border-radius: 5px;`;
}

submitBtn.addEventListener("click", calculateScore);