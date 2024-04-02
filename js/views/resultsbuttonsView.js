import View from "./view.js";
import * as model from "../model.js";

class resultsButtonView extends View {
  _parentElement = document.querySelector(".parent");

  _generateMarkupB() {
    console.log(this._parentElement);
    return `<div class="child">
    <button>Button 1</button> 
  </div>
  
  <div class="child">
    <button>Button 2</button>
  </div>
`;
  }
}

export default new resultsButtonView();
