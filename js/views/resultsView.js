import View from "./view.js";
import * as model from "../model.js";
import timerView from "./timerView.js";

const decisionPopup = document.querySelector(".submit");
const resultsPageLink = document.querySelector(".results-page");
const dav = document.querySelector(".david");
const container = document.querySelector(".container");
const retake = document.querySelector(".retake");
const another = document.querySelector(".another");
const restartSubmit = document.querySelector(".restartSubmit");
const restartPopup = document.querySelector(".restartPopup");
const overlayRetakeQuiz = document.querySelector(".overlayRetakeQuiz");
const returnToQuizButton = document.querySelector(
  ".retakequiz-popup__btn--violet"
);
const popup__closebtn = document.querySelector(".retakequiz-popup__close-btn");
const restartQuizButton = document.querySelector(".restart-page");
const quizStart = document.querySelector(".start-quiz");
const selectTopic = document.querySelector(".select");
const goBackBtn = document.querySelector(".submit-popup__btn--violet");

const parentElement = document.querySelector(".resultsPage");

class resultView extends View {
  _parentElement = document.querySelector(".results");

  handleViewResults(handler) {
    resultsPageLink.addEventListener("click", function () {
      // decisionPopup.classList.add("hidden");
      console.log(decisionPopup);
      parentElement.classList.remove("hidden");
      container.classList.add("hidden");
      handler();
    });
  }

  //Taking another quiz
  handleTakingAnotherQuiz(handler) {
    another.addEventListener("click", function () {
      resultsPageLink.classList.remove("active");
      parentElement.classList.add("hidden");
      container.classList.remove("hidden");
      quizStart.classList.remove("hidden");
      selectTopic.classList.remove("hidden");
      decisionPopup.classList.add("hidden");
      goBackBtn.disabled = false;

      handler();
    });
  }

  //Retaking current quiz
  handleRetakeQuiz(handler) {
    retake.addEventListener("click", function () {
      console.log(retake);
      console.log(restartSubmit);
      resultsPageLink.classList.remove("active");

      restartSubmit.classList.remove("hidden");
      overlayRetakeQuiz.classList.remove("hidden");
      goBackBtn.disabled = false;

      handler();
    });
  }

  handleRetakeQuizByButton() {
    returnToQuizButton.addEventListener("click", function (e) {
      restartSubmit.classList.add("hidden");
    });
  }

  handleRetakeQuizByOverlay() {
    overlayRetakeQuiz.addEventListener("click", function (e) {
      restartSubmit.classList.add("hidden");
      overlayRetakeQuiz.classList.add("hidden");
    });
  }

  handleRetakeQuizByX() {
    popup__closebtn.addEventListener("click", function (e) {
      restartSubmit.classList.add("hidden");
      overlayRetakeQuiz.classList.add("hidden");
    });
  }

  handleRestartQuiz(handler) {
    restartQuizButton.addEventListener("click", function (e) {
      console.log("restart Quiz");
      parentElement.classList.add("hidden");
      container.classList.remove("hidden");
      decisionPopup.classList.add("hidden");

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
                
              </div>
              <div class="results__score">
                <h3>total score</h3>
                <p>
                  ${model.state.score}/${model.state.questions.length}
                </p>
              </div>
              <div class="child another">
                
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
