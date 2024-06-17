import { html, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class SideNav extends LitElement {

  render() {
    return html`
    <ul id="side-menu" class="sidenav side-menu">
      <li><a class="subheader">FOODNINJA</a></li>
      <li><a  class="waves-effect" @click="${this._goToHome}">Home</a></li>
      <li><a class="waves-effect" @click="${this._goToAboutContent}">About</a></li>
      <li><div class="divider"></div></li>
      <li><a class="waves-effect" @click="${this._goToContact}">
        <i class="material-icons">mail_outline</i>Contact</a>
      </li>
    </ul>
    ${loadStyles()}
    `;
  }

  _goToHome(event) {
    console.log('Go to Home');
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { section: 'home' }
    }));
    this.closeNav();
  }

  _goToAboutContent(event) {
    console.log('Go to About');
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { section: 'about' }
    }));
    this.closeNav();
  }

  _goToContact(event) {
    console.log('Go to Contact');
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { section: 'contact' }
    }));
    this.closeNav();
  }

  closeNav() {
    const sideMenu = this.shadowRoot.querySelector('.sidenav');
    if (sideMenu) {
      const instance = M.Sidenav.getInstance(sideMenu);
      if (instance) {
        instance.close();
      }
    }
  }
}

customElements.define('side-nav', SideNav);