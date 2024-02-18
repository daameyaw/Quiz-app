import startView from "./views/startView.js";
import * as model from "./model.js";
import questionsView from "./views/questionsView.js";
import paginationView from "./views/paginationView.js";
import optionsView from "./views/optionsView.js";
import submitView from "./views/submitView.js";
import View from "./views/view.js";

let category;
const controlPopup = function () {};

const controlClosePopup = function () {};
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
    // questionsView.render(model.state.questions);
    questionsView.render(model.getQuestionsByPage());
    submitView.renderSubmit();
    startView.controlDecisionDisplay();

    questionsView.closePopup();

    paginationView.renderPagination(model.state);
  } catch (error) {
    console.log(error);
    questionsView._clear();
    questionsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  questionsView.render(model.getQuestionsByPage(goToPage));

  paginationView.renderPagination(model.state);
};

const controlMarking = function (selectedOption) {
  console.log(model.state.questions[model.state.page - 1]);
  if (
    selectedOption ===
    model.state.questions[model.state.page - 1].correctAnswerChar
  ) {
    console.log("correct");
    model.state.questions[model.state.page - 1] = {
      ...model.state.questions[model.state.page - 1],
      isCorrect: true,
    };
    console.log(model.state.questions);
  } else {
    console.log("wrong");
    model.state.questions[model.state.page - 1] = {
      ...model.state.questions[model.state.page - 1],
      isCorrect: false,
    };
    console.log(model.state.questions);
  }
};

const init = function () {
  startView.controlStartDisplay();
  startView.handleStartPopup(controlPopup);
  startView.handleClosePopupBtn(controlClosePopup);
  startView.handleClosePopupOverlay();
  startView.handleStart(controlSubmit);
  paginationView.handlePagination(controlPagination);
  optionsView.handleMarking(controlMarking);
};
init();
