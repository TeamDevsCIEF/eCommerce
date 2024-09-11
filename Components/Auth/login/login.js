class MyLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }  

    connectedCallback() {
        this.loadContent();
    }  

    async loadContent() {
        try {
            const [globalStyles, localStyles, htmlContent] = await Promise.all([
                fetch('./style.css').then(res => res.ok ? res.text() : Promise.reject(res.statusText)),
                fetch('./Components/Auth/login/login.css').then(res => res.ok ? res.text() : Promise.reject(res.statusText)),
                fetch('./Components/Auth/login/login.html').then(res => res.ok ? res.text() : Promise.reject(res.statusText)),
            ]);

            this.shadowRoot.innerHTML = `
                <style>${globalStyles}</style>
                <style>${localStyles}</style>
                ${htmlContent}
            `;
        } catch (error) {
            console.error('Error loading resources:', error);
            this.shadowRoot.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        }
    }

    disconnectedCallback() {
        // Cleanup if necessary
        // e.g., removing event listeners or cleaning up resources
    }    
}

customElements.define('my-login', MyLogin);
export { MyLogin };
