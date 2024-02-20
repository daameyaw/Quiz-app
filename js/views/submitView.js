import View from "./view.js";

class submitView extends View {
  _parentElement = document.querySelector(".decision");

  _generateMarkupP() {
    return `<div class="quiz__finish">finish</div>
    <button class="quiz__submit">submit</button>`;
  }
}

export default new submitView();
