const question = [
    {
        question: "Which is India’s first super computer?",
        answer: [
            { text:"Param8000", correct: true},
            { text:"param80000", correct: false},
            { text:"param800", correct: false},
            { text:"param8", correct: false},
        ]
    },
    {
        question: "Which bank is called bankers Bank of India?",
        answer: [
            { text:"Reserve Bank of India", correct: true},
            { text:"Punjab National Bank", correct: false},
            { text:"monState Bank of India", correct: false},
            { text:"ICICI Bank", correct: false},
        ]

    },
    {
        question: "which is the largest animal?",
        answer: [
            { text:"shark", correct: false},
            { text:"blue whale", correct: true},
            { text:"monkey", correct: false},
            { text:"elephant", correct: false},
        ]
    },
    {
        question: "Which of the following is the correct usage of conditional operators used in C?",
        answer: [
            { text:"a>b ? c=30 : c=40", correct: false},
            { text:"a>b ? c=30", correct: false},
            { text:"max = a>b ? a>c?a:c:b>c?b:c", correct: true},
            { text:"return (a>b)?(a:b)", correct: false},
        ]
    },
    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        answer: [
            { text:"15", correct: false},
            { text:"16", correct: true},
            { text:"18", correct: false},
            { text:"25", correct: false},
        ]
         
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
   
}
function showQuestion(){
    resetState();
   let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    //questionElement.innerHTML = questionNo +"."+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


        
    });

}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", (event)=>{
    if(currentQuestionIndex < question.length){
       handleNextButton();
    }else{
        startQuiz();

    }
});
startQuiz();
// const countdownElement = document.getElementById("countdown");
// const timerElement = document.getElementById("timer");

// const totalSeconds = 60;
// let secondsRemaining = totalSeconds;
// let countdownInterval;

// function startTimer() {
//     countdownInterval = setInterval(() => {
//         countdownElement.textContent = secondsRemaining;

//         if (secondsRemaining <= 0) {
//             clearInterval(countdownInterval);
//             showScore(); 
//         }

//         secondsRemaining--;
//     }, 1000); 
// }

// function startQuiz() {
    
//     startTimer();
// }
// startQuiz();



