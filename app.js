const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultDiv = document.querySelector('.result');
const resultSpan = document.querySelector(
  'body > div.result.py-4.d-none.bg-light.text-center > div > p > span'
);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;

  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  resultDiv.classList.remove('d-none');

  scrollTo(0, 0);

  let output = 0;

  const timer = setInterval(() => {
    output++;

    if (output === score) {
      clearInterval(timer);
    }
    resultSpan.innerText = `${output}%`;
  }, 7);
});
