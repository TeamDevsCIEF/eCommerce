class MyNavFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
        this.loadContent();
    }
  
    async loadContent() {
        const globalStyles = document.createElement('link');
        globalStyles.setAttribute('rel', 'stylesheet');
        globalStyles.setAttribute('href', './style.css'); 
        this.shadowRoot.appendChild(globalStyles);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './Footer/Nav/Nav.css');
        this.shadowRoot.appendChild(linkElem);
  
        // Cargar contenido HTML desde un archivo
        try {
            const response = await fetch('./Footer/Nav/Nav.html');
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
  customElements.define('my-nav-footer', MyNavFooter);
  export default MyNavFooter;