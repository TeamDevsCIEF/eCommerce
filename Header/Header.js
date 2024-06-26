class MyHeader extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow root
    this.attachShadow({ mode: 'open' });

    // Inicializar variables
    this.palabras = ["iPhone", "Tablet", "Celulares", "Android"];
    this.index = 0;
    this.intervalId = null;
  }

  connectedCallback() {
    // Cargar contenido HTML y CSS
    this.loadContent();
  }

  async loadContent() {
    // Cargar y adjuntar los estilos desde un archivo CSS
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/Header/header.css');
    this.shadowRoot.appendChild(linkElem);

    // Cargar contenido HTML desde un archivo
    try {
      const response = await fetch('./Header/header.html');
      if (response.ok) {
        const html = await response.text();
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        this.shadowRoot.appendChild(wrapper);

        // Inicializar elementos y eventos
        this.searchLabelSpan = this.shadowRoot.querySelector('.searchboxForm__label span');
        this.initEvents();
      } else {
        console.error('Error loading header.html:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching header.html:', error);
    }
  }

  initEvents() {
    // Actualizar el label de búsqueda periódicamente
    this.updateLabel();
    this.intervalId = setInterval(() => this.updateLabel(), 5000);

    // Manejar eventos de entrada en el input de búsqueda
    this.shadowRoot.querySelector('.searchboxForm').addEventListener('input', () => {
      const input = this.shadowRoot.querySelector('.SearchBox__input');
      if (input.value) {
        clearInterval(this.intervalId);
      } else {
        clearInterval(this.intervalId);
        this.updateLabel();
        this.intervalId = setInterval(() => this.updateLabel(), 5000);
      }
    });
  }

  disconnectedCallback() {
    // Limpiar el intervalo al desconectar el elemento
    clearInterval(this.intervalId);
  }

  updateLabel() {
    this.searchLabelSpan.style.opacity = 0;

    setTimeout(() => {
      this.searchLabelSpan.textContent = this.palabras[this.index];
      this.searchLabelSpan.style.opacity = 1;

      this.index = (this.index + 1) % this.palabras.length;
    }, 300); // Duración de la transición en ms
  }
}

// Definir el nuevo elemento
customElements.define('my-header', MyHeader);
