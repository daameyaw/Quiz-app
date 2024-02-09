export default class View {
  _data;
  render(data) {
    // this._data = data;
    const markup = this._generateMarkup(data);

    if (!data) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // renderPagination(data) {
  //   this._data = data;
  //   const markup = this._generateMarkupP();

  //   if (!data) return markup;
  //   this._clear();
  //   this._parentElement.insertAdjacentHTML("afterbegin", markup);
  // }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  //   addHandlerRender(handler) {
  //     ['hashchange', 'load'].forEach(function (event) {
  //       window.addEventListener(event, handler);
  //     });
  //   }
}
