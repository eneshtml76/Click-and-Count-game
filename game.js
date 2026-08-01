const startBtn = document.getElementById("startBtn");

const gameArea = document.getElementById("gameArea");

const answerArea = document.getElementById("answerArea");

const answerInput = document.getElementById("answer");

const checkBtn = document.getElementById("checkBtn");


const scoreText = document.getElementById("score");

const highScoreText = document.getElementById("highScore");

const timerText = document.getElementById("timer");



let score = 0;

let highScore = localStorage.getItem("highScore") || 0;

let correctAnswer = 0;

let time = 30;

let timer;



highScoreText.textContent = "High Score: " + highScore;



// Start Game

startBtn.onclick = function () {


    score = 0;

    time = 30;


    scoreText.textContent = "Score: " + score;

    timerText.textContent = "Time: " + time;


    answerArea.style.display = "block";


    clearInterval(timer);



    timer = setInterval(function () {


        time--;


        timerText.textContent = "Time: " + time;



        if (time <= 0) {


            clearInterval(timer);


            gameArea.innerHTML = "";


            answerArea.style.display = "none";


            alert("Game Over! Your score: " + score);



            if (score > highScore) {


                highScore = score;


                localStorage.setItem(
                    "highScore",
                    highScore
                );


                highScoreText.textContent =
                "High Score: " + highScore;

            }

        }


    }, 1000);



    createRound();

};





// Create circles

function createRound() {


    gameArea.innerHTML = "";


    correctAnswer = Math.floor(
        Math.random() * 10
    ) + 3;



    for (
        let i = 0;
        i < correctAnswer;
        i++
    ) {


        const circle =
        document.createElement("div");


        circle.className = "circle";


        gameArea.appendChild(circle);


    }

}





// Check Answer

checkBtn.onclick = function () {


    const userAnswer =
    Number(answerInput.value);



    if (userAnswer === correctAnswer) {


        score++;


        scoreText.textContent =
        "Score: " + score;


    }



    answerInput.value = "";


    createRound();


};






// Press Enter to check answer

document.addEventListener(
    "keydown",
    function(event) {


        if (event.key === "Enter") {


            checkBtn.click();


        }


    }
);