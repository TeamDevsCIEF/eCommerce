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
    linkElem.setAttribute('href', './Header/history/History.css');
    this.shadowRoot.appendChild(linkElem);

    // Cargar contenido HTML desde un archivo
    try {
      const response = await fetch('./Header/history/History.html');
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

    const recomendations = [
      { text: 'Iphone', category: 'All Category' },
      { text: 'Android', category: 'Education' },
      { text: 'Technology', category: 'Innovation' },
      { text: 'Art', category: 'Creativity' },
      { text: 'Literature', category: 'Books' },
      { text: 'Music', category: 'Entertainment' },
      { text: 'Travel', category: 'Adventure' },
      { text: 'Cooking', category: 'Lifestyle' },
      { text: 'Sports', category: 'Health' },
      { text: 'Finance', category: 'Economy' },
    ];

    const result=[...history.slice(0,5),...recomendations.slice(0,3)];

    const ulHistory = this.shadowRoot.querySelector('ul');
    if (!ulHistory) {
      console.error('Error: ul element not found in the shadow DOM.');
      return;
    }
    ulHistory.className = 'Header_history_SearchBox__recentSearches_ul';

    result.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'Header_history_SearchBox__recentSearches_li';

      li.innerHTML = `
        <img src="https://es.wallapop.com/_next/static/media/recent-search.a1ab2698.svg" alt="recent search icon" />
        <div class="div-historyText-category">
          <p class="history-text">${item.text}</p>
          <p class="category">${item.category}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#29363d" viewBox="0 0 24 24" part="inner-svg"><path fill-rule="evenodd" d="M8.411 3.75c1.216.004 2.4.385 3.373 1.09l.005.004c.062.046.133.07.211.072a.402.402 0 0 0 .225-.072l.005-.003a5.788 5.788 0 0 1 3.39-1.091h.011a6.374 6.374 0 0 1 4.304 1.738c1.148 1.095 1.804 2.58 1.815 4.14v.006c0 3.182-1.948 5.652-3.974 7.362-2.037 1.72-4.277 2.777-5.144 3.135l-.012.005a1.719 1.719 0 0 1-.609.113 1.577 1.577 0 0 1-.657-.124c-.838-.366-3.077-1.419-5.118-3.133-2.029-1.704-3.986-4.168-3.986-7.358v-.005c.01-1.566.672-3.056 1.827-4.152A6.377 6.377 0 0 1 8.4 3.75h.01Zm4.702 2.303c-.323.238-.719.36-1.108.363h-.01c-.4-.003-.778-.13-1.094-.363a4.287 4.287 0 0 0-2.49-.803A4.877 4.877 0 0 0 5.11 6.565c-.868.824-1.351 1.928-1.36 3.072.001 2.535 1.56 4.618 3.45 6.206 1.868 1.569 3.94 2.551 4.738 2.9a.13.13 0 0 0 .019.006h.048a.253.253 0 0 0 .066-.009c.793-.328 2.87-1.314 4.738-2.89 1.887-1.593 3.44-3.683 3.441-6.213a4.283 4.283 0 0 0-1.35-3.064 4.875 4.875 0 0 0-3.285-1.323 4.287 4.287 0 0 0-2.502.803Z" clip-rule="evenodd"></path></svg>
        <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="cancel,-close,-delete,-erase" fill="none" fill-rule="evenodd"><path id="Path" d="m25.8994949 4.6862915 1.4142136 1.41421356-9.899417 9.89978644 9.899417 9.8992034-1.4142136 1.4142136-9.8992034-9.899417-9.89978644 9.899417-1.41421356-1.4142136 9.9-9.8992034-9.9-9.89978644 1.41421356-1.41421356 9.89978644 9.9z" fill="rgb(0,0,0)" fill-rule="nonzero"/></g></svg>
      `;

      ulHistory.appendChild(li);
    });
  }
}

// Definir el nuevo elemento
customElements.define('my-header-history', MyHeaderHistory);
