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

  _clear() {
    this._parentElement.innerHTML = "";
  }

  //       if (
  //         !newEl.isEqualNode(curEl) &&
  //         newEl.firstChild?.nodeValue.trim() !== ''
  //       ) {
  //         curEl.textContent = newEl.textContent;
  //       }
  //       if (!newEl.isEqualNode(curEl)) {
  //         Array.from(newEl.attributes).forEach(attribute =>
  //           curEl.setAttribute(attribute.name, attribute.value)
  //         );
  //       }
  //     });
  //   }

  //   addHandlerRender(handler) {
  //     ['hashchange', 'load'].forEach(function (event) {
  //       window.addEventListener(event, handler);
  //     });
  //   }

  //   renderMessage(message = this._message) {
  //     const markup = `<div class="message">
  //         <div>
  //                <svg>
  //                   <use href="${icons}#icon-smile"></use>
  //              </svg>
  //         </div>
  //            <p>${message}</p>
  //          </div>`;
  //     this._clear();
  //     this._parentElement.insertAdjacentHTML('afterbegin', markup);
  //   }
}
