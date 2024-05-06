import View from "./view.js";
import * as model from "../model.js";
import timerView from "./timerView.js";

const resultsPageLink = document.querySelector(".results-page");
const dav = document.querySelector(".david");
const container = document.querySelector(".container");
const retake = document.querySelector(".retake");
const another = document.querySelector(".another");

const parentElement = document.querySelector(".resultsPage");

class resultView extends View {
  _parentElement = document.querySelector(".results");

  handleViewResults(handler) {
    resultsPageLink.addEventListener("click", function () {
      parentElement.classList.remove("hidden");
      container.classList.add("hidden");
      handler();
    });
  }

  handleRetakeQuiz(handler) {
    retake.addEventListener("click", function () {
      console.log(retake);
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
          <div class="parent">
          <div class="child retake">
            <button>Retake Quiz</button> 
          </div>
          <div class="results__score">
            <h3>total score</h3>
            <p>
              ${model.state.score}/${model.state.questions.length}
            </p>
          </div>
          <div class="child another">
            <button>Take another one😉</button>
          </div> 
        </div>
   `
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
              <span class="letter">
               <strong>A .</strong>
              </span>
              ${question.optionA}
           </p>
          </button>


          <button class="results__options">
           <p>
             <span class="letter">
              <strong>B .</strong>
             </span>         
             ${question.optionB}
            </p>
          </button>

          ${
            question.optionC
              ? `
              <button class="results__options">
                <p>
                 <span class="letter">
                  <strong>C .</strong>
                 </span> 
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
                  <span class="letter">
                   <strong>D .</strong>
                  </span>
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
                  <span class="letter">
                   <strong>E .</strong>
                  </span>
                  ${question.optionE}
                </p>
              </button>`
              : ""
          }  
        </div>
        
            <div class="question__explanation">
            <p class="question__explanation-text question__explanation-text--margin"">Your Answer ${
              question.selectedOption
            }</p>
            <p class="question__explanation-text">
            Correct Answer : ${question.correctAnswerChar}
            </p>
          </div>
            
      </div>
    </div> 

    </div>
  
`;
    });

    return html.join("");
  }
}

export default new resultView();
