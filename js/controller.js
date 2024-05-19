import startView from "./views/startView.js";
import * as model from "./model.js";
import questionsView from "./views/questionsView.js";
import paginationView from "./views/paginationView.js";
import optionsView from "./views/optionsView.js";
import submitView from "./views/submitView.js";
import View from "./views/view.js";
import resultView from "./views/resultsView.js";
import timerView from "./views/timerView.js";
import resultsbuttonsView from "./views/resultsbuttonsView.js";
const selectTopic = document.querySelector(".select");
const questionEl = document.querySelector(".question");
const timer = document.querySelector(".question__timer");
const resultsPageLink = document.querySelector(".results-page");

let category;
const controlPopup = function () {};

const controlSubmitBtn = function () {};

const controlClosePopup = function () {};

const controlRetakeQuiz = function () {
  console.log(model.state);
};
function resetQuizState() {
  // Reset questions array
  model.state.questions = model.state.questions.map((question) => {
    return {
      ...question,
      isCorrect: false,
      selectedOption: "",
      selectedAnswer: "",
      answered: false,
    };
  });

  // Reset state properties
  model.state.page = 1;
  model.state.resultsPerPage = 1;
  model.state.correctAnswer = "";
  model.state.score = 0;
  model.state.done = false;
}

const controlRestartQuiz = function () {
  //after fixing this
  //When the Yes.Restart button is clicked
  //1.Clean up the questions
  //2.Call the render method to clear the current page(result page) and print then questions page back using the function

  resetQuizState();
  console.log(model.state);
  questionsView._clear();
  selectTopic.classList.add("hidden");
  questionEl.style.padding = "0rem 4rem";

  questionsView.render(model.getQuestionsByPage());
  submitView.renderSubmit();
  startView.controlDecisionDisplay();
  timer.classList.remove("hidden");
  // timerView.renderTimer();
  // timerView.startTimer();
  paginationView.renderPagination(model.state);
};

const controlSubmit = async function () {
  try {
    const level = startView.getLevel();
    const number = startView.getNumber();
    const topic = startView.getTopic();
    console.log(topic);

    startView.clearStart();
    questionsView.closePopup();
    questionsView._clear();
    questionsView.renderSpinner();

    await model.loadQuestions(number, level, topic);

    questionsView._clear();
    selectTopic.classList.add("hidden");
    questionEl.style.padding = "0rem 4rem";
    // questionsView.render(model.state.questions);
    questionsView.render(model.getQuestionsByPage());
    submitView.renderSubmit();
    startView.controlDecisionDisplay();

    questionsView.closePopup();
    timer.classList.remove("hidden");
    timerView.renderTimer();
    timerView.startTimer();

    paginationView.renderPagination(model.state);
  } catch (error) {
    questionsView._clear();
    questionsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  questionsView.render(model.getQuestionsByPage(goToPage));

  paginationView.renderPagination(model.state);
};

const curQuestion = model.state.questions[model.state.page - 1];

const controlMarking = function (selectedOption, state, selectedAnswer) {
  // model.state.selectedAnswer = selectedAnswer;
  // console.log(model.state.questions[model.state.page - 1].correctAnswerChar);
  console.log(selectedOption);

  //if selectedOption is Correct
  if (
    selectedOption ===
    model.state.questions[model.state.page - 1].correctAnswerChar
  ) {
    if (model.state.questions[model.state.page - 1].answered === false) {
      model.state.score++;
    }

    model.state.questions[model.state.page - 1] = {
      ...model.state.questions[model.state.page - 1],
      isCorrect: true,
      selectedOption: selectedOption,
      answered: true,
    };
    console.log(model.state.score);
    console.log(model.state.questions[model.state.page - 1]);
  }
  //when selectedOption is incorrect
  else {
    if (model.state.questions[model.state.page - 1].answered === true) {
      if (model.state.score >= 1) model.state.score--;
    }

    model.state.questions[model.state.page - 1] = {
      ...model.state.questions[model.state.page - 1],
      isCorrect: false,
      selectedOption: selectedOption,
      answered: false,
    };
    console.log(model.state.score);
    console.log(model.state.questions[model.state.page - 1]);
  }
};
const controlResultsPage = function () {
  resultView.render(model.state.questions);
  resultsPageLink.classList.add("active");
  // resultsbuttonsView.renderResultsButton();
};
submitView.handleReturnToQuizByButton();
submitView.handleReturnToQuizByOverlay();
submitView.handleReturnToQuizByX();
resultView.handleRetakeQuizByButton();
resultView.handleRetakeQuizByOverlay();
resultView.handleRetakeQuizByX();

const init = function () {
  startView.controlStartDisplay();
  startView.handleStartPopup(controlPopup);
  startView.handleClosePopupBtn(controlClosePopup);
  startView.handleClosePopupOverlay();
  startView.handleStart(controlSubmit);
  paginationView.handlePagination(controlPagination);
  optionsView.handleMarking(controlMarking);
  submitView.handleSubmitBtn(controlSubmitBtn);
  resultView.handleViewResults(controlResultsPage);
  resultView.handleRetakeQuiz(controlRetakeQuiz);
  resultView.handleRestartQuiz(controlRestartQuiz);
};
init();
