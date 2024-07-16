import ExtendedFooter from './extended/ExtendedFooter.js';
class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.footItems={
            "Wallapop": [
                {
                    "text": "Quiénes somos",
                    "href": "https://about.wallapop.com/",
                    "title": "Quiénes somos"
                },
                {
                    "text": "Cómo funciona",
                    "href": "https://about.wallapop.com/como-funciona-wallapop/",
                    "title": "Cómo funciona"
                },
                {
                    "text": "Brand Book",
                    "href": "https://about.wallapop.com/brand-book",
                    "title": "Brand Book"
                },
                {
                    "text": "Prensa",
                    "href": "https://about.wallapop.com/prensa",
                    "title": "Prensa"
                },
                {
                    "text": "Empleo",
                    "href": "https://boards.eu.greenhouse.io/wallapop",
                    "title": "Empleo"
                },
                {
                    "text": "10º aniversario de Wallapop",
                    "href": "https://es.wallapop.com/thanks",
                    "title": "10º aniversario de Wallapop"
                }
            ],
            "Soporte": [
                {
                    "text": "Centro de ayuda",
                    "href": "https://ayuda.wallapop.com/hc/es-es",
                    "title": "Centro de ayuda"
                },
                {
                    "text": "Normas de la comunidad",
                    "href": "https://ayuda.wallapop.com/hc/es-es/articles/360019800078-Normas-de-la-Comunidad",
                    "title": "Normas de la comunidad"
                },
                {
                    "text": "Consejos de seguridad",
                    "href": "https://ayuda.wallapop.com/hc/es-es/sections/360001177157-Consejos-de-seguridad",
                    "title": "Consejos de seguridad"
                }
            ],
            "Legal": [
                {
                    "text": "Aviso legal",
                    "href": "https://about.wallapop.com/aviso-legal/",
                    "title": "Aviso legal"
                },
                {
                    "text": "Condiciones de uso",
                    "href": "https://about.wallapop.com/condiciones-de-uso/",
                    "title": "Condiciones de uso"
                },
                {
                    "text": "Política de privacidad",
                    "href": "https://about.wallapop.com/politica-privacidad/",
                    "title": "Política de privacidad"
                },
                {
                    "text": "Política de Cookies",
                    "href": "https://about.wallapop.com/cookies",
                    "title": "Política de Cookies"
                }
            ],
            "Motor": [
                {
                    "text": "Particular",
                    "href": "https://about.wallapop.com/cars-buyer/",
                    "title": "Particular"
                },
                {
                    "text": "Profesional",
                    "href": "https://about.wallapop.com/motor/",
                    "title": "Profesional"
                }
            ],
            "Wallapop PRO": [
                {
                    "text": "Impulsa tu negocio",
                    "href": "https://es.wallapop.com/wallapop-pro",
                    "title": "Impulsa tu negocio"
                }
            ]
        }
        
    }
  
    connectedCallback() {
        this.loadContent();
    }
  
    async loadContent() {
        // Cargar y adjuntar los estilos desde un archivo CSS
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './Footer/Footer.css');

        const extended_footer = document.createElement('extended-footer');
        this.shadowRoot.appendChild(linkElem);
        this.shadowRoot.appendChild(extended_footer);
  
        // Cargar contenido HTML desde un archivo
        try {
            const response = await fetch('./Footer/Footer.html');
            if (response.ok) {
                const html = await response.text();
                const wrapper = document.createElement('footer');
                wrapper.classList.add('footer');
                wrapper.innerHTML = html;
                this.shadowRoot.appendChild(wrapper);

                const template_footer_info_section_ul_li=(href,title,text)=>{
                    let li = document.createElement('li');
                    let a=document.createElement('a');
                    a.href=href;
                    a.title=title;
                    a.rel="nofollow";
                    a.target="_blank";
                    a.textContent=text;
                    li.appendChild(a);
                    return li}
                const template_footer_info_section=(inH3,footer_info_section_ul_li)=>{
                    let h3 = document.createElement("h3")
                    h3.classList.add("footer_info_section_title");
                    h3.textContent=inH3;

                    let section=document.createElement("section");
                    section.classList.add("footer_info_section");
                    section.appendChild(h3);
                    section.appendChild(footer_info_section_ul_li);
                    return section}


                let footer_info_section=this.shadowRoot.querySelector(".footer_info");
                let s=document.createElement("section");
                let img=document.createElement("img");
                img.src="https://es.wallapop.com/_next/static/media/wallapop-logo.02d23534.svg";
                img.alt="Wallapop";
                img.loading="lazy";
                let p=document.createElement("p");
                p.textContent="© 2013-2024 Wallapop. Todos los derechos reservados";
                s.appendChild(img);
                s.appendChild(p);
                footer_info_section.appendChild(s);


                for(let i in this.footItems){
                    let ul=document.createElement("ul");
                    for(let ii of this.footItems[i]){
                        ul.appendChild(template_footer_info_section_ul_li(ii.href,ii.title,ii.text));
                    }
                    footer_info_section.appendChild(template_footer_info_section(i,ul));
                    
                    
                }

                //this.shadowRoot.querySelector(".footer_info").innerHTML+=footer_info_section;
                    
            } else {
                console.error('Error loading Footer.html:', response.statusText);
            }




            

        } catch (error) {
            console.error('Error fetching Footer.html:', error);
        }
    }

    
      
  }

customElements.define('my-footer', MyFooter);
export  {MyFooter};
