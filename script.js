/* =========================================================
   LEARN & GROW - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   STUDY QUIZ
========================================================= */

const studyQuestions = [
    {
        question: "What is the best way to study?",
        options: [
            "Study for many hours without breaks",
            "Study with focus and take short breaks",
            "Study only the night before an exam",
            "Never review your notes"
        ],
        answer: 1
    },
    {
        question: "What does active recall mean?",
        options: [
            "Reading the same page again",
            "Trying to remember information without looking at your notes",
            "Watching a video",
            "Highlighting everything"
        ],
        answer: 1
    },
    {
        question: "Why are short breaks useful?",
        options: [
            "They help your brain rest",
            "They make studying impossible",
            "They waste all your time",
            "They replace studying"
        ],
        answer: 0
    },
    {
        question: "What is a good study environment?",
        options: [
            "A noisy place",
            "A place with many distractions",
            "A quiet and organized place",
            "A place where you cannot concentrate"
        ],
        answer: 2
    },
    {
        question: "What should you do after learning something?",
        options: [
            "Forget about it",
            "Review and practice it",
            "Never use it",
            "Study something completely different"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;


function studyQuiz() {

    const quizBox = document.getElementById("quizBox");

    if (!quizBox) {
        return;
    }

    quizBox.style.display = "block";

    currentQuestion = 0;
    score = 0;
    answered = false;

    showQuestion();

    quizBox.scrollIntoView({
        behavior: "smooth"
    });
}


function showQuestion() {

    const question = document.getElementById("quizQuestion");
    const options = document.getElementById("quizOptions");
    const feedback = document.getElementById("quizFeedback");
    const next = document.getElementById("quizNext");
    const result = document.getElementById("quizResult");
    const progress = document.getElementById("quizProgress");

    if (!question || !options) {
        return;
    }

    const current = studyQuestions[currentQuestion];

    question.style.display = "block";
    options.style.display = "grid";

    question.innerText = current.question;

    options.innerHTML = "";

    current.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.innerText = option;
        button.className = "communication-option";

        button.onclick = function() {
            checkAnswer(index);
        };

        options.appendChild(button);
    });

    if (progress) {
        progress.innerText =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            studyQuestions.length;
    }

    if (feedback) {
        feedback.style.display = "none";
        feedback.innerText = "";
    }

    if (next) {
        next.style.display = "none";
    }

    if (result) {
        result.style.display = "none";
    }

    answered = false;
}


function checkAnswer(selected) {

    if (answered) {
        return;
    }

    answered = true;

    const current = studyQuestions[currentQuestion];

    const feedback = document.getElementById("quizFeedback");
    const next = document.getElementById("quizNext");

    const options = document.querySelectorAll(
        "#quizOptions .communication-option"
    );

    options.forEach(function(button) {
        button.disabled = true;
    });

    if (selected === current.answer) {

        score++;

        if (feedback) {
            feedback.innerText = "✅ Correct! Great job!";
            feedback.style.display = "block";
        }

    } else {

        if (feedback) {
            feedback.innerText =
                "❌ Not quite. The correct answer is: " +
                current.options[current.answer];

            feedback.style.display = "block";
        }
    }

    if (next) {
        next.style.display = "inline-block";
    }
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < studyQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


function showResult() {

    const question = document.getElementById("quizQuestion");
    const options = document.getElementById("quizOptions");
    const feedback = document.getElementById("quizFeedback");
    const next = document.getElementById("quizNext");
    const result = document.getElementById("quizResult");
    const finalScore = document.getElementById("finalScore");
    const resultMessage = document.getElementById("resultMessage");

    if (question) {
        question.style.display = "none";
    }

    if (options) {
        options.style.display = "none";
    }

    if (feedback) {
        feedback.style.display = "none";
    }

    if (next) {
        next.style.display = "none";
    }

    if (result) {
        result.style.display = "block";
    }

    if (finalScore) {
        finalScore.innerText =
            score + " / " + studyQuestions.length;
    }
     addXP(20)
    if (resultMessage) {

        if (score === studyQuestions.length) {

            resultMessage.innerText =
                "🌟 Perfect score! Amazing work!";

        } else if (score >= 3) {

            resultMessage.innerText =
                "👏 Great job! Keep practicing!";

        } else {

            resultMessage.innerText =
                "🌱 Good effort! Practice makes progress!";
        }
    }
}


function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    answered = false;

    const question = document.getElementById("quizQuestion");
    const options = document.getElementById("quizOptions");
    const result = document.getElementById("quizResult");

    if (question) {
        question.style.display = "block";
    }

    if (options) {
        options.style.display = "grid";
    }

    if (result) {
        result.style.display = "none";
    }

    showQuestion();
}


/* =========================================================
   COMMUNICATION PRACTICE
========================================================= */

const communicationScenarios = [
    {
        question:
            "Your friend is speaking and you disagree with them. What should you do?",
        options: [
            "Interrupt them immediately",
            "Listen and politely explain your opinion",
            "Shout at them",
            "Walk away without listening"
        ],
        answer: 1
    },
    {
        question:
            "Someone gives you helpful feedback. What should you say?",
        options: [
            "Thank you and think about the feedback",
            "Get angry",
            "Ignore them",
            "Tell them they are wrong"
        ],
        answer: 0
    },
    {
        question:
            "You do not understand something someone said. What should you do?",
        options: [
            "Pretend you understand",
            "Ask politely for clarification",
            "Ignore the person",
            "Change the subject"
        ],
        answer: 1
    },
    {
        question:
            "What is important when communicating with others?",
        options: [
            "Listening",
            "Interrupting",
            "Speaking loudly",
            "Ignoring body language"
        ],
        answer: 0
    },
    {
        question:
            "Someone is upset while talking to you. What should you do?",
        options: [
            "Make fun of them",
            "Listen calmly and show understanding",
            "Interrupt them",
            "Tell them to stop talking"
        ],
        answer: 1
    }
];

let communicationQuestionNumber = 0;
let communicationScore = 0;
let communicationAnswered = false;


function communicationPractice() {

    const box =
        document.getElementById("communicationPracticeBox");

    if (!box) {
        return;
    }

    box.style.display = "block";

    communicationQuestionNumber = 0;
    communicationScore = 0;
    communicationAnswered = false;

    showCommunicationQuestion();

    box.scrollIntoView({
        behavior: "smooth"
    });
}


function showCommunicationQuestion() {

    const scenario =
        document.getElementById("communicationScenario");

    const question =
        document.getElementById("communicationQuestion");

    const options =
        document.getElementById("communicationOptions");

    const feedback =
        document.getElementById("communicationFeedback");

    const next =
        document.getElementById("communicationNext");

    if (!question || !options) {
        return;
    }

    const current =
        communicationScenarios[communicationQuestionNumber];

    if (scenario) {

        scenario.innerText =
            "Scenario " +
            (communicationQuestionNumber + 1) +
            " of " +
            communicationScenarios.length;
    }

    question.innerText = current.question;

    options.innerHTML = "";

    current.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.innerText = option;
        button.className = "communication-option";

        button.onclick = function() {
            chooseCommunication(index);
        };

        options.appendChild(button);
    });

    if (feedback) {
        feedback.style.display = "none";
        feedback.innerText = "";
    }

    if (next) {
        next.style.display = "none";
    }

    communicationAnswered = false;
}


