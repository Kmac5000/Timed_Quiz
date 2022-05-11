var startBtn = document.querySelector(".startBtn");
var askQuestion = ".quesHead";


// Object for question, answer, true/false
var questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4"
    }
];





// 
let questionEl = document.querySelector(".quesHead");
let questionCount = 0;
const rightWrong = document.querySelector("#rightWrong");

var ansBtn1 = document.querySelector("#answer1");
var ansBtn2 = document.querySelector("#answer2");
var ansBtn3 = document.querySelector("#answer3");
var ansBtn4 = document.querySelector("#answer4");



 

function setAnswer(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];   
    } 
   
}

$(".ansBox").on("click",
    function checkAnswer(event) {
        event.preventDefault();


        
        if (questions.correctAnswer === event.target.value) {
            alert("Correct!");
        } else if (questions.correctAnswer !== event.target.value) {
            alert("Wrong!");
        }

        if (questionCount < questions.length) {
            questionCount++;
        }
        // call setQuestion to bring in next question when any ansBtn is clicked
        setAnswer(questionCount);
    });

function startQuiz() {
    // questions.style.display = "none";
    // questionEl.style.display = "block";
    questionCount = 0;

    
    setAnswer(questionCount);
    
}


// start button event listener
$(".startBtn").on("click", function () {
    alert("boom");

});


    
    













startQuiz()

