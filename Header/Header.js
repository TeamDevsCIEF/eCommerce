class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadContent();
  }

  async loadContent() {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/Header/header.css');
    this.shadowRoot.appendChild(linkElem);

    try {
      const response = await fetch('/Header/header.html');
      if (response.ok) {
        const html = await response.text();
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        this.shadowRoot.appendChild(wrapper);
      } else {
        console.error('Error loading header.html:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching header.html:', error);
    }
  }
}

customElements.define('my-header', MyHeader);