function chooseCommunication(selected) {

    if (communicationAnswered) {
        return;
    }

    communicationAnswered = true;

    const current =
        communicationScenarios[communicationQuestionNumber];

    const buttons =
        document.querySelectorAll(
            "#communicationOptions .communication-option"
        );

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    const feedback =
        document.getElementById("communicationFeedback");

    if (selected === current.answer) {

        communicationScore++;

        if (feedback) {
            feedback.innerText =
                " Correct! Excellent communication!";

            feedback.style.display = "block";
        }

    } else {

        if (feedback) {
            feedback.innerText =
                " Not quite. Try to think about respectful communication.";

            feedback.style.display = "block";
        }
    }

    const next =
        document.getElementById("communicationNext");

    if (next) {
        next.style.display = "inline-block";
    }
}


function nextCommunication() {

    communicationQuestionNumber++;

    if (
        communicationQuestionNumber <
        communicationScenarios.length
    ) {

        showCommunicationQuestion();

    } else {

        showCommunicationResult();
    }
}


function showCommunicationResult() {

    const message =
        "💬 You scored " +
        communicationScore +
        " out of " +
        communicationScenarios.length +
        ". Keep practicing your communication skills! 🌱";

    alert(message);

    communicationQuestionNumber = 0;
    communicationScore = 0;
    communicationAnswered = false;

    showCommunicationQuestion();
}


