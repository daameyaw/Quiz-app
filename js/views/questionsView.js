import View from "./view.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");

class questionsView extends View {
  _parentElement = document.querySelector(".question");
  #message = "Could not load questions.Please try again!";

  closePopup() {
    start.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  print() {
    console.log(this._parentElement);
    // console.log(hello);
  }

  renderSpinner() {
    const markup = ` <div class="spinner">
        <ion-icon class="spinner__icon" name="reload-outline"></ion-icon>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.#message) {
    const markup = `<div class="error">
          <div>
          </div>
          <ion-icon class="select__item-icon"  name="remove-circle-outline"></ion-icon>
             <p>${message}</p>
           </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    return `
    ${this._data.map(
      (question = function () {
        this._generateMarkupForQuestion(question);
      })
    )};
    `;
  }

  _generateMarkupForQuestion(question) {
    return `<div class="quiz__number">Question 1/10</div>
      <p class="question__text">${question._data.question}</p>
      <button class="question__options html">
        <p>${question._data.optionA}</p>
      </button>
      <button class="question__options"><p>${question._data.optionB}</p></button>
      <button class="question__options">
        <p>${question._data.optionC}</p>
      </button>
      <button class="question__options">
        <p>${question._data.optionD}</p>
      </button>
      <button class="question__options">
        <p>${question._data.optionE}</p>
      </button>

      <button class="question__options">
        <p>${question._data.option}</p>
      </button>
      <div class="question__btns">
        <div class="question__timer">4:00</div>
        <div class="question__prevnext">
          <button class="question__prevnext--prev hidden">previous</button>
          <button class="question__prevnext--next hidden">next</button>
        </div>
      </div>
      <div class="quiz__finish">finish</div>
      <button class="quiz__submit">submit</button>
  `;
  }
}

export default new questionsView();
