var startBtn = $("#game-btn");
var askQuestion =$(".quesHead");
var timeEl = $("#timer");
var scoreList = $("#scoreList");
var timerText = $("#timer");
var gameBtn = $(".ansBox");
var showQuestion = $("#start");
var ansBtn1 = $("#answer1");
var ansBtn2 = $("#answer2");
var ansBtn3 = $("#answer3");
var ansBtn4 = $("#answer4");
var questionCount = 0;
var rightWrong = $("#rightWrong");
var list = $(".colList")
var resetScoreBtn = $("#resetScoreBtn")

// Object for question, answer, 
var questAnswers = [
    {
        question: "Wednesday's favorite toy is a:",
        answers: ["stick", "frog", "ball", "carpet square"],
        correctAnswer: "3"
    },
    {
        question: "What color is Lorelai?",
        answers: ["black", "yellow", "brown", "pink"],
        correctAnswer: "3"
    },
    {
        question: "Sam is...",
        answers: ["gigantic", "fluffy", "made of wood", "bada** mf"],
        correctAnswer: "4"
    },
    {
        question: "Cletus is..",
        answers: ["super cuddly", "really big", "my best bud", "all of the above"],
        correctAnswer: "4"
    },
    {
        question: "Lorelai is hungry when?",
        answers: ["morning", "afternoon", "both a & b", "none of the above"],
        correctAnswer: "3"
    },
    {
        question: "Lorelai is hungry when?",
        answers: ["morning", "afternoon", "both a & b", "none of the above"],
        correctAnswer: "3"
    },
    {
        question: "What vehicle does Pogo Drive?",
        answers: ["dump-truck", "car", "wheel burrow", "snow mobile"],
        correctAnswer: "1"
    },
    {
        question: "What color is watcher?",
        answers: ["pink", "black", "maroon", "yellow"],
        correctAnswer: "4"
    },
    {
        question: "Punkin is a...",
        answers: ["cat", "dog", "turtle", "none of the above"],
        correctAnswer: "1"
    },
    {
        question: "Turbo is a...",
        answers: ["cat", "dog", "turtle", "Rascal"],
        correctAnswer: "3"
    }

];

// game logic
var timer = 40;
var score = 0;


init()
// initilize page
function init() {
    ansBtn1.hide();
    ansBtn2.hide();
    ansBtn3.hide();
    ansBtn4.hide();
   

    renderScores();
    
}

// start game ; click start button
// function

startBtn.on("click", startGame);



gameBtn.on("click", checkAnswer);




// start game



// how do I show the answers to the text content
// and how do I show the answer
function startGame() {
    ansBtn1.show();
    ansBtn2.show();
    ansBtn3.show();
    ansBtn4.show();
    askQuestion.show();
    
    setQuestion(questionCount)

   
    timer = 40;
    score = 0;
    // START TIMER
   
    var gameTimer = setInterval(function () {
        timer--;
        timerText.text("Time Remaining: " + timer);

        if (timer === 0 || questionCount === questAnswers.length) {
            
            clearInterval(gameTimer);
            endGame()
        }

        

    }, 1000);
}


function setQuestion(id) {
    if (id < questAnswers.length) {
        askQuestion.text(questAnswers[id].question);
        ansBtn1.text(questAnswers[id].answers[0]);
        ansBtn2.text(questAnswers[id].answers[1]);
        ansBtn3.text(questAnswers[id].answers[2]);
        ansBtn4.text(questAnswers[id].answers[3]);   
    } 
    
}


function checkAnswer(event) {
    event.preventDefault();
    
        
        if (questAnswers[questionCount].correctAnswer === event.target.value) {
            score++ ;
        } else if (questAnswers[questionCount].correctAnswer !== event.target.value) {
            timer = timer -5 ;
        }

        if (questionCount < questAnswers.length) {
            questionCount++;
            
        }
        
        
        // call setQuestion to bring in next question when any ansBtn is clicked
    setQuestion(questionCount);
    
        
    };





function endGame() {
    console.log("game over");
    timerText.text("");
    ansBtn1.hide();
    ansBtn2.hide();
    ansBtn3.hide();
    ansBtn4.hide();
    askQuestion.text("Game Over");
    questionCount = 0;
    

    var initials = prompt("You got, " + score + " Please enter your initials");
    var currentScores = JSON.parse(localStorage.getItem("score")) || []
    var userObj = {
        initials,
        score
    };

    currentScores.push(userObj)
    localStorage.setItem("score", JSON.stringify(currentScores));
    renderScores();
        
}

function renderScores() {
    var currentScores = JSON.parse(localStorage.getItem("score")) || [];
    
    scoreList.push({ score });

    scoreList.innerHTML = "";
    if (scoreList.length === 0) {
        return scoreList.text("No scores yet")
    };

    for (let i = 0; i < currentScores.length; i++) {
        var scoreObj = currentScores[i];
        var newLi = $("<li>", {
            class: "list-group-item",
            
        });
            
        newLi.text(scoreObj.initials + " = " + scoreObj.score);
        scoreList.append(newLi);


    }
}



function renderquestion() {
    questAnswers.attr('src', questAnswers[questionCount])

}

var listGroup = $(".list-group-item")
resetScoreBtn.on("click", function() {
    localStorage.clear();
    scoreList.innerHTML = "";
});




// Endgame















    
    