/* =========================================================
   LEADERSHIP CHALLENGE
========================================================= */

const leadershipScenarios = [
    {
        question:
            "Your team is having a disagreement. What should a good leader do?",
        options: [
            "Blame one person",
            "Ignore the disagreement",
            "Listen to everyone and help find a solution",
            "Leave the team"
        ],
        answer: 2,
        lesson:
            "Good leaders listen to different opinions and help their team find solutions together."
    },
    {
        question:
            "A team member makes a mistake. What should you do as a leader?",
        options: [
            "Embarrass them",
            "Help them understand the mistake and improve",
            "Fire them immediately",
            "Ignore the mistake"
        ],
        answer: 1,
        lesson:
            "Strong leaders use mistakes as opportunities for learning and improvement."
    },
    {
        question:
            "Your team has an important deadline. What should you do?",
        options: [
            "Do everything yourself",
            "Give everyone clear responsibilities",
            "Ignore the deadline",
            "Blame the slowest person"
        ],
        answer: 1,
        lesson:
            "A good leader organizes the team and gives people clear responsibilities."
    },
    {
        question:
            "One team member is quiet and does not share ideas. What should you do?",
        options: [
            "Ignore them",
            "Tell them they are useless",
            "Encourage them to share their ideas",
            "Remove them from the team"
        ],
        answer: 2,
        lesson:
            "Good leaders create an environment where everyone feels comfortable sharing ideas."
    },
    {
        question:
            "Your team succeeds because everyone worked together. What should a good leader do?",
        options: [
            "Take all the credit",
            "Give credit to the whole team",
            "Say the success was luck",
            "Ignore the team"
        ],
        answer: 1,
        lesson:
            "Great leaders recognize and appreciate the contributions of their team members."
    }
];

let leadershipQuestionNumber = 0;
let leadershipScore = 0;
let leadershipAnswered = false;


function leadershipPractice() {

    let box =
        document.getElementById("leadershipPracticeBox");

    if (!box) {

        createLeadershipPanel();

        box =
            document.getElementById("leadershipPracticeBox");
    }

    if (!box) {
        return;
    }

    box.style.display = "block";

    leadershipQuestionNumber = 0;
    leadershipScore = 0;
    leadershipAnswered = false;

    showLeadershipQuestion();

    box.scrollIntoView({
        behavior: "smooth"
    });
}


function createLeadershipPanel() {

    const studySection =
        document.querySelector(".study-section");

    if (!studySection) {
        return;
    }

    const box =
        document.createElement("section");

    box.id = "leadershipPracticeBox";
    box.className = "quiz-box";

    box.innerHTML = `
        <div class="section-title">
            <span>👑</span>
            <div>
                <h2>Leadership Challenge</h2>
                <p>Test your leadership skills.</p>
            </div>
        </div>

        <p id="leadershipScenario"></p>

        <h3 id="leadershipQuestion"></h3>

        <div id="leadershipOptions"></div>

        <p id="leadershipFeedback"></p>

        <p id="leadershipLesson"></p>

        <button
            id="leadershipNext"
            class="practice-btn"
            onclick="nextLeadership()">
            Next Question →
        </button>

        <div id="leadershipResult" style="display:none;">

            <h2>🎉 Challenge Complete!</h2>

            <h3 id="leadershipFinalScore"></h3>

            <p id="leadershipResultMessage"></p>

            <button
                id="leadershipRestart"
                class="practice-btn"
                onclick="leadershipPractice()">
                 Try Again
            </button>

        </div>
    `;

    studySection.after(box);

    const options =
        document.getElementById("leadershipOptions");

    if (!options) {
        return;
    }
}


