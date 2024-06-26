import View from "./view.js";
import startView from "./startView.js";
import * as model from "../model.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");

class questionsView extends View {
  _parentElement = document.querySelector(".question");
  #message = "Could not load questions.Please try again!";

  closePopup() {
    start.classList.add("hidden");
    overlay.classList.add("hidden");
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

  _generateMarkup(questions) {
    const htmlArray = questions.map((question, i) => {
      return `
      <div class="quiz__number">Question ${model.state.page}/${
        model.state.questions.length
      }</div>
      <p class="question__text">${question.question}</p>

      <div class="options">

      <button class="question__options btn A" data-option="A">
      <input type="radio" name="questionOptions" class="bigger-radio ">
      <p>${question.optionA}</p> 
    </button>
          
    <button class="question__options btn B" data-option="B">
    <input type="radio" name="questionOptions" class="bigger-radio">
    <p>${question.optionB}</p> 
  </button>
  
      ${
        question.optionC
          ? `
          <button class="question__options btn C" data-option="C">
  <input type="radio" name="questionOptions" class="bigger-radio">
  <p>${question.optionC}</p> 
</button>
`
          : ""
      }

      ${
        question.optionD
          ? `
          <button class="question__options btn D" data-option="D">
  <input type="radio" name="questionOptions" class="bigger-radio">
  <p>${question.optionD}</p> 
</button>
`
          : ""
      }

      ${
        question.optionE
          ? `
          <button class="question__options btn E" data-option="E">
  <input type="radio" name="questionOptions" class="bigger-radio">
  <p>${question.optionE}</p> 
</button>
 `
          : ""
      }
      </div>
    `;
    });

    return htmlArray.join("");
  }
}

export default new questionsView();
