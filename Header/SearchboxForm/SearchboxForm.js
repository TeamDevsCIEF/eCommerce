class SearchboxForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.palabras = ["iPhone", "Tablet", "Celulares", "Android"];
        this.index = 0;
        this.intervalId = null;}
    connectedCallback() { this.loadContent(); }
    async loadContent() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './Header/SearchboxForm/SearchboxForm.css');
        this.shadowRoot.appendChild(linkElem);
        try {
            const response = await fetch('./Header/SearchboxForm/SearchboxForm.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('div');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);
                this.searchLabelSpan = this.shadowRoot.querySelector('.searchboxForm__label span');
                this.initEvents();
            } else {console.error('Error loading searchboxForm.html:', response.statusText);}
        } catch (error) {console.error('Error fetching searchboxForm.html:', error);}}

    initEvents() {
        this.updateLabel();
        this.intervalId = setInterval(() => this.updateLabel(), 5000);

        const input = this.shadowRoot.querySelector('.SearchBox__input');
        const searchboxForm = this.shadowRoot.querySelector('.searchboxForm');

        input.addEventListener('focus', () => {
            clearInterval(this.intervalId);
            this.showHistory();});
        input.addEventListener('focusout', (event) => {
            const relatedTarget = event.relatedTarget;
            const historyElement = this.shadowRoot.querySelector('#history-element');
            if (!searchboxForm.contains(relatedTarget) && (!historyElement || !historyElement.contains(relatedTarget))) {
                this.updateLabel();
                this.intervalId = setInterval(() => this.updateLabel(), 5000);
                this.hideHistory();}});

        searchboxForm.addEventListener('input', () => {
            if (input.value) {clearInterval(this.intervalId);} else {
                clearInterval(this.intervalId);
                this.updateLabel();
                this.intervalId = setInterval(() => this.updateLabel(), 5000);}});
    }

    disconnectedCallback() {clearInterval(this.intervalId);}

    updateLabel() {
        this.searchLabelSpan.style.opacity = 0;
        setTimeout(() => {
            this.searchLabelSpan.textContent = this.palabras[this.index];
            this.searchLabelSpan.style.opacity = 1;
            this.index = (this.index + 1) % this.palabras.length; }, 300);}

    showHistory() {
        const searchboxForm = this.shadowRoot.querySelector('.searchbox_SearchBox__suggestionsWrapper');
        // Verificar si el elemento ya existe para no duplicar
        if (!searchboxForm.querySelector('#history-element')) {
            const historyElement = document.createElement('my-header-history');
            historyElement.id = 'history-element';
            searchboxForm.appendChild(historyElement);}}

    hideHistory() {
        const searchboxForm = this.shadowRoot.querySelector('.searchbox_SearchBox__suggestionsWrapper');
        const historyElement = searchboxForm.querySelector('#history-element');
        if (historyElement) {historyElement.remove();}}
}

customElements.define('my-searchboxform', SearchboxForm);
