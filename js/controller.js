import startView from "./views/startView.js";

const controlPopup = function () {
  console.log("hello");
};

const controlClosePopup = function () {
  console.log("david");
};

const init = function () {
  startView.handleStartPopup(controlPopup);
  startView.handleClosePopup(controlClosePopup);
};
init();
