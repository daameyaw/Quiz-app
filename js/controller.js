import startView from "./views/startView.js";

const controlPopup = function () {
  console.log("hello");
};

const init = function () {
  startView.handleStartPopup(controlPopup);
};
init();
