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

  // _generateMarkup() {
  //   return `
  //   ${this._data.map(
  //     (question = function () {
  //       this._generateMarkupForQuestion(question);
  //     })
  //   )};
  //   `;
  // }

  _generateMarkup(questions) {
    const htmlArray = questions.map((question, i) => {
      return `
        <div class="quiz__number">Question ${i + 1}/10</div>
        <p class="question__text">${question.question}</p>
        <button class="question__options html">
          <p>${question.optionA}</p>
        </button>
        <button class="question__options"><p>${question.optionB}</p></button>
        <button class="question__options">
          <p>${question.optionC}</p>
        </button>
        <button class="question__options">
          <p>${question.optionD}</p>
        </button>
        <button class="question__options">
          <p>${question.optionE}</p>
        </button>
  
        <div class="question__btns">
          <div class="question__timer">4:00</div>
          <div class="question__prevnext">
            <button class="question__prevnext--prev ">previous</button>
            <button class="question__prevnext--next ">next</button>
          </div>
        </div>
        <div class="quiz__finish">finish</div>
        <button class="quiz__submit">submit</button>
      `;
    });

    return htmlArray.join("");
  }
}

export default new questionsView();
