class MyHeaderHistory extends HTMLElement {
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
      linkElem.setAttribute('href', '/Header/history/History.css');
      this.shadowRoot.appendChild(linkElem);
  
      // Cargar contenido HTML desde un archivo
      try {
        const response = await fetch('/Header/history/History.html');
        if (response.ok) {
          const html = await response.text();
          const wrapper = document.createElement('div');
          wrapper.innerHTML = html;
          this.shadowRoot.appendChild(wrapper);
  
          // Renderizar la lista de historial
          this.renderHistory();
        } else {
          console.error('Error loading History.html:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching History.html:', error);
      }
    }
  
    renderHistory() {
      const history = [
        { text: 'History', category: 'All Category' },
        { text: 'Science', category: 'Education' },
        { text: 'Technology', category: 'Innovation' },
        { text: 'Art', category: 'Creativity' },
        { text: 'Literature', category: 'Books' },
        { text: 'Music', category: 'Entertainment' },
        { text: 'Travel', category: 'Adventure' },
        { text: 'Cooking', category: 'Lifestyle' },
        { text: 'Sports', category: 'Health' },
        { text: 'Finance', category: 'Economy' },
      ];
  
      const ulHistory = this.shadowRoot.querySelector('ul'); // Assuming <ul> is in History.html
  
      history.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'searchbox-recent-searches_SearchBox__recentSearches__option__rStfe';
  
        li.innerHTML = `
          <div class="d-flex align-items-center py-1 px-3 searchbox-recent-searches-option_SearchBox__recentSearches__option__u_q3K">
            <img src="https://es.wallapop.com/_next/static/media/recent-search.a1ab2698.svg" alt="" />
            <div class="ml-3 mr-2 w-100 overflow-hidden">
              <p class="m-0 w-100 overflow-hidden text-nowrap searchbox-recent-searches-option_SearchBox__recentSearches__option__title__RW7Ij">
                ${item.text}
              </p>
              <p class="m-0 searchbox-recent-searches-option_SearchBox__recentSearches__option__subtitle__5GcRE">
                ${item.category}
              </p>
            </div>
            <button class="searchbox-recent-searches-option_SearchBox__recentSearches__favorite__rxx_5 d-flex align-items-center justify-content-center">
              <walla-icon icon="Favourite Empty" aria-label="Unfavorite item" class="hydrated"></walla-icon>
            </button>
          </div>
        `;
  
        ulHistory.appendChild(li);
      });
    }
  }
  
  // Definir el nuevo elemento
  customElements.define('my-header-history', MyHeaderHistory);
  