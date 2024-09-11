import SuggestionsHandler from '../../../services/api/SuggestionsHandler.js';
import MyHeaderHistory from '../history/History.js';

class SearchboxForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.palabras = ["iPhone", "Tablet", "Celulares", "Android"];
        this.index = 0;
        this.intervalId = null;
        this.handler = new SuggestionsHandler();
    }
    connectedCallback() { this.loadContent(); }
    async loadContent() {
        const globalStyles = document.createElement('link');
        globalStyles.setAttribute('rel', 'stylesheet');
        globalStyles.setAttribute('href', './style.css'); 
        this.shadowRoot.appendChild(globalStyles);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './Components/Header/SearchboxForm/SearchboxForm.css');
        this.shadowRoot.appendChild(linkElem);
        try {
            const response = await fetch('./Components/Header/SearchboxForm/SearchboxForm.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);
                this.searchLabelSpan = this.shadowRoot.querySelector('.searchboxForm__label span');
                this.initEvents();
            } else { console.error('Error loading searchboxForm.html:', response.statusText); }
        } catch (error) { console.error('Error fetching searchboxForm.html:', error); }
    }

    initEvents() {
        this.updateLabel();
        this.intervalId = setInterval(() => this.updateLabel(), 5000);

        const input = this.shadowRoot.querySelector('.SearchBox__input');
        const searchboxForm = this.shadowRoot.querySelector('.searchboxForm');

        input.addEventListener('focus', () => {
            console.log('Input enfocado');
            clearInterval(this.intervalId);
            this.showHistory();
        });
        input.addEventListener('focusout', (event) => {
            console.log('Input desenfocado');
            const relatedTarget = event.relatedTarget;
            const historyElement = this.shadowRoot.querySelector('#history-element');
            if (!searchboxForm.contains(relatedTarget) && (!historyElement || !historyElement.contains(relatedTarget))) {
                this.updateLabel();
                this.intervalId = setInterval(() => this.updateLabel(), 5000);
                this.hideHistory();
            }
        });

        input.addEventListener('input', async () => {
            clearInterval(this.intervalId);
            if (input.value) {
                await this.updateSuggestions2(input.value);
            } else {
                this.updateLabel();
                this.intervalId = setInterval(() => this.updateLabel(), 5000);
            }
        });
    }

    disconnectedCallback() { clearInterval(this.intervalId); }

    updateLabel() {
        this.searchLabelSpan.style.opacity = 0;
        setTimeout(() => {
            this.searchLabelSpan.textContent = this.palabras[this.index];
            this.searchLabelSpan.style.opacity = 1;
            this.index = (this.index + 1) % this.palabras.length;
        }, 300);
    }

    showHistory() {
        const searchboxForm = this.shadowRoot.querySelector('.searchbox_SearchBox__suggestionsWrapper');
        if (!this.historyElement) {
            this.historyElement = document.createElement('my-header-history');
            this.historyElement.id = 'history-element';
            searchboxForm.appendChild(this.historyElement);
            console.log('Historial mostrado');
        }
        //else { this.renderSuggestions(); }
    }

    hideHistory() {
        const searchboxForm = this.shadowRoot.querySelector('.searchbox_SearchBox__suggestionsWrapper');
        const historyElement = searchboxForm.querySelector('#history-element');
        if (historyElement) { historyElement.remove(); }
    }

    async updateSuggestions2(keyword) {
        await this.handler.updateSuggestions2(keyword);
        this.renderSuggestions();
    }

    renderSuggestions() {
        if (this.historyElement) {
            console.log('renderSuggestions',this.handler.suggestions2);
            this.historyElement.updateSuggestions(this.handler.suggestions2);
        }
        else
        {const suggestionsWrapper = this.shadowRoot.querySelector('.searchbox_SearchBox__suggestionsWrapper');
        suggestionsWrapper.innerHTML = '';

        this.handler.suggestions2.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion-item');
            suggestionElement.textContent = `${suggestion.text} - ${suggestion.subtitle}`;
            suggestionsWrapper.appendChild(suggestionElement);
        });}
    }
}

customElements.define('my-searchboxform', SearchboxForm);
export default SearchboxForm;
