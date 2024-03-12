// DOM => Document Object Model

const els = {
    quiz: null,
    question: null,
    endScreen: null,
    quizBtn: null,
    answers: null,
    endBtn: null,
    answersContainer: null
};

let questionIndex = 0;

const questions = [{
        question: 'Recherches-tu un film ou une série ?',
        answers: [{
            title: 'Un film',
            catégorie: 'Film'
        }, {
            title: 'Une série',
            catégorie: 'Série'
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
    },
    {
        question: 'Préfères-tu les films/ séries...',
        answers: [{
            title: 'Récents',
            catégorie: 'Récents'
        }, {
            title: 'Anciens',
            catégorie: 'Anciens'
        }]
    },
    {
        question: 'Cela te déranges que le film/série soit en noir et blanc ?',
        answers: [{
            title: 'Oui',
            catégorie: 'Couleurs'
        }, {
            title: 'Non',
            catégorie: 'Noir et Blanc'
        }]
    }, 
    {
        question: 'Tu préfères les films/séries...',
        answers: [{
            title: 'Français',
            catégorie: 'Français'
        }, {
            title: 'Américain',
            catégorie: 'Américain'
        }, {
            title: 'Indien',
            catégorie: 'Indien'
        }, {
            title: 'Asiatique',
            catégorie: 'Asiatique'
        }, {
            title: 'Africain',
            catégorie: 'Africain'
        }, {
            title: 'Peu importe',
            catégorie: 'Peu importe'
        }]
    }, 
    {
        question: 'Aimes- tu les films de plus de 2h/les séries de plus de 3 saisons ?',
        answers: [{
            title: 'Oui',
            catégorie: 'Long'
        }, {
            title: 'Non, je détèste quand c est trop long',
            catégorie: 'Court'
        }]
    },
    {
        question: 'Cherches- tu un film/série avec une vrai morale/critique derrière ?',
        answers: [{
            title: 'Oui',
            catégorie: 'Avec morale'
        }, {
            title: 'Non, pas forcément',
            catégorie: 'Sans morale'
        }]
    },
    {
        question: 'Quelles plateformes est à ta disposition ?',
        answers: [{
            title: 'Netflix',
            catégorie: 'Netflix'
        }, {
            title: 'Canal +',
            catégorie: 'Canal +'
        }, {
            title: 'Disney +',
            catégorie: 'Disney +'
        }, {
            title: 'Amazon Prime',
            catégorie: 'Amazon Prime'
        }, {
            title: 'OCS',
            catégorie: 'OCS'
        }, {
            title: 'Apple TV',
            catégorie: 'Apple TV'
        }, {
            tile: 'Paramount +',
            catégorie: 'Paramount'
        }, {
            title: 'Autre plateforme de streaming (illégale)',
            catégorie: 'Autre'
        }]
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");


function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    // const questionButton = document.createElement("button");
    // questionButton.textContent = currentQuestion.question;
    // optionsElement.appendChild(questionButton);
    // console.log ("Over !")

    currentQuestion.answers.forEach((answer, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = answer.title;
        optionButton.classList.add("option");
        optionButton.onclick = () => selectOption(answer);

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
    }
}

const overlay = document.getElementById("overlay");

function showQuiz() {
    overlay.style.display = "flex";
    // console.log ("Before !");
    showQuestion();
    // console.log ("After !");    
}

function hideQuiz() {
    overlay.style.display = "none";
}
  