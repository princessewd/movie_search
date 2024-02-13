// DOM => Document Object Model

const els = {
    quiz: null,
    question: null,
    endScreen: null,
    quizBtn: null,
    answers: null,
    endBtn: null
};

const questionIndex = 0;

const questions = [{
        question: 'Recherches-tu un film ou une série ?',
        answers: [{
            title: 'Une film',
            catégorie: 'film'
        }, {
            title: 'Une série',
            catégorie: 'série'
        }]
    },
    {
        question: 'Quel genre préfères-tu ?',
        answers: [{
            title: 'Action',
            catégorie: 'Action'
        }, {
            title: 'Historique',
            catégorie: 'Historique'
        }, {
            title: 'Comédie',
            catégorie: 'Comédie'
        }, {
            title: 'Drame',
            catégorie: 'Drame'
        }, {
            title: 'Musicale',
            catégorie: 'Musicale'
        }, {
            title: 'Policier',
            catégorie: 'Policier'
        }, {
            title: 'S-F',
            catégorie: 'S-F'
        }, {
            title: 'Documentaire',
            catégorie: 'Documentaire'
        }, {
            title: 'Horreur',
            catégorie: 'Horreur'
        }, {
            title: 'Thriller',
            catégorie: 'Thriller'
        }, {
            title: 'Animation',
            catégorie: 'Animation'
        }]
    }
];


const init = () => {
    console.log('Page has loaded');

    els.quiz = document.querySelector('.quiz');
    els.question = document.querySelector('.question');
    els.endScreen = document.querySelector('.end-screen');
    els.endBtn = els.endScreen.querySelector('button');

    els.quizBtn.addEventListener('click', () => {
        displayScreen('question');
        displayQuestion(questionIndex);
    });

};
const displayQuestion = (index) => {
    const currentQuestion = questions[index];
};

const displayScreen = (screenName) => {
    console.log('screenName', screenName)
    els.quiz.style.display = 'none';
    els.question.style.display = 'none';
    els.endScreen.style.display = 'none';

    const screen = els[screenName + 'Screen'];
    // console.log('screen', screen);
    screen.style.display = 'flex';

};


window.addEventListener('load',init);

/* const questions = [
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

function showQuiz() {
    overlay.style.display = "flex";
    showQuestion();
}

function hideQuiz() {
    overlay.style.display = "none";
} */

