class MyCategory extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      // Cargar contenido HTML y CSS
      this.loadContent();
  }

    async loadContent() {
        const globalStyles = document.createElement('link');
        globalStyles.setAttribute('rel', 'stylesheet');
        globalStyles.setAttribute('href', './style.css'); 
        this.shadowRoot.appendChild(globalStyles);

        // Aqui esta referenciado el css, mas arriba hice el rel de los estilos globales
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './MenuCategorias/Categorias.css');
        this.shadowRoot.appendChild(linkElem);


      try {
          const response = await fetch('./MenuCategorias/Categorias.html');
          if (response.ok) {
              const html = await response.text();
              const wrapper = document.createElement('div');
              wrapper.innerHTML = html;
              this.shadowRoot.appendChild(wrapper);
          } else {
              console.error('Error loading Categories.html:', response.statusText);
          }
      } catch (error) {
          console.error('Error fetching Categories.html:', error);
      }
  }
}

// Definir el nuevo elemento
customElements.define('my-category', MyCategory);
export default MyCategory;