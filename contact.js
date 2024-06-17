import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class Contact extends LitElement {
  static styles = css`
   
  `;

  render() {
    return html`
      <div class="container grey-text">
        <h5 class="center">Contact Us</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
        <div class="divider"></div>
        <h6>Find us at:</h6>
        <ul>
          <li>123 Spicy Noodle Road</li>
          <li>Manchester, UK</li>
        </ul>
      </div>
      ${loadStyles()}
    `;
  }
}

customElements.define('contact-component', Contact);