var startBtn = document.querySelector(".startBtn");
var askQuestion = ".quesHead";


// Object for question, answer, true/false
var questions = [ // array of objects
    {
        // question 0
        question: "Wednesday's favorite toy is a:",
        answers: ["stick", "frog", "ball", "carpet square"],
        correctAnswer: "3"
    },
    {
        // question 1
        question: "What color is Lorelia?",
        answers: ["black", "yellow", "brown", "pink"],
        correctAnswer: "3"
    },
    {
        // question 2
        question: "Sam is...",
        answers: ["gigantic", "fluffy", "made of wood", "bada** mf"],
        correctAnswer: "4"
    },
    {
        // question 3
        question: "Cletus was..",
        answers: ["super cuddly", "really big", "my best bud", "all of the above"],
        correctAnswer: "4"
    },
    {
        // question 4
        question: "Lorelia is hungry when?",
        answers: ["morning", "afternoon", "both a & b", "none of the above"],
        correctAnswer: "3"
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


        
        if (questions[questionCount].correctAnswer === event.target.value) {
            alert("Correct! "  + questions[questionCount].correctAnswer);
        } else if (questions[questionCount].correctAnswer !== event.target.value) {
            alert("Wrong! " +  questions[questionCount].correctAnswer);
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

