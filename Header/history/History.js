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
        wrapper.className = 'Header_history_SearchBox show';
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

    const ulHistory = this.shadowRoot.querySelector('ul');
    if (!ulHistory) {
      console.error('Error: ul element not found in the shadow DOM.');
      return;
    }
    ulHistory.className = 'Header_history_SearchBox__recentSearches_ul';

    history.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'Header_history_SearchBox__recentSearches_li';

      li.innerHTML = `
        <img src="https://es.wallapop.com/_next/static/media/recent-search.a1ab2698.svg" alt="recent search icon" />
        <div class="div-historyText-category">
          <p class="history-text">${item.text}</p>
          <p class="category">${item.category}</p>
        </div>
      `;

      ulHistory.appendChild(li);
    });
  }
}

// Definir el nuevo elemento
customElements.define('my-header-history', MyHeaderHistory);
