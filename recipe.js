import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class Recipe extends LitElement {
  static properties = {
    recipes: { type: Array },
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('recipe-added', this.handleRecipeAdded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('recipe-added', this.handleRecipeAdded);
  }


  constructor() {
    super();
    this.recipes = [
      { title: 'Edame Noodles', ingredients: 'Edame Beans, Noodels, Garlic oil' },
      { title: 'Sushi Rolls', ingredients: 'Rice, Nori, Fish, Vegetables' },
      { title: 'Avocado Toast', ingredients: 'Avocado, Bread, Olive oil, Salt' },
      { title: 'Chocolate Cake', ingredients: 'Flour, Sugar, Cocoa powder, Eggs' }
    ];
  }

  handleRecipeAdded = (event) => {
    
    console.log(typeof this.recipes);
    this.recipes.push(event.detail); // Agregar la nueva receta al array
    this.requestUpdate('recipes'); // Notificar a LitElement que la propiedad recipes ha sido actualizada
    console.log('Receta agregada:', event.detail);
  }

  render() {
    return html`
      <div class="recipes container grey-text text-darken-1">
        ${this.recipes.map(recipe => html`
          <div class="card-panel recipe white row">
            <img src="/assets/img/dish.png" alt="recipe thumb">
            <div class="recipe-details">
              <div class="recipe-title">${recipe.title}</div>
              <div class="recipe-ingredients">${recipe.ingredients}</div>
            </div>
            <div class="recipe-delete">
              <button @click="${() => this.deleteRecipe(recipe)}">
                <i class="material-icons">delete_outline</i>
              </button>
            </div>
          </div>
        `)}
      </div>

      <div class="center">
        <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" @click="${this.openSideForm}">
          <i class="material-icons">add</i>
        </a>
      </div>
      ${loadStyles()}
    `;
  }

  openSideForm() {
    const sideFormComponent = document.querySelector('side-form');  
    const sideForm = sideFormComponent.shadowRoot.querySelector('.side-form');
  
    M.Sidenav.init(sideForm, { edge: 'left' });
    const instance = M.Sidenav.getInstance(sideForm);
      instance.open();

  }

  deleteRecipe(recipe) {
    this.recipes = this.recipes.filter(r => r !== recipe);
  }
}

customElements.define('recipe-component', Recipe);
