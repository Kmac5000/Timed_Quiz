var startBtn = $("#game-btn");
var askQuestion =$(".quesHead");
var timeEl = $("#timer");
var scoreList = $("#high-scores");
var timerText = $("#game-timer");
var gameBtn = $(".ansBox");
var showQuestion = $("#start");
var ansBtn1 = $("#answer1");
var ansBtn2 = $("#answer2");
var ansBtn3 = $("#answer3");
var ansBtn4 = $("#answer4");
var questionCount = 0;
var rightWrong = $("#rightWrong");


// Object for question, answer, true/false
var questions = [
    {
        question: "Wednesday's favorite toy is a:",
        answers: ["stick", "frog", "ball", "carpet square"],
        correctAnswer: "3"
    },
    {
        question: "What color is Lorelia?",
        answers: ["black", "yellow", "brown", "pink"],
        correctAnswer: "3"
    },
    {
        question: "Sam is...",
        answers: ["gigantic", "fluffy", "made of wood", "bada** mf"],
        correctAnswer: "4"
    },
    {
        question: "Cletus was..",
        answers: ["super cuddly", "really big", "my best bud", "all of the above"],
        correctAnswer: "4"
    },
    {
        question: "Lorelia is hungry when?",
        answers: ["morning", "afternoon", "both a & b", "none of the above"],
        correctAnswer: "3"
    }
];

// game logic
var timer = 20;
var currentIndex = 0;


init()
// initilize page
function init() {
    ansBtn1.hide();
    ansBtn2.hide();
    ansBtn3.hide();
    ansBtn4.hide();
    // askQuestion.hide();

    renderScores();
    setAnswer();
}

// start game ; click start button
// function

startBtn.on("click", startGame);
gameBtn.on("click", checkAnswer);


// start game
function startGame() {
    ansBtn1.show();
    ansBtn2.show();
    ansBtn3.show();
    ansBtn4.show();
    askQuestion.show();
    timer = 20;
    score = 0;
    // START TIMER
    var gameTimer = setInterval(() => {
        timer--
        timerText.text("Time Remaining: " + timer)

        if (timer === 0) {

            clearInterval(gameTimer)
            endGame()
        }

    }, 1000);
}


function setAnswer(id) {
    if (id < questions.length) {
        askQuestion.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];   
    } 
   
}


function checkAnswer(event) {
        event.preventDefault();


        
        if (questions[questionCount].correctAnswer === event.target.value) {
            alert("Awesome!");
        } else if (questions[questionCount].correctAnswer !== event.target.value) {
            alert("Not to good!");
        }

        if (questionCount < questions.length) {
            questionCount++;
        }
        // call setQuestion to bring in next question when any ansBtn is clicked
        setAnswer(questionCount);
    };





function endGame() {
    console.log("game over");
    timerText.text("Time remaining: 0");
    ansBtn1.hide();
    ansBtn2.hide();
    ansBtn3.hide();
    ansBtn4.hide();
    askQuestion.hide();

    var initials = prompt("Your score, " + score + " Please enter your initials");
    var currentScores = JSON.parse(localStorage.getItem("score")) || [];
    var userObj = {
        initials,
        score
    }

    currentScores.push(userObj)
    localStorage.setItem("score", JSON.stringify(currentScores));
    renderScores();
        
}

function renderScores() {
    var currentScores = JSON.parse(localStorage.getItem("score")) || [];
    scoreList.empty();
    if (scoreList.length === 0) {
        return scoreList.text("No scores yet")
    };

    for (let i = 0; i < currentScores.length; i++) {
        const scoreObj = currentScores[i];
        var newLi = $("<li>", {
            class: "list-group-item"
        });
        newLi.text(scoreObj.initials + " = " + scoreObj.score)
        scoreList.append(newLi)


    }
}



function renderquestion() {
    questions.attr('src', questions[questionCount])

}

localStorage.setItem(JSON.stringify(userObj));


// Endgame















    
    















