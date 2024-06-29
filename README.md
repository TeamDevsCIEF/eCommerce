# Clon de Wallapop

Este proyecto es un clon de Wallapop, una plataforma de compra y venta de artículos de segunda mano. El objetivo es replicar la funcionalidad y el diseño del sitio original utilizando tecnologías modernas de desarrollo web.

## Índice

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Responsabilidades del Equipo](#responsabilidades-del-equipo)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Guía Rápida para Trabajar con Ramas en GitHub](#guía-rápida-para-trabajar-con-ramas-en-github)

## Descripción

Este proyecto consiste en crear un clon de la plataforma Wallapop con funcionalidades clave, incluyendo un header, un menú de categorías, un hero banner, una sección de SEO, y un footer extendido.

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Components
- Bootstrap 5
- Fetch API

## Instalación

1. Clona el repositorio en tu máquina local:
   git clone git@github.com:TeamDevsCIEF/eCommerce.git
2. Navega al directorio del proyecto:
   cd clon-de-wallapop
3. Abre el archivo index.html en tu navegador preferido para ver el proyecto en funcionamiento.

## Uso

Para ver el proyecto en acción, simplemente abre el archivo index.html en tu navegador. Todas las funcionalidades principales deben estar operativas.

## Estructura del Proyecto

clon-de-wallapop/
├── Header/
│   ├── Header.js
│   ├── header.html
│   └── header.css
├── MenuCategorias/
│   ├── Categorias.js
│   ├── Categorias.html
│   └── Categorias.css
├── HeroBanner/
│   ├── HeroBanner.js
│   ├── HeroBanner.html
│   └── HeroBanner.css
├── SeoSection/
│   ├── SeoSection.js
│   ├── SeoSection.html
│   └── SeoSection.css
├── Footer/
│   ├── Footer.js
│   ├── Footer.html
│   └── Footer.css
└── index.html

## Responsabilidades del Equipo

- @Jose: Responsable del Header
- @Fernanda Montalvan: Responsable del Menú Categorías
- @Anas: Responsable del Hero Banner
- @Estiben Ramirez: Responsable de la Seo Section y el Banner
- @Estefania: Responsable del Extended Footer, Footer y BottomNavigationBar

## Contribuciones

Las contribuciones son bienvenidas. Para realizar una contribución, por favor sigue estos pasos:

1. Realiza un fork del proyecto.
2. Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -m 'Agrega nueva funcionalidad').
4. Realiza un push a la rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request en GitHub.

## Guía Rápida para Trabajar con Ramas en GitHub

### Ver en qué rama estamos:
git branch

### Cambiar a una rama específica:
git checkout BRANCH-NAME

### Ramas actuales:

- Seo-Estiben
- Hero-Anass
- Footer-Estefania
- Categorias-Fernanda
- Header-Antony

### Ejemplos de uso:

#### Estiben en Seo-Estiben:
git checkout Seo-Estiben
git add .
git commit -m "Descripción del cambio"
git push origin Seo-Estiben

#### Anass en Hero-Anass:
git checkout Hero-Anass
git add .
git commit -m "Descripción del cambio"
git push origin Hero-Anass

#### Estefania en Footer-Estefania:
git checkout Footer-Estefania
git add .
git commit -m "Descripción del cambio"
git push origin Footer-Estefania

#### Fernanda en Categorias-Fernanda:
git checkout Categorias-Fernanda
git add .
git commit -m "Descripción del cambio"
git push origin Categorias-Fernanda

#### Antony en Header-Antony:
git checkout Header-Antony
git add .
git commit -m "Descripción del cambio"
git push origin Header-Antony

### Unificar todo en la rama principal:

#### Cambiar a la rama principal:
git checkout main

#### Actualizar la rama principal:
git pull origin main

#### Fusionar cada rama:
git merge Seo-Estiben
git merge Hero-Anass
git merge Footer-Estefania
git merge Categorias-Fernanda
git merge Header-Antony

#### Resolver conflictos si los hay y hacer commit:
git add .
git commit -m "Resolución de conflictos"

#### Hacer push de la rama principal actualizada:
git push origin main

## Notas:
- Enlaces y usuarios: Asegúrate de reemplazar los nombres de los responsables con los usuarios de GitHub reales, si están disponibles.
- Estructura del proyecto: Ajusta la estructura del proyecto en la sección "Estructura del Proyecto" si hay alguna diferencia con tu proyecto real.
