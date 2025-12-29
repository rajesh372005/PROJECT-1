const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for web page styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "Java", "HTML", "C"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        correct: 0
    },
    {
        question: "Which tag is used for images in HTML?",
        options: ["<image>", "<img>", "<src>", "<pic>"],
        correct: 1
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
        correct: 2
    },
    {
        question: "CSS stands for?",
        options: [
            "Color Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets"
        ],
        correct: 2
    },
    {
        question: "Which HTML tag is used for hyperlinks?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0
    },
    {
        question: "Which keyword is used to define a variable in JavaScript?",
        options: ["int", "var", "define", "let"],
        correct: 1
    },
    {
        question: "Which protocol is used to access websites?",
        options: ["FTP", "SMTP", "HTTP", "SNMP"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = `Q${currentQuestion + 1}. ${q.question}`;
    selectedAnswer = null;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.classList.remove("selected");
    });
}

function selectOption(index) {
    selectedAnswer = index;

    optionButtons.forEach(btn => btn.classList.remove("selected"));
    optionButtons[index].classList.add("selected");
}

function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an option");
        return;
    }

    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".quiz-container").innerHTML = `
        <h1>Quiz Completed</h1>
        <h2>Your Score: ${score} / ${quizData.length}</h2>
        <p>Thank you for participating</p>
    `;
}

loadQuestion();
