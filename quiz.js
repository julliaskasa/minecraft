const questions = [
    {
        question: "1. Як ти ставишся до роботи вночі?",
        answers: [
            { text: "Це мій найкращий час для полювання та роботи.", scores: { enderman: 2, zombie: 1, spider: 1 } },
            { text: "Це страшно, але іноді потрібно.", scores: { skeleton: 1, creeper: 1 } },
            { text: "Я надаю перевагу денному світлу для безпеки.", scores: { zombie: -1, enderman: -1 } },
        ]
    },
    {
        question: "2. Як ти реагуєш на зустріч із гравцем?",
        answers: [
            { text: "Наближаюся повільно і непомітно... з сюрпризом.", scores: { creeper: 3 } },
            { text: "Біжу прямо на нього, голосно стогнучи.", scores: { zombie: 3 } },
            { text: "Дивлюся пильно, але зникаю, якщо подивиться мені в очі.", scores: { enderman: 2 } },
            { text: "Тримаю дистанцію і атакую здалеку.", scores: { skeleton: 2 } },
        ]
    },
    {
        question: "3. Який інструмент ти обереш для бою?",
        answers: [
            { text: "Вибухівка (TNT).", scores: { creeper: 2 } },
            { text: "Гострі зуби і кулаки.", scores: { zombie: 2, spider: 1 } },
            { text: "Лук і стріли.", scores: { skeleton: 3 } },
            { text: "Телепортація і блоки.", scores: { enderman: 2 } },
        ]
    },
    {
        question: "4. Що ти робиш, коли йде дощ?",
        answers: [
            { text: "Ховаюся, вода – це моя найбільша проблема.", scores: { enderman: 3 } },
            { text: "Мені байдуже, я продовжую свою справу.", scores: { creeper: 1, spider: 1 } },
            { text: "Шукаю притулку десь в шахті ", scores: { zombie: 2 } },
        ]
    },
    {
        question: "5. Яка твоя найбільша слабкість?",
        answers: [
            { text: "Кішки та залізні големи.", scores: { creeper: 2 } },
            { text: "Сонячне світло.", scores: { zombie: 2, skeleton: 2 } },
            { text: "Погляд в очі та вода.", scores: { enderman: 2 } },
            { text: "Будь-яка миттєва шкода", scores: { spider: 2 } },
        ]
    },
    {
        question: "6. Яке місце в світі Minecraft тобі найкомфортніше?",
        answers: [
            { text: "Темні, глибокі печери.", scores: { spider: 2, zombie: 1 } },
            { text: "Зовнішній світ (End) або будь-яке високе місце.", scores: { enderman: 2 } },
            { text: "Поверхня землі, де багато трави та кущів.", scores: { creeper: 2, skeleton: 1 } },
        ]
    },
    {
        question: "7. Який твій улюблений звук?",
        answers: [
            { text: "Шипіння", scores: { creeper: 3 } },
            { text: "Клацання.", scores: { skeleton: 2, spider: 1 } },
            { text: "Тиша", scores: { enderman: 1 } },
            { text: "Звук трави", scores: { zombie: 2 } },
        ]
    },
    {
        question: "8. Що ти робиш, коли не можеш досягти цілі напряму?",
        answers: [
            { text: "Шукаю спосіб обійти перешкоду", scores: { spider: 3 } },
            { text: "Продовжую йти вперед", scores: { zombie: 2 } },
            { text: "Відходжу і атакую з іншої позиції/дистанції.", scores: { skeleton: 1 } },
            { text: "Просто телепортуюся.", scores: { enderman: 2 } },
        ]
    },
    {
        question: "9. Який твій 'видобуток' чи цінність?",
        answers: [
            { text: "Порох", scores: { creeper: 2 } },
            { text: "Кістки та стріли.", scores: { skeleton: 2 } },
            { text: "Ендер-перли", scores: { enderman: 2 } },
            { text: "Нитки та очі павука.", scores: { spider: 2 } },
            { text: "Гнила плоть", scores: { zombie: 2 } },
        ]
    },
    {
        question: "10. Яка твоя філософія життя?",
        answers: [
            { text: "Тихіше їдеш – далі будеш", scores: { creeper: 2 } },
            { text: "Постійний рух — запорука успіху.", scores: { zombie: 2 } },
            { text: "Дистанція та точність — головне.", scores: { skeleton: 2 } },
            { text: "Завжди шукай шляхи обходу та переваги висоти.", scores: { spider: 2 } },
            { text: "Тримайся подалі від чужих поглядів.", scores: { enderman: 2 } },
        ]
    },
];

