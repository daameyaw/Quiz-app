import View from "./view.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");

class questionsView extends View {
  _parentElement = document.querySelector(".question");

  closePopup() {
    start.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  print() {
    console.log(this._parentElement);
    console.log(hello);
  }

  _generateMarkup() {
    return `<div class="quiz__number">Question 1/10</div>
      <p class="question__text">${this._data.question}</p>
      <button class="question__options html">
        <p>${this._data.optionA}</p>
      </button>
      <button class="question__options"><p>${this._data.optionB}</p></button>
      <button class="question__options">
        <p>${this._data.optionC}</p>
      </button>
      <button class="question__options">
        <p>${this._data.optionD}</p>
      </button>
      <button class="question__options">
        <p>${this._data.optionE}</p>
      </button>

      <button class="question__options">
        <p>${this._data.option}</p>
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
