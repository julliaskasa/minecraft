const startScreen = document.querySelector('.start-screen');
const questionScreen = document.querySelector('.question-screen');
const resultScreen = document.querySelector('.result-screen');

const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.answers');
const nextBtn = document.querySelector('.next-btn');
const resultText = document.querySelector('.result-text');

const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');

let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "Хто створив Minecraft?",
    answers: ["Марк Цукерберг", "Маркус Перссон", "Білл Гейтс", "Ілон Маск"],
    correct: 1
  },
  {
    question: "Як називається мир, де знаходиться дракон?",
    answers: ["Пекло", "Небеса", "Край", "Пустеля"],
    correct: 2
  },
  {
    question: "Який блок не можна зруйнувати у виживанні?",
    answers: ["Обсидіан", "Бедрок", "Камінь", "Залізо"],
    correct: 1
  },
  {
    question: "Який предмет потрібен, щоб потрапити в Пекло?",
    answers: ["Карта", "Відро води", "Портал із обсидіану", "Книга"],
    correct: 2
  },
  {
    question: "Який моб вибухає при наближенні?",
    answers: ["Скелет", "Кріпер", "Зомбі", "Павук"],
    correct: 1
  },

  {
    question: "Який інструмент потрібен для добування каменю?",
    answers: ["Лопата", "Кирка", "Сокира", "Рука"],
    correct: 1
  },

   {
    question: "Який моб дає м’ясо при смерті?",
    answers: ["Корова", "Скелет", "Кріпер", "Павук"],
    correct: 0
  }
];

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';

  q.answers.forEach((ans, i) => {
    const btn = document.createElement('div');
    btn.classList.add('answer');
    btn.textContent = ans;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index, element) {
  const q = questions[currentQuestion];
  const allAnswers = document.querySelectorAll('.answer');

  allAnswers.forEach(a => a.style.pointerEvents = 'none');

  if (index === q.correct) {
    element.classList.add('correct');
    score++;
  } else {
    element.classList.add('wrong');
    allAnswers[q.correct].classList.add('correct');
  }

  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = 'none';
  } else {
    showResult();
  }
}

function showResult() {
  questionScreen.style.display = 'none';
  resultScreen.style.display = 'block';

  let message = '';
  const percent = (score / questions.length) * 100;

  if (percent === 100) {
    message = "Ти профі по Minecraft! Молодець! 🌟";
    resultText.style.color = "green";
  } else if (percent >= 50) {
    message = "Ти непогано знаєш Minecraft. 👍";
    resultText.style.color = "orange";
  } else {
    message = "Ти погано знаєш Minecraft. Мабуть, варто ще трохи побавитися в Minecraft 😉»";
    resultText.style.color = "red";
  }

  resultText.textContent = `Ти набрав ${score} з ${questions.length} балів! ${message}`;
}

startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  showQuestion();
});

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', () => {
  resultScreen.style.display = 'none';
  startScreen.style.display = 'block';
  currentQuestion = 0;
  score = 0;
});
