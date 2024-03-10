import View from "./view.js";

class optionsView extends View {
  // _parentElement = document.querySelector(".question");

  handleMarking(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const option = e.target.closest(".question__options");
      if (!option) return;
      const selectedOption = option.dataset.option;
      handler(selectedOption);
    });
  }
}

export default new optionsView();
