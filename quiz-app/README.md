## Objective

By the end of this lesson, students will be able to create a simple quiz application using HTML, CSS, and JavaScript.

## Lesson Outline

### Introduction

- Brief overview of the quiz app
- Technologies used: HTML, CSS, JavaScript

### Setting Up the Project

- Create a new project directory
- Create `index.html`, `styles.css`, and `script.js` files

### HTML Structure

- Explain the basic structure of an HTML document
- Create the HTML structure for the quiz app

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="quiz-container">
      <div id="question-container">
        <h2 id="question">Question text</h2>
        <div id="answer-buttons" class="btn-container">
          <button class="btn">Answer 1</button>
          <button class="btn">Answer 2</button>
          <button class="btn">Answer 3</button>
          <button class="btn">Answer 4</button>
        </div>
      </div>
      <button id="next-btn" class="btn">Next</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### Styling with CSS (10 minutes)

- Explain the basics of CSS
- Add styles to the quiz app

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}

#quiz-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  text-align: center;
}

.btn-container {
  display: flex;
  flex-direction: column;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
}

.btn:hover {
  background: #0056b3;
}
```

### JavaScript Functionality (20 minutes)

- Explain the basics of JavaScript
- Add JavaScript to handle quiz logic

```javascript
const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Lisbon", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add("hide");
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.innerText = "Restart";
    nextButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    startQuiz();
  }
});

startQuiz();
```

### Q&A and Wrap-Up (10 minutes)

- Answer any questions
- Recap the lesson
- Provide additional resources for further learning

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [JavaScript.info](https://javascript.info/)
