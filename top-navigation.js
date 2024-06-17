import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class TopNavigation extends LitElement {
  static styles = css`
    .sidenav-trigger:hover {
      cursor: pointer;
    }
  `;

  static properties = {
    currentContent: { type: String }
  };

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('navigate', this.handleMenuItemClicked);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('navigate', this.handleMenuItemClicked);
  }

  constructor() {
    super();
    this.currentContent = 'home'; // Inicialmente mostramos el contenido de 'home'
  }

  

  handleMenuItemClicked(event) {
    console.log('evento', event.detail);
    const { section } = event.detail;
    this.currentContent = section;
    this.closeMenu(); // Cerrar el menú lateral al cambiar de sección
    this.requestUpdate();
  }

  closeMenu() {
    const sideNavComponent = this.querySelector('side-nav');
    if (sideNavComponent) {
      const sideMenu = sideNavComponent.shadowRoot.querySelector('.side-menu');
      if (sideMenu) {
        const instance = M.Sidenav.getInstance(sideMenu);
        if (instance) {
          instance.close();
        }
      }
    }
  }

  render() {
    return html`
      <nav class="z-depth-0">
        <div class="nav-wrapper container">
          <a href="/">Food<span>Ninja</span></a>
          <span class="right grey-text text-darken-1">
            <i class="material-icons sidenav-trigger" @click="${this.openMenu}">menu</i>
          </span>
        </div>
      </nav>
      <slot name="sidenav"></slot>
      <slot name="sideForm"></slot>
      <main>
        <div style="display: ${this.currentContent === 'home' ? 'block' : 'none'}">
          <slot name="main"></slot>
        </div>
        <div style="display: ${this.currentContent === 'about' ? 'block' : 'none'}">
          <slot name="about"></slot>
        </div>
        <div style="display: ${this.currentContent === 'contact' ? 'block' : 'none'}">
          <slot name="contact"></slot>
        </div>
      </main>
      ${loadStyles()}
    `;
  }

  openMenu() {
    const sideNavComponent = this.querySelector('side-nav');
    if (sideNavComponent) {
      const sideMenu = sideNavComponent.shadowRoot.querySelector('.side-menu');
      if (sideMenu) {
        M.Sidenav.init(sideMenu, { edge: 'right' });
        const instance = M.Sidenav.getInstance(sideMenu);
        instance.open();
      }
    }
  }
}

customElements.define('top-navigation', TopNavigation);