function showLeadershipQuestion() {

    const scenario =
        document.getElementById("leadershipScenario");

    const question =
        document.getElementById("leadershipQuestion");

    const options =
        document.getElementById("leadershipOptions");

    const feedback =
        document.getElementById("leadershipFeedback");

    const lesson =
        document.getElementById("leadershipLesson");

    const next =
        document.getElementById("leadershipNext");

    const result =
        document.getElementById("leadershipResult");

    if (!question || !options) {
        return;
    }

    const current =
        leadershipScenarios[leadershipQuestionNumber];

    if (!current) {
        return;
    }

    if (scenario) {

        scenario.innerText =
            "Question " +
            (leadershipQuestionNumber + 1) +
            " of " +
            leadershipScenarios.length;
    }

    question.innerText = current.question;

    options.innerHTML = "";

    current.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.className =
            "communication-option";

        button.innerText = option;

        button.onclick = function() {
            chooseLeadership(index);
        };

        options.appendChild(button);
    });

    question.style.display = "block";
    options.style.display = "grid";

    if (feedback) {
        feedback.style.display = "block";
        feedback.innerText = "";
    }

    if (lesson) {
        lesson.style.display = "none";
        lesson.innerText = "";
    }

    if (next) {
        next.style.display = "none";
    }

    if (result) {
        result.style.display = "none";
    }

    leadershipAnswered = false;
}


function chooseLeadership(selected) {

    if (leadershipAnswered) {
        return;
    }

    leadershipAnswered = true;

    const current =
        leadershipScenarios[leadershipQuestionNumber];

    const buttons =
        document.querySelectorAll(
            "#leadershipOptions .communication-option"
        );

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    const feedback =
        document.getElementById("leadershipFeedback");

    const lesson =
        document.getElementById("leadershipLesson");

    if (selected === current.answer) {

        leadershipScore++;

        if (feedback) {
            feedback.innerText =
                " Correct! Great leadership choice!";
        }

    } else {

        if (feedback) {
            feedback.innerText =
                " Not quite. Think about what a good leader would do.";
        }
    }

    if (lesson) {

        lesson.innerText =
            " Leadership lesson: " +
            current.lesson;

        lesson.style.display = "block";
    }

    const next =
        document.getElementById("leadershipNext");

    if (next) {
        next.style.display = "inline-block";
    }
}


function nextLeadership() {

    leadershipQuestionNumber++;

    if (
        leadershipQuestionNumber <
        leadershipScenarios.length
    ) {

        showLeadershipQuestion();

    } else {

        showLeadershipResult();
    }
}


function showLeadershipResult() {

    const question =
        document.getElementById("leadershipQuestion");

    const options =
        document.getElementById("leadershipOptions");

    const feedback =
        document.getElementById("leadershipFeedback");

    const lesson =
        document.getElementById("leadershipLesson");

    const next =
        document.getElementById("leadershipNext");

    const result =
        document.getElementById("leadershipResult");

    const finalScore =
        document.getElementById("leadershipFinalScore");

    const message =
        document.getElementById("leadershipResultMessage");

    if (question) {
        question.style.display = "none";
    }

    if (options) {
        options.style.display = "none";
    }

    if (feedback) {
        feedback.style.display = "none";
    }

    if (lesson) {
        lesson.style.display = "none";
    }

    if (next) {
        next.style.display = "none";
    }

    if (result) {
        result.style.display = "block";
    }

    if (finalScore) {

        finalScore.innerText =
            "Your score: " +
            leadershipScore +
            " / " +
            leadershipScenarios.length;
    }

    if (message) {

        if (
            leadershipScore ===
            leadershipScenarios.length
        ) {

            message.innerText =
                " Excellent! You showed strong leadership skills!";

        } else if (leadershipScore >= 3) {

            message.innerText =
                " Great work! You are developing strong leadership skills.";

        } else {

            message.innerText =
                "🌱 Keep practicing! Every challenge helps you grow.";
        }
    }

    saveLeadershipAchievement();
}


function saveLeadershipAchievement() {

    let completed =
        getCompletedChallenges();

    if (!completed.includes("Leadership Challenge")) {

        completed.push("Leadership Challenge");

        saveCompletedChallenges(completed);
    }

    loadAchievements();
}


