import View from "./view.js";

const decisionPopup = document.querySelector(".submit");

class submitView extends View {
  _parentElement = document.querySelector(".decision");

  handleSubmitBtn(handler) {
    this._parentElement.addEventListener("click", function (e) {
      decisionPopup.classList.remove("hidden");
      handler();
    });
  }

  _generateMarkupP() {
    return `<div class="quiz__finish">finish</div>
    <button class="quiz__submit">submit</button>`;
  }
}

export default new submitView();
