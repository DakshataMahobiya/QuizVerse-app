// =====================================================
// SELECT ELEMENTS
// =====================================================

const startScreen =
    document.querySelector(".startScreen");

const startBtn =
    document.querySelector(".startBtn");

const topicScreen =
    document.querySelector(".topicScreen");

const topicButtons =
    document.querySelectorAll(".topicBtn");

const difficultyScreen =
    document.querySelector(".difficultyScreen");

const difficultyButtons =
    document.querySelectorAll(".difficultyBtn");

const numberScreen =
    document.querySelector(".numberScreen");

const numberButtons =
    document.querySelectorAll(".numberBtn");

const backToTopics =
    document.querySelector("#backToTopics");

const backToDifficulty =
    document.querySelector("#backToDifficulty");

const quizContainer =
    document.querySelector(".quizContainer");

const questionBox =
    document.querySelector(".question");

const choicesBox =
    document.querySelector(".choices");

const nextBtn =
    document.querySelector(".nextBtn");

const timer =
    document.querySelector(".timer");

const alertBox =
    document.querySelector(".alert");

const scoreCard =
    document.querySelector(".scoreCard");

const questionNumber =
    document.querySelector("#questionNumber");

const progressFill =
    document.querySelector(".progressFill");

const quizTopic =
    document.querySelector("#quizTopic");

const quizDifficulty =
    document.querySelector("#quizDifficulty");

const selectedTopicText =
    document.querySelector("#selectedTopicText");

const selectedDifficultyText =
    document.querySelector("#selectedDifficultyText");


// =====================================================
// VARIABLES
// =====================================================

let selectedTopic = "";

let selectedDifficulty = "";

let selectedQuestions = [];

let numberOfQuestions = 5;

let currentQuestionIndex = 0;

let score = 0;

let timeLeft = 15;

let timerID = null;

let quizOver = false;


// =====================================================
// START BUTTON
// =====================================================

startBtn.addEventListener("click", () => {

    startScreen.style.display = "none";

    topicScreen.style.display = "block";

});


// =====================================================
// TOPIC SELECTION
// =====================================================

topicButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedTopic =
            button.dataset.topic;


        const topicName =
            button.querySelector(
                "span:last-child"
            ).textContent;


        selectedTopicText.textContent =
            `${topicName} selected`;


        topicScreen.style.display =
            "none";


        difficultyScreen.style.display =
            "block";

    });

});


// =====================================================
// DIFFICULTY SELECTION
// =====================================================

difficultyButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedDifficulty =
            button.dataset.difficulty;


        const difficultyName =
            selectedDifficulty
                .charAt(0)
                .toUpperCase() +
            selectedDifficulty.slice(1);


        selectedDifficultyText.textContent =
            `${difficultyName} difficulty selected`;


        difficultyScreen.style.display =
            "none";


        numberScreen.style.display =
            "block";

    });

});


// =====================================================
// BACK TO TOPICS
// =====================================================

backToTopics.addEventListener("click", () => {

    difficultyScreen.style.display =
        "none";

    topicScreen.style.display =
        "block";

});


// =====================================================
// BACK TO DIFFICULTY
// =====================================================

backToDifficulty.addEventListener("click", () => {

    numberScreen.style.display =
        "none";

    difficultyScreen.style.display =
        "block";

});


// =====================================================
// NUMBER OF QUESTIONS
// =====================================================

numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        numberOfQuestions =
            Number(button.dataset.number);


        startQuiz();

    });

});


// =====================================================
// RANDOM QUESTION FUNCTION
// =====================================================

const getRandomQuestions =
    (topic, difficulty, count) => {


    // -----------------------------------------------
    // STEP 1:
    // Find questions matching topic AND difficulty
    // -----------------------------------------------

    const filteredQuestions =
        quiz.filter(question => {

            return (
                question.topic === topic &&
                question.difficulty === difficulty
            );

        });


    // -----------------------------------------------
    // STEP 2:
    // Check if enough questions exist
    // -----------------------------------------------

    if (filteredQuestions.length < count) {

        alert(
            `Only ${filteredQuestions.length} ${difficulty} questions are available for this topic.`
        );

        return [];

    }


    // -----------------------------------------------
    // STEP 3:
    // SHUFFLE QUESTIONS
    // Fisher-Yates algorithm
    // -----------------------------------------------

    for (
        let i = filteredQuestions.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            filteredQuestions[i],
            filteredQuestions[j]
        ] =
        [
            filteredQuestions[j],
            filteredQuestions[i]
        ];

    }


    // -----------------------------------------------
    // STEP 4:
    // Take required number
    // -----------------------------------------------

    return filteredQuestions.slice(
        0,
        count
    );

};


// =====================================================
// START QUIZ
// =====================================================

