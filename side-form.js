import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class SideForm extends LitElement {
  static styles = css`
    #side-form {
      width: 280px;
      transition: width 0.3s ease;
    }

    @media (min-width: 768px) {
      #side-form {
        width: 460px;
      }
    }
  `;

  static properties = {
    recipe: { type: Object },
  };

  constructor() {
    super();
    this.recipe = {
      title: '',
      ingredients: '',
    };
  }

  render() {
    return html`
      <div id="side-form" class="sidenav side-form">
        <form class="add-recipe container section" @submit="${this.addRecipe}">
          <h6>New Recipe</h6>
          <div class="divider"></div>
          <br>
          <div class="input-field">
            <input @input="${this.updateRecipe}" .value="${this.recipe.title}" 
                   placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
            <label for="title" class="active">Recipe Title</label>
          </div>
          <div class="input-field">
            <input @input="${this.updateRecipe}" .value="${this.recipe.ingredients}" 
                   placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
            <label for="ingredients" class="active">Ingredients</label>
          </div>
          <div class="input-field center">
            <button class="btn-small">Add</button>
          </div>
        </form>
      </div>
      ${loadStyles()}
    `;
  }

  updateRecipe(event) {
    const { id, value } = event.target;
    this.recipe = { ...this.recipe, [id]: value };
  }

  addRecipe(event) {
    event.preventDefault();
    const recipe = { ...this.recipe };
    
    const dispatchEve = new CustomEvent('recipe-added', {
      bubbles: true,
      composed: true,
      detail: recipe
    });
    this.dispatchEvent(dispatchEve);
    this.recipe = { title: '', ingredients: '' };
    console.log('Disparando evento recipe-added:', recipe);

    const sideFormElement = this.shadowRoot.querySelector('.side-form');
    const instance = M.Sidenav.getInstance(sideFormElement);
    instance.close();
  }
}

customElements.define('side-form', SideForm);
