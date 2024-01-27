export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    if (!data) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  //   update(data) {
  //     // if (!data || (Array.isArray(data) && data.length === 0))
  //     //   return this.renderError();
  //     this._data = data;
  //     const newMarkup = this._generateMarkup();

  //     const newDom = document.createRange().createContextualFragment(newMarkup);
  //     const newElements = Array.from(newDom.querySelectorAll('*'));
  //     const curElements = Array.from(this._parentElement.querySelectorAll('*'));
  //     // console.log(newElements);
  //     // console.log(curElements);

  //     newElements.forEach((newEl, i) => {
  //       const curEl = curElements[i];
  //       // console.log(curEl, newEl.isEqualNode(curEl));

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
