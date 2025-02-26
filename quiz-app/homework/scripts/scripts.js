// global variables
const submitButton = document.querySelector("button[type=submit]");
// selected li items inside of ul.answer-options
const answerOptions = document.querySelector(".answer-options");
const questionsDisplay = document.getElementById("questionsDisplay");
const displayQuestions = document.getElementById("displayQuestions");
const multipleChoice = document.getElementById("multipleChoice");
// can select option with index
const ANSWER_KEYS = "abcdefghijklmnopqrstuvwxyz";
const answerOptionsSpan = document.getElementById("answerOptionsSpan");

// init empty array
let quizQuestions;

function renderQuestions() {
  // checking if there's stored data
  if (displayQuestions) {
    const questionsInLocalStorage = localStorage.getItem("QUIZ_APP_questions");
    if (questionsInLocalStorage) quizQuestions = questionsInLocalStorage;
    else quizQuestions = [];
    displayQuestions.innerHTML = JSON.stringify(quizQuestions, null, 2);

    // checking if local Storage key is there
    quizQuestions =
      JSON.parse(localStorage.getItem("QUIZ_APP_questions")) || [];
    // setting innerHTML of display questins ( change later to actually display right UI )
    displayQuestions.innerHTML = JSON.stringify(
      // if quiz questions is falsy ( null, undefined, false, 0 ) ->
      // then use empty array ( [] ) else use that quizQuestions variable
      quizQuestions || [],
      null,
      2
    );
  }
}

// reset values
function resetValues() {
  questionInput.value = "";
  // TODO: i think repalce or jsut append
  document.querySelector(".answer-options").innerHTML = "";
  document
    .querySelector(".answer-options")
    .appendChild(createAnswerOptionInputWithButton());
  addAnswerButton = document.querySelector(".answer-options button");
  addAnswerButton.addEventListener("click", handleAddAnswerOption);

  correctAnswerDropdown.innerHTML =
    "<option value=''>select correct answer</option>";
}

// add question handler ----------------------------------
if (submitButton) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    // here setting question from questinINput.value
    const question = questionInput.value;

    // set empty array for answerOptionsArr
    let answerOptionsArr = [];

    // run for loop on answerOptions that selected earlier except for last 1 becasue that is input
    const answerOptionsLi = document.querySelector(".answer-options").children;
    for (let i = 0; i < answerOptionsLi.length - 1; i++) {
      // pushing how answer options is { key: "string", option: "string" }
      answerOptionsArr.push({
        // push key which is ANSWER_KEYS - the lowercase alphabet string earlier and index becasue 0 is a and 1 is b ....so on
        key: ANSWER_KEYS[i],
        // selected single list item from answerOptions and getting property textContent
        option: answerOptionsLi[i].textContent,
      });
    }
    console.log("answerOptionsArr", answerOptionsArr);
    // crate object to store in localStorage
    const questionObj = {
      // question -> questionINput.value
      question: question,
      // answer options which was created just code right above
      answerOptions: answerOptionsArr,
      // actual answer from dropdown value which is in the DOM
      answer: correctAnswerDropdown.value,
    };

    // push this question obj to quizQuesions Arr
    quizQuestions.push(questionObj);

    // finally set the new quizQuestions withnew question in localStorage
    localStorage.setItem("QUIZ_APP_questions", JSON.stringify(quizQuestions));

    // clear valeus
    resetValues();

    // then re render the questions
    renderQuestions();
  });
}

// element generators ---------------------------------
function createAnswerOptionInputWithButton() {
  const li = document.createElement("li");
  const input = document.createElement("input");
  li.appendChild(input);
  const button = document.createElement("button");
  button.textContent = "+";
  li.appendChild(button);
  return li;
}
// element generators ---------------------------------
function createDropdownAnswerOption(answerKey, answerText) {
  const option = document.createElement("option");
  option.value = answerKey;
  option.textContent = answerText;
  return option;
}

// add answer option handler --------------------------------
let addAnswerButton = document.querySelector(".answer-options li > button");
if (addAnswerButton) {
  addAnswerButton.addEventListener("click", handleAddAnswerOption);
}

function handleAddAnswerOption() {
  // creatte list item
  const li = document.createElement("li");
  // adding value from input and adding to textContent of newly created list item
  li.textContent = document.querySelector(".answer-options li > input").value; // value from input

  // replacing inside of answerOptions list -> inut and button with li item that just created
  answerOptions.replaceChild(li, answerOptions.lastElementChild);
  // reset to emtpy dropdown
  correctAnswerDropdown.innerHTML =
    "<option value=''>select correct answer</option>";

  for (let i = 0; i < answerOptions.children.length; i++) {
    const answerOption = answerOptions.children[i].textContent;
    correctAnswerDropdown.appendChild(
      createDropdownAnswerOption(ANSWER_KEYS[i], answerOption)
    );
  }

  answerOptions.appendChild(createAnswerOptionInputWithButton());
  addAnswerButton = document.querySelector(".answer-options button");
  addAnswerButton.addEventListener("click", handleAddAnswerOption);
}

//  -------------------------------------------------------
const storedQuestions =
  JSON.parse(localStorage.getItem("QUIZ_APP_questions")) || [];

// questions.innerHTML = storedQuestions;

console.log("storedQuestions ", storedQuestions);

function renderDisplay() {
  for (let i = 0; i < storedQuestions.length; i++) {
    const current = storedQuestions[i];
    // question
    const question = current.question;
    //correct answer
    const answer = current.answer;
    // when create element -> it's ready to get enriched
    const div = document.createElement("div"); // <div></div>
    const h3 = document.createElement("h3"); // <h3></h3>
    h3.textContent = question;
    // <h3>question content</h3>
    div.appendChild(h3); // <div><h3>questionContent</h3></div>
    const answerOptionsSpan = document.createElement("span");
    answerOptionsSpan.id = "answerOptionsSpan";

    //loop for cycling through the answerOptions to get the values and answers
    const answerOptionsObj = current.answerOptions;
    console.log(answerOptionsObj);
    /*
        BREAK
    */
    for (let a = 0; a < answerOptionsObj.length; a++) {
      const answerOptionValues = answerOptionsObj[a].key;
      const answerOptionOptions = answerOptionsObj[a].option;

      answerOptionsSpan.innerHTML += `<input type="radio" name="Answers" value="${answerOptionValues}"> ${answerOptionValues}: ${answerOptionOptions} <br />`;

      div.appendChild(answerOptionsSpan);
    }

    const submitQuestionsBtn = document.createElement("button");
    submitQuestionsBtn.id = "submitQuestions";
    submitQuestionsBtn.textContent = "Answer Test";
    div.appendChild(submitQuestionsBtn);
    // p.textContent = JSON.stringify(storedQuestions[i]);
    if (questionsDisplay) {
      questionsDisplay.appendChild(div);
    }

    if (submitQuestionsBtn) {
      submitQuestionsBtn.addEventListener("click", () => {
        const checkAnswer = document.querySelector(
          'input[name="Answers"]:checked'
        ).value;
        console.log(checkAnswer);
        console.log(answer);
        if (checkAnswer === answer) {
          alert("Correct Answer!");
        }
      });
    }
  }
}

// onload of page run function renderQuestions
window.onload = renderQuestions;
// window.onload = renderDisplay();
document.addEventListener("DOMContentLoaded", renderDisplay);

// function checkAnswer() {

// }