const results = {
    creeper: {
        name: "Кріпер 💥",
        description: "Ти — тихий, але небезпечний **Кріпер**. Ти інтроверт, цінуєш тишу і самотність. Але коли справа доходить до справи, ти дієш швидко і несподівано, залишаючи після себе... глибокий слід."
    },
    zombie: {
        name: "Зомбі 🧟",
        description: "Ти — наполегливий і невтомний **Зомбі**. Твоя мета завжди чітка, і ти будеш йти до неї, незважаючи ні на що. Ти простий, але непереможний у своїй впертості. Обережно зі світлом!"
    },
    enderman: {
        name: "Ендермен 🌌",
        description: "Ти — таємничий **Ендермен**. Ти інтригуєш, розумний і відсторонений. Ти любиш переміщатися між світами і колекціонувати незвичайні речі. Просто не дивися нікому в очі і тримайся подалі від води!"
    },
    skeleton: {
        name: "Скелет 🏹",
        description: "Ти — **Скелет**. Ти полюбляєш тримати дистанцію і вирішувати проблеми на відстані. Твоя зброя — точність і терпіння. Ти вправний стрілець і завжди готовий до бою, але сонце змушує тебе ховатися."
    },
    spider: {
        name: "Павук 🕷️",
        description: "Ти — спритний **Павук**. Ти можеш дертися по стінах і швидко пересуватися. Ти гнучкий, адаптивний, і нічна погоня — твоя улюблена розвага. Ти завжди знайдеш найнесподіваніший шлях."
    }
};


let currentQuestionIndex = 0;
let score = {
    creeper: 0,
    zombie: 0,
    enderman: 0,
    skeleton: 0, 
    spider: 0    
};

const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startBtn.classList.add('hidden');
    quizEl.classList.remove('hidden');
    resultEl.classList.add('hidden');
    currentQuestionIndex = 0;
    score = { creeper: 0, zombie: 0, enderman: 0, skeleton: 0, spider: 0 };
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        
        quizEl.innerHTML = `
            <div class="question-text">${questionData.question}</div>
            <div id="answer-options-container" class="answer-options">
                </div>
        `;

        const answerContainer = document.getElementById('answer-options-container');

        questionData.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.addEventListener('click', () => selectAnswer(index));
            answerContainer.appendChild(button);
        });

    } else {
        showResult();
    }
}

function selectAnswer(answerIndex) {
    const questionData = questions[currentQuestionIndex];
    const selectedAnswer = questionData.answers[answerIndex];

    for (const mob in selectedAnswer.scores) {
        if (score.hasOwnProperty(mob)) {
            score[mob] += selectedAnswer.scores[mob];
        }
    }

    currentQuestionIndex++;
    showQuestion(); 
}

function showResult() {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    restartBtn.classList.remove('hidden');

    let maxScore = -Infinity;
    let resultMob = 'creeper'; 

    for (const mob in score) {
        if (score[mob] > maxScore) {
            maxScore = score[mob];
            resultMob = mob;
        }
    }

    const finalResult = results[resultMob];

    resultEl.innerHTML = `
        <h2>🎉 Твій результат: ${finalResult.name}!</h2>
        <p>${finalResult.description}</p>
        <p style="font-size: 0.9em; margin-top: 15px; color: #ff99cc;">(Твої бали: Кріпер: ${score.creeper}, Зомбі: ${score.zombie}, Ендермен: ${score.enderman}, Скелет: ${score.skeleton}, Павук: ${score.spider})</p>
    `;
}

function restartQuiz() {
    startQuiz(); 
    restartBtn.classList.add('hidden');
}