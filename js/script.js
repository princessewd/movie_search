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
            title: 'Une film',
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

const recordedQuestions = [];

const init = () => {
    console.log('Page has loaded');

    els.quiz = document.querySelector('.quiz');
    els.question = document.querySelector('.question');
    els.endScreen = document.querySelector('.end-screen');
    els.endBtn = els.endScreen.querySelector('button');
    els.answersContainer = els.question.querySelector('ul');
    els.quizBtn.addEventListener('click', () => {
        displayScreen('question');
        displayQuestion(questionIndex);
    });

    els.answersContainer.addEventListener('click', ({ target }) => {
        if (target.tagName !== 'LI') {
            return;
        }
        const catégorie = target.getAttribute('data-catégorie');
        recordedAnswers.push(catégorie);

        questionIndex++;

        if (questionIndex >= questions.length) {
            displayScreen('end');
        } else {
            displayQuestion(questionIndex);
        }
    });



};
const displayQuestion = (index) => {
    const currentQuestion = questions[index];

    const questionsEl = els.questionScreen.querySelector('h2');

    const answersEls = currentQuestion.answers.map((answers) => {
        const liEl = document.createElement('li')
        liEl.textContent = answer.title;
        liEl.setAttribute('data-catégorie', answer.catégorie);
        return liEl;
    });

    questionEl.textContent = currentQuestion.question;
    els.answersContainer.textContent = '';
    els.answersContainer.append(...answerEls);


};

const displayScreen = (screenName) => {
    // console.log('screenName', screenName)
    els.quiz.style.display = 'none';
    els.question.style.display = 'none';
    els.endScreen.style.display = 'none';

    const screen = els[screenName + 'Screen'];
    // console.log('screen', screen);
    screen.style.display = 'flex';

};


window.addEventListener('load',init);





