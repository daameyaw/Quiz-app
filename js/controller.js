import startView from "./views/startView.js";
import * as model from "./model.js";

const controlPopup = function () {
  console.log("hello");
};

const controlClosePopup = function () {
  console.log("david");
};
const controlSubmit = async function () {
  try {
    const level = startView.getLevel();
    const number = startView.getNumber();

    await model.loadQuestions(number, level);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  startView.handleStartPopup(controlPopup);
  startView.handleClosePopupBtn(controlClosePopup);
  startView.handleClosePopupOverlay();
  startView.handleStart(controlSubmit);
};
init();
