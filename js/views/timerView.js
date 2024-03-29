import View from "./view.js";
import * as model from "../model.js";

const decisionPopup = document.querySelector(".submit");
const timer = document.querySelector(".question__timer");
const goBackBtn = document.querySelector(".submit-popup__btn--violet");
const resultsPageLink = document.querySelector(".results-page");

let countdown;

class timerView extends View {
  _parentElement = document.querySelector(".question__timer");

  startTimer() {
    countdown = function () {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, 0);
      const seconds = String(timeLeft % 60).padStart(2, 0);

      // console.log(minutes, seconds);
      timerEl.textContent = `${minutes}:${seconds}`;
      console.log(timerEl.textContent);

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        timerEl.textContent = "Time up!";
        decisionPopup.classList.remove("hidden");
        goBackBtn.disabled = true;
      }
      if (resultsPageLink.classList.contains("active")) {
        clearInterval(timer);
        timerEl.textContent = "Time up!";
        decisionPopup.classList.remove("hidden");
        goBackBtn.disabled = true;
      }
    };

    const totalTime = model.state.questions.length * 30; // 5 minutes in seconds
    // const totalTime = 10;

    let timeLeft = totalTime;

    const timerEl = document.querySelector(".question__timer");
    console.log(timerEl);

    countdown();
    const timer = setInterval(countdown, 1000);

    console.log(timer);
    return timer;
  }
  //   stopTimer() {
  //     clearInterval(countdown);
  //   }

  _generateMarkupP() {
    return `<div class="question__timer">5:00</div>`;
  }
}

export default new timerView();
