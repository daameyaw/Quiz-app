import View from "./view.js";
import * as model from "../model.js";
import timerView from "./timerView.js";

const resultsPageLink = document.querySelector(".results-page");
const dav = document.querySelector(".david");
const container = document.querySelector(".container");

const parentElement = document.querySelector(".resultsPage");
console.log(parentElement);
console.log(container);

class resultView extends View {
  _parentElement = document.querySelector(".results");

  handleViewResults(handler) {
    resultsPageLink.addEventListener("click", function () {
      parentElement.classList.remove("hidden");
      container.classList.add("hidden");
      handler();
    });
  }

  _generateMarkup() {
    return `
    ${this.data.map(
      (question = function () {
        this._generateResultForQuestion(question);
      })
    )};
    `;
  }

  _generateMarkup(questions) {
    const html = questions.map((question, i) => {
      return `
      <div>
      ${
        i === 0
          ? `
          <div class="results__score">
            <h3>total score</h3>
            <p>
              ${model.state.score}/${model.state.questions.length}
            </p>
          </div> `
          : ""
      }

    <div class="results__question">
      <p class="results__question-number">Question ${i + 1}</p>
    </div>
    <div class="results__icon-con">
      <div class="results__icondiv">
      ${
        question.isCorrect
          ? `
        <ion-icon
          class="select__item-icon results__icon"
          name="happy-outline"
        ></ion-icon>
        `
          : `<ion-icon
        class="select__item-icon results__icon"
        name="sad-outline"
      ></ion-icon>`
      }
      </div>
      <div class="bigger">
        <div class="results__container">
          <p class="results__text">${question.question}?</p>
          <button class="results__options">
          <p>
          ${
            model.state.questions.selectedOption === "A"
              ? `              <span
           ><ion-icon
             class="select__item-icon results__options--icon"
             name="checkmark-done-outline"
           ></ion-icon
         ></span> `
              : `<span
         ><ion-icon
           class="select__item-icon results__options--icon"
           name="close-outline"
         ></ion-icon
       ></span>
`
          }
         ${question.optionA}
       </p>
          </button>
          <button class="results__options">
          <p>
          ${
            model.state.questions.selectedOption === "B"
              ? `              <span
           ><ion-icon
             class="select__item-icon results__options--icon"
             name="checkmark-done-outline"
           ></ion-icon
         ></span> `
              : `<span
         ><ion-icon
           class="select__item-icon results__options--icon"
           name="close-outline"
         ></ion-icon
       ></span>
`
          }
         ${question.optionB}
       </p>
     </button>
          ${
            question.optionC
              ? `
              <button class="results__options">
              <p>
              ${
                model.state.questions.selectedOption === "C"
                  ? `              <span
               ><ion-icon
                 class="select__item-icon results__options--icon"
                 name="checkmark-done-outline"
               ></ion-icon
             ></span> `
                  : `<span
             ><ion-icon
               class="select__item-icon results__options--icon"
               name="close-outline"
             ></ion-icon
           ></span>
`
              }
             ${question.optionC}
           </p>
           </button>`
              : ""
          }
          ${
            question.optionD
              ? `
              <button class="results__options">
              <p>
              ${
                model.state.questions.selectedOption === "D"
                  ? `<span
               ><ion-icon
                 class="select__item-icon results__options--icon"
                 name="checkmark-done-outline"
               ></ion-icon
             ></span> `
                  : `<span
             ><ion-icon
               class="select__item-icon results__options--icon"
               name="close-outline"
             ></ion-icon
           ></span>
`
              }
             ${question.optionD}
           </p>
           </button>`
              : ""
          }
          ${
            question.optionE
              ? `
              <button class="results__options">
              <p>
              ${
                model.state.questions.selectedOption === "E"
                  ? `<span
               ><ion-icon
                 class="select__item-icon results__options--icon"
                 name="checkmark-done-outline"
               ></ion-icon
             ></span> `
                  : `<span
             ><ion-icon
               class="select__item-icon results__options--icon"
               name="close-outline"
             ></ion-icon
           ></span>
`
              }
             ${question.optionE}
           </p>
           </button>`
              : ""
          }  
        </div>
        ${
          question.explanation
            ? `
            <div class="question__explanation">
            <h3 class="question__explanation-heading">Explanation</h3>
            <p class="question__explanation-text">
            ${question.explanation}
            </p>
          </div>`
            : ""
        }
      </div>
    </div> 
    </div>
`;
    });

    return html.join("");
  }
}

export default new resultView();
