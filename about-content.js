import { html, css, LitElement } from 'lit';
import { loadStyles } from './styles.js';

class ContentAbout extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
    ${loadStyles()}
    <div class="container grey-text">
      <h5 class="center">About Food Ninja</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>
    </div>
    `;
  }
}

customElements.define('content-about', ContentAbout);