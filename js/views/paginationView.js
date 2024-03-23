import View from "./view.js";
import * as model from "../model.js";

const decisionPopup = document.querySelector(".submit");
const goBackBtn = document.querySelector(".submit-popup__btn--violet");

class paginationView extends View {
  _parentElement = document.querySelector(".question__btns");

  handlePagination(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btns");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  startTimer() {
    const countdown = function () {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, 0);
      const seconds = String(timeLeft % 60).padStart(2, 0);

      // console.log(minutes, seconds);
      timerEl.textContent = `${minutes}:${seconds}`;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(countdown);
        timerEl.textContent = "Time up!";
        decisionPopup.classList.remove("hidden");
        goBackBtn.disabled = true;
      }
    };

    const totalTime = model.state.questions.length * 30; // 5 minutes in seconds

    let timeLeft = totalTime;

    const timerEl = document.querySelector(".question__timer");
    console.log(timerEl);

    countdown();
    const timer = setInterval(countdown, 1000);

    return timer;
  }

  _generateMarkupP() {
    const numPages = this._data.questions.length / this._data.resultsPerPage;

    //page 1 and more pages
    if (this._data.page === 1 && numPages > 1) {
      return `<div class="question__timer">4:00</div>
      <div class="question__prevnext">
        <button data-goto ="${
          this._data.page + 1
        }" class="btns question__prevnext--next">next</button>
      </div> 
`;
    }

    //     if (this._data.page === numPages && numPages > 1) {
    //       return ` <div class="question__timer">4:00</div>
    //       <div class="question__prevnext">
    //         <button data-goto ="${
    //           this._data.page - 1
    //         }" class="btns question__prevnext--prev">previous</button>
    //       </div>
    // `;
    //     }

    if (this._data.page > 1 && this._data.page < numPages) {
      return `<div class="question__timer">4:00</div>
      <div class="question__prevnext">
        <button data-goto ="${
          this._data.page + 1
        }" class="btns question__prevnext--next">next</button>
      </div>
`;
    }
    return ` <div class="question__timer">4:00</div>
`;
  }
}

export default new paginationView();