const startQuiz = () => {


    selectedQuestions =
        getRandomQuestions(
            selectedTopic,
            selectedDifficulty,
            numberOfQuestions
        );


    // If not enough questions

    if (
        selectedQuestions.length === 0
    ) {

        return;

    }


    // Reset quiz

    currentQuestionIndex = 0;

    score = 0;

    quizOver = false;

    timeLeft = 15;


    // Hide number screen

    numberScreen.style.display =
        "none";


    // Show quiz

    quizContainer.style.display =
        "block";


    // Get topic name

    const selectedButton =
        document.querySelector(
            `[data-topic="${selectedTopic}"]`
        );


    if (selectedButton) {

        quizTopic.textContent =
            selectedButton.querySelector(
                "span:last-child"
            ).textContent;

    }


    // Difficulty

    quizDifficulty.textContent =
        selectedDifficulty;


    nextBtn.textContent =
        "Next Question →";


    scoreCard.textContent =
        "";


    // Show first question

    showQuestion();

};


// =====================================================
// SHOW QUESTION
// =====================================================

const showQuestion = () => {


    const currentQuestion =
        selectedQuestions[
            currentQuestionIndex
        ];


    // Question

    questionBox.textContent =
        currentQuestion.question;


    // Question number

    questionNumber.textContent =
        `Question ${
            currentQuestionIndex + 1
        } of ${
            selectedQuestions.length
        }`;


    // Progress

    const progress =
        (
            (currentQuestionIndex + 1) /
            selectedQuestions.length
        ) * 100;


    progressFill.style.width =
        `${progress}%`;


    // Remove previous choices

    choicesBox.innerHTML = "";


    // Create choices

    currentQuestion.choices.forEach(
        choice => {


        const choiceDiv =
            document.createElement(
                "div"
            );


        choiceDiv.classList.add(
            "choice"
        );


        choiceDiv.textContent =
            choice;


        choicesBox.appendChild(
            choiceDiv
        );


        // Choice click

        choiceDiv.addEventListener(
            "click",
            () => {


            // Remove selection
            // from all choices

            document
                .querySelectorAll(
                    ".choice"
                )
                .forEach(
                    element => {

                    element.classList.remove(
                        "selected"
                    );

                });


            // Select current

            choiceDiv.classList.add(
                "selected"
            );

        });

    });


    // Start timer

    startTimer();

};


// =====================================================
// CHECK ANSWER
// =====================================================

const checkAnswer = () => {


    const selectedChoice =
        document.querySelector(
            ".choice.selected"
        );


    // No answer selected

    if (!selectedChoice) {

        displayAlert(
            "Please select an answer."
        );

        return;

    }


    const correctAnswer =
        selectedQuestions[
            currentQuestionIndex
        ].answer;


    // Correct

    if (
        selectedChoice.textContent ===
        correctAnswer
    ) {

        score++;

        displayAlert(
            "Correct Answer! ✓"
        );

    }


    // Wrong

    else {

        displayAlert(
            `Wrong Answer! Correct answer: ${correctAnswer}`
        );

    }


    stopTimer();


    currentQuestionIndex++;


    // More questions

    if (
        currentQuestionIndex <
        selectedQuestions.length
    ) {

        timeLeft = 15;

        showQuestion();

    }


    // Quiz finished

    else {

        showScore();

    }

};


// =====================================================
// TIMER
// =====================================================

const startTimer = () => {


    clearInterval(timerID);


    timeLeft = 15;

    timer.textContent =
        timeLeft;


    timerID =
        setInterval(() => {


        timeLeft--;


        timer.textContent =
            timeLeft;


        if (timeLeft <= 0) {


            clearInterval(timerID);


            displayAlert(
                "Time's Up!"
            );


            currentQuestionIndex++;


            if (
                currentQuestionIndex <
                selectedQuestions.length
            ) {

                timeLeft = 15;

                showQuestion();

            }


            else {

                showScore();

            }

        }


    }, 1000);

};


// =====================================================
// STOP TIMER
// =====================================================

const stopTimer = () => {

    clearInterval(timerID);

};


// =====================================================
// ALERT
// =====================================================

const displayAlert = message => {


    alertBox.style.display =
        "block";


    alertBox.textContent =
        message;


    setTimeout(() => {

        alertBox.style.display =
            "none";

    }, 2000);

};


// =====================================================
// SHOW SCORE
// =====================================================

const showScore = () => {


    stopTimer();


    questionBox.textContent =
        "Quiz Completed! 🎉";


    choicesBox.innerHTML =
        "";


    timer.textContent =
        "✓";


    progressFill.style.width =
        "100%";


    questionNumber.textContent =
        "Completed";


    scoreCard.textContent =
        `You scored ${
            score
        } out of ${
            selectedQuestions.length
        }!`;


    nextBtn.textContent =
        "Choose Another Topic";


    quizOver = true;

};


// =====================================================
// NEXT BUTTON
// =====================================================

nextBtn.addEventListener(
    "click",
    () => {


    // Quiz completed

    if (quizOver) {


        stopTimer();


        quizContainer.style.display =
            "none";


        topicScreen.style.display =
            "block";


        scoreCard.textContent =
            "";


        quizOver = false;

        currentQuestionIndex = 0;

        score = 0;


        return;

    }


    // Check current answer

    checkAnswer();

});
