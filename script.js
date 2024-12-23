document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="auth"]');
    const nameDiv = document.getElementById('name');
    const dateDiv = document.getElementById('date');
    const genderDiv = document.getElementById('gender');
    const resultDiv = document.getElementById('result');
    const btn = document.getElementById('btn');
    const slides = document.querySelectorAll('.slide');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        const date = document.getElementById('dateInput').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        localStorage.setItem('profileData', JSON.stringify({ name, date, gender }));

        slides[0].style.display = 'none';
        slides[1].style.display = 'block';

        nameDiv.textContent = `Имя: ${name}`;
        dateDiv.textContent = `Дата рождения: ${date}`;
        genderDiv.textContent = `Пол: ${gender}`;
    });

    btn.addEventListener('click', () => {
        localStorage.removeItem('profileData');
        slides[0].style.display = 'block';
        slides[1].style.display = 'none';
        nameDiv.textContent = '';
        dateDiv.textContent = '';
        genderDiv.textContent = '';
    });
});


//Тест викторина
document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz');
    const resultsDiv = document.getElementById('results');
    const correctAnswers = {
        q1: 'B',
        q2: 'B',
        q3: 'C',
        q4: 'A',
        q5: 'D',
        q6: 'B'
    };

    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let score = 0;
        let answers = {};

        for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
            const questionName = `q${i}`;
            const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            if (selectedAnswer) {
                answers[questionName] = selectedAnswer.value;
            }
        }

        for (const question in correctAnswers) {
            if (answers[question] === correctAnswers[question]) {
                score++;
            }
        }

        const totalQuestions = Object.keys(correctAnswers).length;
        const percentage = (score / totalQuestions) * 100;

        let resultsMessage = `You got ${score} out of ${totalQuestions} questions correct.`;

        if (percentage >= 75) {
            resultsMessage += "<br>Идеальные знания игры";
        } else if (percentage >= 50) {
            resultsMessage += "<br>Зорошая работы,ты знаешь игру на 4";
        } else {
            resultsMessage += "<br>Пришло время еще немного потренироваться в наблюдении!";
        }

        resultsDiv.innerHTML = resultsMessage;


    });
});

document.getElementById("btn").addEventListener("click", () => {
    clearTest();
    document.documentElement.style.setProperty("--pos", "0px");
});

document.getElementById("btn2").addEventListener("click", () => {
    clearTest();
    document.documentElement.style.setProperty("--pos", "0px");
});

function clearTest() {
    form1.reset();
    form2.reset();
}