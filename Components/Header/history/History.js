class MyHeaderHistory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.suggestionsTest = [
      { id: 1, text: "iPhone 12", subtitle: "Electrónicos" },
      { id: 2, text: "iPhone 12", subtitle: "Electrónicos", type: "history" },
      { id: 3, text: "iPhone 11", subtitle: "", type: "history" },
      { id: 5, text: "iPhone 14", subtitle: "Juguetes", type: "favorite" },
      { id: 6, text: "iPhone 88", subtitle: "", type: "favorite" },
      { id: 7, text: "iPhone 87", subtitle: "Decoraciones", type: "favorite" },
      { id: 8, text: "iPhone 86", subtitle: "Decoraciones", type: "favorite" },
      { id: 9, text: "iPhone 58", subtitle: "", type: "favorite" },
      { id: 10, text: "iPhone 8", subtitle: "Decoraciones", type: "favorite" },
      { id: 11, text: "iPhone 4", subtitle: "", type: "history" },
      { id: 12, text: "Mesa Comedor Mesa Comedor Mesa Comedor Mesa Comedor", subtitle: "Interiores", type: "suggestion" },
      { id: 13, text: "Manguera", subtitle: "Jardin", type: "suggestion" },
      { id: 14, text: "Dominos", subtitle: "Juegos mesa", type: "suggestion" },
      { id: 17, text: "iPhone 7", subtitle: "Electrónicos", type: "history" },
      { id: 18, text: "iPhone 5", subtitle: "Decoraciones", type: "favorite" }];
      this.suggestions=this.suggestionsTest;
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
    linkElem.setAttribute('href', './Components/Header/history/History.css');
    this.shadowRoot.appendChild(linkElem);
    try {
      const response = await fetch('./Components/Header/history/History.html');
      if (response.ok) {
        const html = await response.text();
        const wrapper = document.createElement('div');
        wrapper.className = 'Header_history_SearchBox';
        wrapper.innerHTML = html;
        this.shadowRoot.appendChild(wrapper);

        this.renderSuggestions();
      } else {
        console.error('Error loading History.html:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching History.html:', error);
    }
  }
  updateSuggestions(newSuggestions) {
    this.suggestions = [...this.suggestionsTest,...newSuggestions];
    console.log('updateSuggestions', this.suggestions);
    this.renderSuggestions();
  }

  renderSuggestions() {
    const orderedSuggestions = this.organizeSuggestions(this.suggestions);

    const ulHistory = this.shadowRoot.querySelector('ul');
    if (!ulHistory) {
      console.error('Error: ul element not found in the shadow DOM.');
      return;
    }
    ulHistory.innerHTML = '';

    orderedSuggestions.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'Header_history_SearchBox__recentSearches_li';
      li.innerHTML = this.getTemplate(item);
      li.querySelector('.favorite-btn')?.addEventListener('click', () => this.handleFavorite(item.id));
      li.querySelector('.delete-btn')?.addEventListener('click', () => this.handleDelete(item.id));
      ulHistory.appendChild(li);
    });
  }
  getTemplate(suggestion) {
    const { text, subtitle, type } = suggestion;
    switch (type) {
      case 'history':
        return `
          <div class="div_img_p">
            <img src="https://es.wallapop.com/_next/static/media/recent-search.a1ab2698.svg" alt="recent search icon" />
            <div class="div-historyText-category">
              <p class="history-text">${text}</p>
              <p class="category">${subtitle}</p>
            </div>
          </div>  
          <div class="div_button">
            <button class="favorite-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#29363d" viewBox="0 0 24 24" part="inner-svg"><path fill-rule="evenodd" d="M8.411 3.75c1.216.004 2.4.385 3.373 1.09l.005.004c.062.046.133.07.211.072a.402.402 0 0 0 .225-.072l.005-.003a5.788 5.788 0 0 1 3.39-1.091h.011a6.374 6.374 0 0 1 4.304 1.738c1.148 1.095 1.804 2.58 1.815 4.14v.006c0 3.182-1.948 5.652-3.974 7.362-2.037 1.72-4.277 2.777-5.144 3.135l-.012.005a1.719 1.719 0 0 1-.609.113 1.577 1.577 0 0 1-.657-.124c-.838-.366-3.077-1.419-5.118-3.133-2.029-1.704-3.986-4.168-3.986-7.358v-.005c.01-1.566.672-3.056 1.827-4.152A6.377 6.377 0 0 1 8.4 3.75h.01Zm4.702 2.303c-.323.238-.719.36-1.108.363h-.01c-.4-.003-.778-.13-1.094-.363a4.287 4.287 0 0 0-2.49-.803A4.877 4.877 0 0 0 5.11 6.565c-.868.824-1.351 1.928-1.36 3.072.001 2.535 1.56 4.618 3.45 6.206 1.868 1.569 3.94 2.551 4.738 2.9a.13.13 0 0 0 .019.006h.048a.253.253 0 0 0 .066-.009c.793-.328 2.87-1.314 4.738-2.89 1.887-1.593 3.44-3.683 3.441-6.213a4.283 4.283 0 0 0-1.35-3.064 4.875 4.875 0 0 0-3.285-1.323 4.287 4.287 0 0 0-2.502.803Z" clip-rule="evenodd"></path></svg></button>
            <button class="delete-btn">
              <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="cancel,-close,-delete,-erase" fill="none" fill-rule="evenodd"><path id="Path" d="m25.8994949 4.6862915 1.4142136 1.41421356-9.899417 9.89978644 9.899417 9.8992034-1.4142136 1.4142136-9.8992034-9.899417-9.89978644 9.899417-1.41421356-1.4142136 9.9-9.8992034-9.9-9.89978644 1.41421356-1.41421356 9.89978644 9.9z" fill="rgb(0,0,0)" fill-rule="nonzero"/></g></svg>
            </button>
          </div>`;
      case 'favorite':
        return `
          <div class="div_img_p">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" display="flex"><path d="M13.527 0C17.094 0 19.995 2.959 20 6.597c.007 5.099-3.913 8.764-8.87 11.119l-.196.091c-.31.134-.59.194-.916.194-.29 0-.573-.053-.893-.178C4.025 15.497.006 11.825 0 6.624-.003 2.978 2.895.011 6.47.01c1.25 0 2.472.37 3.518 1.065A6.323 6.323 0 0 1 13.526 0Z" fill="#FD6C67"></path></svg>
            <div class="div-historyText-category">
              <p class="history-text">${text}</p>
              <p class="category">${subtitle}</p>
            </div>
          </div>        
          <div class="div_button">
            <button class="delete-btn"><svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="cancel,-close,-delete,-erase" fill="none" fill-rule="evenodd"><path id="Path" d="m25.8994949 4.6862915 1.4142136 1.41421356-9.899417 9.89978644 9.899417 9.8992034-1.4142136 1.4142136-9.8992034-9.899417-9.89978644 9.899417-1.41421356-1.4142136 9.9-9.8992034-9.9-9.89978644 1.41421356-1.41421356 9.89978644 9.9z" fill="rgb(0,0,0)" fill-rule="nonzero"/></g></svg></button>
          </div>
        `;
      default:
        return `            
          <div class="div-historyText-category">
            <p class="history-text">${text}</p>
             <p class="category">${subtitle}</p>
          </div>
          <div class="div_button">
            <button class="favorite-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#29363d" viewBox="0 0 24 24" part="inner-svg"><path fill-rule="evenodd" d="M8.411 3.75c1.216.004 2.4.385 3.373 1.09l.005.004c.062.046.133.07.211.072a.402.402 0 0 0 .225-.072l.005-.003a5.788 5.788 0 0 1 3.39-1.091h.011a6.374 6.374 0 0 1 4.304 1.738c1.148 1.095 1.804 2.58 1.815 4.14v.006c0 3.182-1.948 5.652-3.974 7.362-2.037 1.72-4.277 2.777-5.144 3.135l-.012.005a1.719 1.719 0 0 1-.609.113 1.577 1.577 0 0 1-.657-.124c-.838-.366-3.077-1.419-5.118-3.133-2.029-1.704-3.986-4.168-3.986-7.358v-.005c.01-1.566.672-3.056 1.827-4.152A6.377 6.377 0 0 1 8.4 3.75h.01Zm4.702 2.303c-.323.238-.719.36-1.108.363h-.01c-.4-.003-.778-.13-1.094-.363a4.287 4.287 0 0 0-2.49-.803A4.877 4.877 0 0 0 5.11 6.565c-.868.824-1.351 1.928-1.36 3.072.001 2.535 1.56 4.618 3.45 6.206 1.868 1.569 3.94 2.551 4.738 2.9a.13.13 0 0 0 .019.006h.048a.253.253 0 0 0 .066-.009c.793-.328 2.87-1.314 4.738-2.89 1.887-1.593 3.44-3.683 3.441-6.213a4.283 4.283 0 0 0-1.35-3.064 4.875 4.875 0 0 0-3.285-1.323 4.287 4.287 0 0 0-2.502.803Z" clip-rule="evenodd"></path></svg></button>
          </div>
        `;
    }
  }

  organizeSuggestions(suggestions) {
    const limit = 10;
    const normalType = suggestions.filter(suggestion => (suggestion.type === 'suggestion' || suggestion.type === null ));
    const normalLimit = Math.min(limit*.6, normalType.length);

    const histories = suggestions.filter(s => s.type === 'history');
    const favorites = suggestions.filter(s => s.type === 'favorite');


    const normalSuggestions = normalType.slice(0, normalLimit);

    const remainingSlots = limit - normalLimit;
    const historyLimit = Math.min(Math.floor(remainingSlots / 2), histories.length);
    const favoriteLimit = Math.min(remainingSlots - historyLimit, favorites.length);

    const historiesResult = histories.slice(0, historyLimit);
    const favoritesResult = favorites.slice(0, favoriteLimit);

    return [...normalSuggestions, ...favoritesResult, ...historiesResult]
  }

  handleFavorite(id) {

    this.suggestions = this.suggestions.map(item => {
      if (item.id == id) {
        const tempItem = item;
        tempItem.type = "favorite";
        return tempItem;
      }
      return item;
    })
    console.log(this.suggestions, id)
    this.renderSuggestions();

  }

  handleDelete(id) {


    this.suggestions = this.suggestions.map(item => {
      if (item.id != id) { return item }
    }).filter(value => value !== undefined)
    this.renderSuggestions();
    console.log(this.suggestions, id)


  }
}

customElements.define('my-header-history', MyHeaderHistory);
export default MyHeaderHistory;