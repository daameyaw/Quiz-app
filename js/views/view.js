export default class View {
  _data;
  render(data) {
    // this._data = data;
    const markup = this._generateMarkup(data);

    if (!data) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderPagination(data) {
    this._data = data;
    const markup = this._generateMarkupP();

    if (!data) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSubmit() {
    const markup = this._generateMarkupP();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderTimer() {
    const markup = this._generateMarkupP();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log("u workinh??");
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
