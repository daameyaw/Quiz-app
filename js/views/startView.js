import View from "./view.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".popup__close-btn");

class startView extends View {
  _parentElement = document.querySelector(".select");

  closemodal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  openmodal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

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
  handleClosePopup(handler) {
    closeBtn.addEventListener("click", function (e) {
      // const btn = e.target.closest(".popup__close-btn");
      // if (!btn) return;
      console.log(this);
      handler();
    });
  }

  // handleStartClose() {}
}
export default new startView();
