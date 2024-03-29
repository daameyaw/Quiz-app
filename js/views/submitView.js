import View from "./view.js";

const decisionPopup = document.querySelector(".submit");
const overlay = document.querySelector(".overlay");
const returnToQuiz = document.querySelector(".submit-popup__btn--violet");
const popup__closebtn = document.querySelector(".popup__close-btn");

class submitView extends View {
  _parentElement = document.querySelector(".decision");

  handleSubmitBtn(handler) {
    this._parentElement.addEventListener("click", function (e) {
      decisionPopup.classList.remove("hidden");
      handler();
    });
  }
  handleReturnToQuizByButton(handler) {
    returnToQuiz.addEventListener("click", function (e) {
      decisionPopup.classList.add("hidden");
      overlay.classList.add("hidden");
      handler();
    });
  }

  handleReturnToQuizByOverlay(handler) {
    overlay.addEventListener("click", function (e) {
      console.log("overlay clicked");
      decisionPopup.classList.add("hidden");
      overlay.classList.add("hidden");
      handler();
    });
  }

  handleReturnToQuizByX(handler) {
    popup__closebtn.addEventListener("click", function (e) {
      console.log("X clicked");
      decisionPopup.classList.add("hidden");
      overlay.classList.add("hidden");
      handler();
    });
  }

  _generateMarkupP() {
    return `<div class="quiz__finish">finish</div>
    <button class="quiz__submit">submit</button>`;
  }
}

export default new submitView();