/* =========================================================
   GOAL SETTING
========================================================= */

function goalPractice() {

    const box =
        document.getElementById("goalBox");

    if (!box) {
        return;
    }

    box.style.display = "block";

    loadSavedGoal();

    box.scrollIntoView({
        behavior: "smooth"
    });
}


function createGoal() {

    const title =
        document.getElementById("goalTitle").value.trim();

    const category =
        document.getElementById("goalCategory").value;

    const deadline =
        document.getElementById("goalDeadline").value;

    const why =
        document.getElementById("goalWhy").value.trim();

    const step =
        document.getElementById("goalStep").value.trim();

    if (
        !title ||
        !category ||
        !deadline ||
        !why ||
        !step
    ) {

        alert(
            "⚠️ Please fill in all the goal fields."
        );

        return;
    }

    const selectedDate =
        new Date(deadline + "T23:59:59");

    const today =
        new Date();

    if (selectedDate <= today) {

        alert(
            "⚠️ Please choose a future deadline."
        );

        return;
    }

    const goal = {

        title: title,
        category: category,
        deadline: deadline,
        why: why,
        step: step,
        completed: false
    };

    localStorage.setItem(
        "learnGrowGoal",
        JSON.stringify(goal)
    );

    showGoalResult(goal);
}


function showGoalResult(goal) {

    const result =
        document.getElementById("goalResult");

    if (!result) {
        return;
    }

    result.style.display = "block";

    const title =
        document.getElementById("goalCardTitle");

    const category =
        document.getElementById("goalCardCategory");

    const deadline =
        document.getElementById("goalCardDeadline");

    const why =
        document.getElementById("goalCardWhy");

    const step =
        document.getElementById("goalCardStep");

    if (title) {
        title.innerText = goal.title;
    }

    if (category) {
        category.innerText = goal.category;
    }

    if (deadline) {
        deadline.innerText = goal.deadline;
    }

    if (why) {
        why.innerText = goal.why;
    }

    if (step) {
        step.innerText = goal.step;
    }

    const fill =
        document.querySelector(".progress-fill");

    const text =
        document.querySelector(".progress-text");

    if (goal.completed) {

        if (fill) {
            fill.style.width = "100%";
        }

        if (text) {
            text.innerText = "100% complete";
        }

    } else {

        if (fill) {
            fill.style.width = "10%";
        }

        if (text) {
            text.innerText = "10% complete";
        }
    }

    addGoalActionButtons(goal);
}


function addGoalActionButtons(goal) {

    const container =
        document.querySelector(".goal-result-buttons");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!goal.completed) {

        const completeButton =
            document.createElement("button");

        completeButton.className =
            "practice-btn";

        completeButton.innerText =
            " Complete First Step";

        completeButton.onclick =
            completeGoalStep;

        container.appendChild(
            completeButton
        );
    }

    const newButton =
        document.createElement("button");

    newButton.className =
        "practice-btn";

    newButton.innerText =
        " Create Another Goal";

    newButton.onclick =
        resetGoal;

    container.appendChild(newButton);

    const deleteButton =
        document.createElement("button");

    deleteButton.className =
        "practice-btn";

    deleteButton.innerText =
        " Delete Goal";

    deleteButton.onclick =
        deleteGoal;

    container.appendChild(deleteButton);
}


function completeGoalStep() {

    const saved =
        localStorage.getItem("learnGrowGoal");

    if (!saved) {
        return;
    }

    try {

        const goal =
            JSON.parse(saved);

        goal.completed = true;

        localStorage.setItem(
            "learnGrowGoal",
            JSON.stringify(goal)
        );

        showGoalResult(goal);

        alert(
            "🎉 Amazing! You completed your first step!"
        );

    } catch (error) {

        console.log(
            "Could not complete goal.",
            error
        );
    }
}


function loadSavedGoal() {

    const saved =
        localStorage.getItem("learnGrowGoal");

    if (!saved) {
        return;
    }

    try {

        const goal =
            JSON.parse(saved);

        showGoalResult(goal);

    } catch (error) {

        console.log(
            "Could not load saved goal.",
            error
        );
    }
}


