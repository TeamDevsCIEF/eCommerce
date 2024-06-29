class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    window.test = this.test.bind(this);

  }

  test() {
    alert("click");
  }

  connectedCallback() {
    this.loadContent();
  }

  async loadContent() {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/Header/header.css');
    this.shadowRoot.appendChild(linkElem);

    // Cargar estilos globales
    const globalStyles = document.createElement('link');
    globalStyles.setAttribute('rel', 'stylesheet');
    globalStyles.setAttribute('href', '/style.css'); // Ruta al archivo de estilos globales
    this.shadowRoot.appendChild(globalStyles);

    try {
      const response = await fetch('/Header/header.html');
      if (response.ok) {
        const html = await response.text();
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        this.shadowRoot.appendChild(wrapper);

        // Escuchar los eventos personalizados
        const searchboxForm = this.shadowRoot.querySelector('my-searchboxform');
        searchboxForm.addEventListener('input-focused', () => {
          this.showHistory();
        });
       
        searchboxForm.addEventListener('input-blurred', () => {
          this.hideHistory();
        });

      } else {
        console.error('Error loading header.html:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching header.html:', error);
    }
  }

  showHistory() {
    const searchboxForm = this.shadowRoot.getE('searchbox_SearchBox--header');
    const historyElement = document.createElement('my-header-history');
    historyElement.id = 'history-element';
    //this.shadowRoot.appendChild(historyElement);
    searchboxForm.appendChild(historyElement);
  }
    
  hideHistory() {
    const historyElement = this.shadowRoot.getElementById('history-element');
    if (historyElement) {
      this.shadowRoot.removeChild(historyElement);
    }
  }
}

customElements.define('my-header', MyHeader);
