import View from "./view.js";
import * as model from "../model.js";

const decisionPopup = document.querySelector(".submit");
const overlaySubmit = document.querySelector(".overlaySubmit");
const returnToQuiz = document.querySelector(".submit-popup__btn--violet");
const popup__closebtn = document.querySelector(".popup__close-btn");
const restartSubmit = document.querySelector(".restartSubmit");

class submitView extends View {
  _parentElement = document.querySelector(".decision");

  handleSubmitBtn(handler) {
    this._parentElement.addEventListener("click", function (e) {
      decisionPopup.classList.remove("hidden");
      // restartSubmit.classList.remove("hidden");

      handler();
    });
  }
  handleReturnToQuizByButton() {
    returnToQuiz.addEventListener("click", function (e) {
      decisionPopup.classList.add("hidden");
    });
  }

  handleReturnToQuizByOverlay() {
    overlaySubmit.addEventListener("click", function (e) {
      decisionPopup.classList.add("hidden");
      overlaySubmit.classList.add("hidden");
    });
  }

  handleReturnToQuizByX() {
    popup__closebtn.addEventListener("click", function (e) {
      decisionPopup.classList.add("hidden");
      overlaySubmit.classList.add("hidden");
    });
  }

  _generateMarkupP() {
    return `<div class="quiz__finish">finish</div>
    <button class="quiz__submit">submit</button>`;
  }
}

export default new submitView();