function resetGoal() {

    const result =
        document.getElementById("goalResult");

    if (result) {
        result.style.display = "none";
    }

    const title =
        document.getElementById("goalTitle");

    const category =
        document.getElementById("goalCategory");

    const deadline =
        document.getElementById("goalDeadline");

    const why =
        document.getElementById("goalWhy");

    const step =
        document.getElementById("goalStep");

    if (title) {
        title.value = "";
    }

    if (category) {
        category.value = "";
    }

    if (deadline) {
        deadline.value = "";
    }

    if (why) {
        why.value = "";
    }

    if (step) {
        step.value = "";
    }
}


function deleteGoal() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this goal?"
        );

    if (!confirmDelete) {
        return;
    }

    localStorage.removeItem(
        "learnGrowGoal"
    );

    const result =
        document.getElementById("goalResult");

    if (result) {
        result.style.display = "none";
    }

    alert(
        " Your goal has been deleted."
    );
}


/* =========================================================
   CHALLENGES
========================================================= */

const challengeNames = [
    "7-Day Study Challenge",
    "Communication Challenge",
    "Leadership Challenge",
    "Personal Growth Challenge"
];


function getCompletedChallenges() {

    try {

        const saved =
            localStorage.getItem(
                "completedChallenges"
            );

        if (!saved) {
            return [];
        }

        const completed =
            JSON.parse(saved);

        if (Array.isArray(completed)) {
            return completed;
        }

        return [];

    } catch (error) {

        console.log(
            "Could not read completed challenges.",
            error
        );

        return [];
    }
}


function saveCompletedChallenges(completed) {

    try {

        localStorage.setItem(
            "completedChallenges",
            JSON.stringify(completed)
        );

    } catch (error) {

        console.log(
            "Could not save completed challenges.",
            error
        );
    }
}


function completeChallenge(button) {

    if (!button) {
        return;
    }

    const card =
        button.closest(".card");

    if (!card) {
        return;
    }

    const title =
        card.querySelector("h3");

    if (!title) {
        return;
    }

    const challengeName =
        title.textContent.trim();

    let completed =
        getCompletedChallenges();

    if (!completed.includes(challengeName)) {

        completed.push(challengeName);

        saveCompletedChallenges(completed);
    }

    button.textContent =
        " Completed!";

    button.disabled = true;

    alert(
        " Congratulations!\n\n" +
        challengeName +
        " completed!\n\n" +
        "Keep going! 🌱"
    );

    loadAchievements();
}


