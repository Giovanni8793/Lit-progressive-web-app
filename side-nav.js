import { html, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class SideNav extends LitElement {

  render() {
    return html`
    ${loadStyles()}
    <ul id="side-menu" class="sidenav side-menu">
      <li><a class="subheader">FOODNINJA</a></li>
      <li><a  class="waves-effect">Home</a></li>
      <li><a class="waves-effect">About</a></li>
      <li><div class="divider"></div></li>
      <li><a class="waves-effect">
        <i class="material-icons">mail_outline</i>Contact</a>
      </li>
    </ul>
    `;
  }
}

customElements.define('side-nav', SideNav);