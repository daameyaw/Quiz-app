import View from "./view.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".popup__close-btn");
const popupSubmit = document.querySelector(".popup__submit");

class startView extends View {
  _parentElement = document.querySelector(".select");

  //OPENING AND CLOSING OF THE START POPUP
  handleStartPopup(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".select__item");
      if (!btn) return;
      console.log(start);
      start.classList.remove("hidden");
      overlay.classList.remove("hidden");
      handler();
    });
  }
  handleClosePopupBtn(handler) {
    closeBtn.addEventListener("click", function (e) {
      console.log(this);
      start.classList.add("hidden");
      overlay.classList.add("hidden");

      handler();
    });
  }

  handleClosePopupOverlay() {
    overlay.addEventListener("click", function (e) {
      console.log(this);
      start.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  }
  handleStart(handler) {
    popupSubmit.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(this);
      handler();
    });
  }
  getLevel() {
    const selectLevel = document.querySelector(".selectLevel").value;
    const level = selectLevel;
    return level;
  }
  getNumber() {
    const selectNumber = document.querySelector(".selectNumber").value;
    const number = +selectNumber;
    return number;
  }
}
export default new startView();
