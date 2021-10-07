const quizData = [
    {
        question: 'What is the capital of Brazil?',
        a: 'Fortaleza',
        b: 'Rio de Janeiro',
        c: 'Brasilia',
        d: 'São Paulo',
        correct: 'c'
    }, 
    {
        question: 'What temperature does water boil at?',
        a: '100°C',
        b: '110°C',
        c: '101°C',
        d: '1000°C',
        correct: 'a'
    },
    {
        question: 'Which country is famous for tulips?',
        a: 'Ireland',
        b: 'Belgium',
        c: 'Brazil',
        d: 'Netherlands',
        correct: 'd'
    },
    {
        question: 'When was the first World War fought?',
        a: '1919',
        b: '1914',
        c: '1937',
        d: '1945',
        correct: 'b'
    },
    {
        question: 'The Holy Book of Muslims is?',
        a: 'Bagavad Gita',
        b: 'Bible',
        c: 'Tripitak',
        d: 'Quran',
        correct: 'd'
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});