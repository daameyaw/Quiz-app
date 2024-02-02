import View from "./view.js";

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

    if (this._data.page === numPages && numPages > 1) {
      return ` <div class="question__timer">4:00</div>
      <div class="question__prevnext">
        <button data-goto ="${
          this._data.page - 1
        }" class="btns question__prevnext--prev">previous</button>
      </div> 
`;
    }

    if (this._data.page > 1 && this._data.page < numPages) {
      return `<div class="question__timer">4:00</div>
      <div class="question__prevnext">
        <button data-goto ="${
          this._data.page - 1
        }" class="btns question__prevnext--prev">previous</button>
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
