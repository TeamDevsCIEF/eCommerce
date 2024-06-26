class MySeo extends HTMLElement {
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
        linkElem.setAttribute('href', '/Seo Section y banner/Seo.css');
        this.shadowRoot.appendChild(linkElem);
  
        // Cargar contenido HTML desde un archivo
        try {
            const response = await fetch('/Seo Section y banner/Seo.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);
            } else {
                console.error('Error loading Seo.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching Seo.html:', error);
        }
    }
  }
  
  // Definir el nuevo elemento
  customElements.define('my-seo', MySeo);
  