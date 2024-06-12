import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class TopNavigation extends LitElement {

  render() {
    return html`
      ${loadStyles()}
      <nav class="z-depth-0">
        <div class="nav-wrapper container">
          <a href="/">Food<span>Ninja</span></a>
          <span class="right grey-text text-darken-1">
            <i class="material-icons sidenav-trigger">menu</i>
          </span>
        </div>
      </nav>
    `;
  }

}

customElements.define('top-navigation', TopNavigation);