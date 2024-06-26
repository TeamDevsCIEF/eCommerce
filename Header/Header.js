// header.js
class MyHeader extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear elementos dentro del shadow root
    const wrapper = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Hola Mundo w';

    // Cargar estilos desde un archivo CSS
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './Header/header.css');

    // Adjuntar los elementos al shadow root
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(h1);
  }
}

// Definir el nuevo elemento
customElements.define('my-header', MyHeader);
