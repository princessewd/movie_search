const questions = [
    {
        question: "quel genre préfères- tu ?",
        options: ["Action", "Historique", "Comédie", "Drame", "Musical", "Policier","S-F","western","Documentaire","Horreur","Animation"]
    },
    {
        question: "Tu préfères les films/séries ?",
        options: ["Anciens", "Récents"]
    },
    {
        question: "Ca te dérange qu'il soit en noir et blanc ?",
        options: ["Oui", "Non"]
    },
    {
        question: "Tu préfères les films/séries",
        options: ["Français", "Américain", "Africain", "Asiatique","Indien","Peu importe"]
    },
    {
        question: "Aimes-tu les films de plus de 2h/ les séries de plus de 3 saisons ?",
        options: ["Oui", "Non"]
    },
    {
        question: "Tu cherches un film/série avec une vraie critique/morale derrière ?",
        options: ["Oui", "Non"]
    },
    {
        question: "Quelle plateforme est à ta disposition ?",
        options: ["Netflix", "Canal +","Disney +","Amazon Prime", "OCS","Apple TV +","Paramount +","Autre plateforme de streaming(illégale)"]
    }

];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

function showQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.onclick = () => selectOption(option);

        optionsElement.appendChild(optionButton);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectOption(selectedOption) {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        quizContainer.innerHTML = '<button onclick="hideQuiz()">x</button><h2>Quiz terminé !</h2>';
        r = getRandomInt(255);
        v = getRandomInt(255);
        b = getRandomInt(255);
        document.body.style.background = `rgb(${r},${v},${b})`;
    }
}

const overlay = document.getElementById("overlay");