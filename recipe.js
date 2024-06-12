import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class Recipe extends LitElement {

  render() {
    return html`
      ${loadStyles()}
      <div class="recipes container grey-text text-darken-1">
        <div class="card-panel recipe white row">
          <img src="/assets/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/assets/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/assets/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/assets/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
      </div>

      <div class="center">
        <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
          <i class="material-icons">add</i>
        </a>
      </div>

      <!-- add recipe side nav -->
  <div id="side-form" class="sidenav side-form">
    <form class="add-recipe container section">
      <h6 >New Recipe</h6>
      <div class="divider"></div>
      <div class="input-field">
        <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
        <label for="title">Recipe Title</label>
      </div>
      <div class="input-field">
        <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
        <label for="ingredients">Ingredients</label>
      </div>
      <div class="input-field center">
        <button class="btn-small">Add</button>
      </div>
    </form>
  </div>
    `;
  }
}

customElements.define('recipe-component', Recipe);