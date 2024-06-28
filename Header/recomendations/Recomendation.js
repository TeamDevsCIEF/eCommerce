class MyHeaderRecomendations extends HTMLElement {
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
        linkElem.setAttribute('href', '/Header/recomendations/Recomendation.css');
        this.shadowRoot.appendChild(linkElem);
  
        // Cargar contenido HTML desde un archivo
        try {
            const response = await fetch('/Header/recomendations/Recomendation.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);
            } else {
                console.error('Error loading Recomendation.html:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching Recomendation.html:', error);
        }
    }
  }
  
  // Definir el nuevo elemento
  customElements.define('my-header-recomendation', MyHeaderRecomendations);
  