function loadChallenges() {

    const completed =
        getCompletedChallenges();

    const cards =
        document.querySelectorAll(
            ".study-section .card"
        );

    cards.forEach(function(card) {

        const title =
            card.querySelector("h3");

        const button =
            card.querySelector(".practice-btn");

        if (!title || !button) {
            return;
        }

        const challengeName =
            title.textContent.trim();

        if (
            completed.includes(challengeName)
        ) {

            button.textContent =
                " Completed!";

            button.disabled = true;
        }
    });
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function loadAchievements() {

    const completed =
        getCompletedChallenges();

    const count =
        completed.length;

    const achievements =
        document.querySelectorAll(
            ".achievement-card"
        );

    achievements.forEach(function(card) {

        const title =
            card.querySelector("h3");

        const status =
            card.querySelector(".achievement-status");

        if (!title) {
            return;
        }

        const achievementName =
            title.textContent.trim();

        let unlocked = false;

        if (
            achievementName ===
            "First Challenge"
        ) {

            unlocked =
                count >= 1;

        } else if (
            achievementName ===
            "Challenge Starter"
        ) {

            unlocked =
                count >= 3;

        } else if (
            achievementName ===
            "Challenge Master"
        ) {

            unlocked =
                count >= 4;

        } else if (
            achievementName ===
            "Study Star"
        ) {

            unlocked =
                completed.includes(
                    "7-Day Study Challenge"
                );
        }

        if (unlocked) {

            card.classList.add("unlocked");

            if (status) {
                status.textContent =
                    " Unlocked!";
            }

        } else {

            card.classList.remove("unlocked");

            if (status) {
                status.textContent =
                    " Locked";
            }
        }
    });
}


/* =========================================================
   PAGE LOADING
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadChallenges();

        loadAchievements();

    }
);


/* =========================================================
   MAKE HTML BUTTON FUNCTIONS AVAILABLE
========================================================= */

window.studyQuiz =
    studyQuiz;

window.checkAnswer =
    checkAnswer;

window.nextQuestion =
    nextQuestion;

window.restartQuiz =
    restartQuiz;


window.communicationPractice =
    communicationPractice;

window.chooseCommunication =
    chooseCommunication;

window.nextCommunication =
    nextCommunication;


window.leadershipPractice =
    leadershipPractice;

window.chooseLeadership =
    chooseLeadership;

window.nextLeadership =
    nextLeadership;


window.goalPractice =
    goalPractice;

window.createGoal =
    createGoal;

window.completeGoalStep =
    completeGoalStep;

window.resetGoal =
    resetGoal;

window.deleteGoal =
    deleteGoal;


window.completeChallenge =
    completeChallenge;

window.loadChallenges =
    loadChallenges;

window.loadAchievements =
    loadAchievements;
/* =========================================================
   INTERACTIVE CHALLENGE SYSTEM
========================================================= */

const challengeTasks = {

    "7-Day Study Challenge": [
        " Day 1: Study for at least 30 minutes without distractions.",
        " Day 2: Review your notes and write down 5 important points.",
        " Day 3: Practice active recall without looking at your notes.",
        " Day 4: Create a simple study schedule for your day.",
        " Day 5: Learn something new and explain it in your own words.",
        " Day 6: Review something you learned earlier this week.",
        " Day 7: Complete a short practice session and reflect on your progress."
    ],

    "Communication Challenge": [
        " Listen carefully when someone is speaking without interrupting.",
        " Have one respectful conversation and clearly express your opinion.",
        " Give someone positive and helpful feedback."
    ],

    "Leadership Challenge": [
        " Help someone complete a task.",
        " Listen to everyone's ideas during a group activity.",
        " Take responsibility for one task and complete it."
    ],

    "Personal Growth Challenge": [
        " Write one thing you want to improve.",
        " Learn something new for at least 20 minutes.",
        " Do one thing that challenges you.",
        " Write down one thing you did well today.",
        " Set one small goal for tomorrow.",
        " Do something kind for another person.",
        " Reflect on what you learned this week."
    ]
};


let currentChallengeName = "";


function startChallenge(challengeName) {

    const tasks = challengeTasks[challengeName];

    if (!tasks) {
        alert("⚠️ Challenge could not be found.");
        return;
    }

    currentChallengeName = challengeName;

    const panel =
        document.getElementById("challengePanel");

    const title =
        document.getElementById("challengeTitle");

    const description =
        document.getElementById("challengeDescription");

    const taskContainer =
        document.getElementById("challengeTasks");

    const message =
        document.getElementById("challengeMessage");

    if (
        !panel ||
        !title ||
        !description ||
        !taskContainer
    ) {
        alert("⚠️ Challenge panel could not be found.");
        return;
    }

    title.innerText = challengeName;

    description.innerText =
        "Complete every task below to finish this challenge. 🌱";

    taskContainer.innerHTML = "";

    if (message) {
        message.innerText = "";
        message.style.display = "none";
    }

    let savedProgress = [];

    try {

        const saved =
            localStorage.getItem(
                "challengeProgress_" + challengeName
            );

        if (saved) {
            savedProgress = JSON.parse(saved);
        }

    } catch (error) {

        savedProgress = [];
    }


    tasks.forEach(function(task, index) {

        const label =
            document.createElement("label");

        label.className =
            "challenge-task";

        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked =
            savedProgress.includes(index);

        checkbox.onchange =
            saveChallengeProgress;

        const text =
            document.createElement("span");

        text.innerText = task;

        label.appendChild(checkbox);
        label.appendChild(text);

        taskContainer.appendChild(label);
    });


    panel.classList.add("active");

    panel.style.display = "block";

    panel.scrollIntoView({
        behavior: "smooth"
    });
}


function saveChallengeProgress() {

    if (!currentChallengeName) {
        return;
    }

    const checkboxes =
        document.querySelectorAll(
            "#challengeTasks input[type='checkbox']"
        );

    const completedTasks = [];

    checkboxes.forEach(function(checkbox, index) {

        if (checkbox.checked) {
            completedTasks.push(index);
        }

    });

    try {

        localStorage.setItem(
            "challengeProgress_" +
            currentChallengeName,
            JSON.stringify(completedTasks)
        );

    } catch (error) {

        console.log(
            "Could not save challenge progress.",
            error
        );
    }
}


function finishCurrentChallenge() {

    if (!currentChallengeName) {
        return;
    }

    const checkboxes =
        document.querySelectorAll(
            "#challengeTasks input[type='checkbox']"
        );

    if (!checkboxes.length) {
        return;
    }

    let allCompleted = true;

    checkboxes.forEach(function(checkbox) {

        if (!checkbox.checked) {
            allCompleted = false;
        }

    });


    const message =
        document.getElementById("challengeMessage");


    if (!allCompleted) {

        if (message) {

            message.innerText =
                "⚠️ Please complete every task before finishing the challenge.";

            message.style.display = "block";
        }

        return;
    }


    const cards =
        document.querySelectorAll(
            ".study-section .card"
        );

    let challengeButton = null;


    cards.forEach(function(card) {

        const title =
            card.querySelector("h3");

        if (
            title &&
            title.textContent.trim() ===
            currentChallengeName
        ) {

            challengeButton =
                card.querySelector(".practice-btn");
        }

    });


    if (challengeButton) {

        completeChallenge(challengeButton);

    } else {

        let completed =
            getCompletedChallenges();

        if (
            !completed.includes(
                currentChallengeName
            )
        ) {

            completed.push(
                currentChallengeName
            );

            saveCompletedChallenges(
                completed
            );
        }

        loadAchievements();
    }


    localStorage.removeItem(
        "challengeProgress_" +
        currentChallengeName
    );


    if (message) {

        message.innerText =
            " Amazing! You completed the " +
            currentChallengeName +
            "! Keep growing! 🌱";

        message.style.display = "block";
    }
}


function closeChallenge() {

    const panel =
        document.getElementById("challengePanel");

    if (!panel) {
        return;
    }

    panel.classList.remove("active");

    panel.style.display = "none";

    currentChallengeName = "";
}


/* =========================================================
   MAKE CHALLENGE FUNCTIONS AVAILABLE TO HTML
========================================================= */

window.startChallenge =
    startChallenge;

window.saveChallengeProgress =
    saveChallengeProgress;

window.finishCurrentChallenge =
    finishCurrentChallenge;

window.closeChallenge =
    closeChallenge;
window.closeChallenge =
    closeChallenge;


/* =========================================================
   XP & LEVEL SYSTEM
========================================================= */

function getXP() {

    const savedXP =
        localStorage.getItem("learnGrowXP");

    if (!savedXP) {
        return 0;
    }

    const xp = Number(savedXP);

    return isNaN(xp) ? 0 : xp;
}


function saveXP(xp) {

    localStorage.setItem(
        "learnGrowXP",
        xp
    );
}


function addXP(amount) {

    if (!amount || amount <= 0) {
        return;
    }

    const currentXP =
        getXP();

    const newXP =
        currentXP + amount;

    saveXP(newXP);

    updateDashboardXP();
}


function getLevel(xp) {

    if (xp >= 500) {
        return 5;
    }

    if (xp >= 300) {
        return 4;
    }

    if (xp >= 150) {
        return 3;
    }

    if (xp >= 50) {
        return 2;
    }

    return 1;
}


function updateDashboardXP() {

    const xp =
        getXP();

    const level =
        getLevel(xp);

    const xpElement =
        document.getElementById("dashboardXP");

    const levelElement =
        document.getElementById("dashboardLevel");

    if (xpElement) {
        xpElement.innerText = xp;
    }

    if (levelElement) {
        levelElement.innerText = level;
    }
}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboardXP();

    }
);


/* =========================================================
   MAKE XP FUNCTIONS AVAILABLE
========================================================= */

window.getXP =
    getXP;

window.addXP =
    addXP;

window.getLevel =
    getLevel;

window.updateDashboardXP =
    updateDashboardXP;
