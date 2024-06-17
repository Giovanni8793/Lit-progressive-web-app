import { html, css, LitElement } from 'lit';

class MainApp extends LitElement {
  static styles = css`
  `;
  constructor() {
    super();
  }

  render() {
    return html`
      <top-navigation></top-navigation>
      <side-nav></side-nav>
      <recipe-component></recipe-component>
      <content-about></content-about>
      <side-form></side-form>
    `;
  }

  handleOpenMenu(event) {
    // Manejar la apertura del menú aquí
    console.log('Evento open-menu recibido');
    // Puedes implementar aquí la lógica para abrir un menú lateral, por ejemplo:
    // const sideMenuElement = document.querySelector('.side-menu');
    // M.Sidenav.init(sideMenuElement, { edge: 'right' });
  }
}

customElements.define('main-app', MainApp);