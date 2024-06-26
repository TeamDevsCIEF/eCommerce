class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
        // Cargar contenido HTML y CSS
        this.loadContent();
    }
  
    async loadContent() {
        // Cargar y adjuntar los estilos desde un archivo CSS
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '/Footer/Footer.css');
        this.shadowRoot.appendChild(linkElem);
  
        // Cargar contenido HTML desde un archivo
        try {
            const response = await fetch('/Footer/Footer.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);
            } else {
                console.error('Error loading Footer.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching Footer.html:', error);
        }
    }
  }
  
  // Definir el nuevo elemento
  customElements.define('my-footer', MyFooter);
  