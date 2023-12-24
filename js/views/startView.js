import View from "./view.js";

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");

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

  handleStartClose() {}
}
export default new startView();
