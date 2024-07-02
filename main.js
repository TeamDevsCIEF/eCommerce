import MyHeader from './Header/Header.js';
import MyCategory from './MenuCategorias/Categorias.js'
import MyHero from './Hero Banner/Hero.js'
import MySeo from './Seo Section y banner/Seo.js';
import MyFooter from './Footer/Footer.js';


// Detectar si se está ejecutando en local o en el servidor web
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const base = isLocal ? '/' : '/eCommerce/';

document.querySelectorAll('base').forEach(baseTag => {
    baseTag.setAttribute('href', base);
});


export {
    
    MyHeader, MyCategory, MySeo, MyHero,MyFooter}