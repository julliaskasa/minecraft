const questions = [
  { question: "Хто створив Minecraft?", answers: ["Стів Джобс", "Маркус Перссон", "Білл Гейтс", "Джон Кармак"], correct: 1 },
  { question: "У якому році створено Minecraft?", answers: ["2005", "2009", "2011", "2013"], correct: 1 },
  { question: "Яка компанія придбала Minecraft?", answers: ["Google", "Sony", "Microsoft", "Apple"], correct: 2 },
  { question: "Яка особливість світу Minecraft?", answers: ["Круглі об'єкти", "Одна біома", "Світ з кубічних блоків", "Плоский світ"], correct: 2 },
  { question: "Який режим дозволяє будувати без обмежень?", answers: ["Виживання", "Хардкор", "Креатив", "Пригода"], correct: 2 },
  { question: "Як називається головний персонаж?", answers: ["Алекс", "Стів", "Нотч", "Геробрайн"], correct: 1 },
  { question: "Що потрібно для створення кирки?", answers: ["Палки і камінь", "Пісок і дерево", "Залізо і вода", "Камінь і лава"], correct: 0 },
  { question: "Який моб вибухає?", answers: ["Зомбі", "Скелет", "Кріпер", "Павук"], correct: 2 },
  { question: "Що таке Redstone?", answers: ["Їжа", "Моб", "Механізм", "Ресурс для схем"], correct: 3 },
  { question: "Як називається альтернативний вимір?", answers: ["Енд", "Пекло", "Небо", "Земля"], correct: 0 },
  { question: "Що таке 'біом'?", answers: ["Інструмент", "Тип місцевості", "Моб", "Блок"], correct: 1 },
  { question: "Який блок потрібен для порталу в Пекло?", answers: ["Камінь", "Обсидіан", "Залізо", "Пісок"], correct: 1 },
  { question: "Який моб літає?", answers: ["Скелет", "Фантом", "Зомбі", "Слизень"], correct: 1 },
  { question: "Що таке Mojang?", answers: ["Моб", "Компанія", "Біом", "Інструмент"], correct: 1 },
  { question: "Який гравець відомий своїм PvP?", answers: ["Dream", "Technoblade", "CaptainSparklez", "Grian"], correct: 1 },
  { question: "Що таке 'спавн'?", answers: ["Місце появи", "Інструмент", "Моб", "Біом"], correct: 0 },
  { question: "Який блок світиться?", answers: ["Камінь", "Редстоун", "Світлокамінь", "Дерево"], correct: 2 },
  { question: "Який моб нейтральний?", answers: ["Крипер", "Свиня", "Ендермен", "Павук"], correct: 1 },
  { question: "Що таке 'крафт'?", answers: ["Будівництво", "Бій", "Створення предметів", "Малювання"], correct: 2 },
  { question: "Який моб горить на сонці?", answers: ["Курка", "Зомбі", "Кінь", "Кіт"], correct: 1 }
];

let current = 0;
let score = 0;
let shuffled = [];

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const quizContainer = document.getElementById("quizContainer");
const startScreen = document.getElementById("startScreen");
const resultScreen = document.getElementById("resultScreen");
const questionTitle = document.getElementById("questionTitle");
const answerList = document.getElementById("answerList");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  shuffled = shuffleArray([...questions]);
  current = 0;
  score = 0;
  showQuestion();
});

restartBtn.addEventListener("click", () => {
  resultScreen.style.display = "none";
  quizContainer.style.display = "block";
  shuffled = shuffleArray([...questions]);
  current = 0;
  score = 0;
  showQuestion();
});

function showQuestion() {
  const q = shuffled[current];
  questionTitle.textContent = `Питання ${current + 1}: ${q.question}`;
  answerList.innerHTML = "";
  feedback.textContent = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => handleAnswer(i, btn, q.correct));
    const li = document.createElement("li");
    li.appendChild(btn);
    answerList.appendChild(li);
  });
}

function handleAnswer(index, btn, correctIndex) {
  const buttons = answerList.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  if (index === correctIndex) {
    btn.classList.add("correct");
    feedback.textContent = "✅ Правильно!";
    score++;
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "❌ Неправильно!";
    buttons[correctIndex].classList.add("correct");
  }

  setTimeout(() => {
    current++;
    if (current < shuffled.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  quizContainer.style.display = "none";
  resultScreen.style.display = "block";
  scoreText.textContent = `Твій результат: ${score} з ${shuffled.length}`;
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
function showQuestion() {
  const q = shuffled[current];
  questionTitle.textContent = `Питання ${current + 1}: ${q.question}`;
  answerList.innerHTML = "";
  feedback.textContent = "";

  const grid = document.createElement("div");
  grid.className = "answer-grid";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "answer-btn";
    btn.addEventListener("click", () => handleAnswer(i, btn, q.correct));
    grid.appendChild(btn);
  });

  answerList.appendChild(grid);
}
