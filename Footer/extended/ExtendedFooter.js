class ExtendedFooter extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.data=[
        {
          "title": "Coches",
          "link": [
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/furgonetas",
              "text": "Furgonetas,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/diesel",
              "text": "Diesel,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/electricos",
              "text": "Coches eléctricos,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/audi-a5",
              "text": "Audi A5,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/bmw-x5",
              "text": "BMW X5,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/chevrolet",
              "text": "Chevrolet,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/citroen-xsara",
              "text": "Citroen Xsara,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/fiat-coupe",
              "text": "Fiat Coupe,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/ford",
              "text": "Ford,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/ford-fiesta",
              "text": "Ford Fiesta,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/hyundai-getz",
              "text": "Hyundai Getz,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/jeep",
              "text": "Jeep,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/lada-niva",
              "text": "Lada Niva,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/mazda",
              "text": "Mazda,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/mercedes-vito",
              "text": "Mercedes Vito,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/mitsubishi-montero",
              "text": "Mitsubishi Montero,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/nissan",
              "text": "Nissan,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/nissan-qashqai",
              "text": "Nissan Qashqai,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/opel-corsa",
              "text": "Opel Corsa,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/peugeot-3008",
              "text": "Peugeot 3008,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/porsche",
              "text": "Porsche,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/renault-clio",
              "text": "Renault Clio,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/renault-scenic",
              "text": "Renault Scenic,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/renault-trafic",
              "text": "Renault Trafic,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/seat",
              "text": "SEAT,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/seat-cordoba",
              "text": "SEAT Cordoba,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/smart",
              "text": "Smart,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/suzuki-samurai",
              "text": "Suzuki Samurai,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/suzuki-vitara",
              "text": "Suzuki Vitara,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/toyota",
              "text": "Toyota,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/volkswagen",
              "text": "Volkswagen,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/volkswagen-passat",
              "text": "Volkswagen Passat,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/volvo",
              "text": "Volvo,"
            },
            {
              "href": "https://es.wallapop.com/coches-segunda-mano/camion",
              "text": "Camión"
            }
          ]
        },
        {
          "title": "Motos",
          "link": [
            {
              "href": "https://es.wallapop.com/motos/derbi-senda",
              "text": "Derbi Senda,"
            },
            {
              "href": "https://es.wallapop.com/motos/ducati-monster",
              "text": "Ducati Monster,"
            },
            {
              "href": "https://es.wallapop.com/motos/gas-gas",
              "text": "Gas Gas,"
            },
            {
              "href": "https://es.wallapop.com/motos/harley-davidson",
              "text": "Harley Davidson,"
            },
            {
              "href": "https://es.wallapop.com/motos/moto-honda",
              "text": "Moto Honda,"
            },
            {
              "href": "https://es.wallapop.com/motos/moto-honda-cbr",
              "text": "Moto Honda CBR,"
            },
            {
              "href": "https://es.wallapop.com/motos/kawasaki",
              "text": "Kawasaki,"
            },
            {
              "href": "https://es.wallapop.com/motos/kymco",
              "text": "Kymco,"
            },
            {
              "href": "https://es.wallapop.com/motos/montesa-cota",
              "text": "Montesa Cota,"
            },
            {
              "href": "https://es.wallapop.com/motos/ossa",
              "text": "Ossa,"
            },
            {
              "href": "https://es.wallapop.com/motos/piaggio-zip",
              "text": "Piaggio Zip,"
            },
            {
              "href": "https://es.wallapop.com/motos/rieju",
              "text": "Rieju,"
            },
            {
              "href": "https://es.wallapop.com/motos/suzuki",
              "text": "Suzuki,"
            },
            {
              "href": "https://es.wallapop.com/motos/vespa",
              "text": "Vespa,"
            },
            {
              "href": "https://es.wallapop.com/motos/yamaha-t-max",
              "text": "Yamaha T-MAX,"
            },
            {
              "href": "https://es.wallapop.com/motos/yamaha-jog",
              "text": "Yamaha Jog,"
            },
            {
              "href": "https://es.wallapop.com/motos/yamaha-aerox",
              "text": "Yamaha Aerox"
            }
          ]
        },
        {
          "title": "Motor y Accesorios",
          "link": [
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/moto-de-agua",
              "text": "Moto de agua,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/baul-moto",
              "text": "Baúl moto,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/supermotard",
              "text": "Supermotard,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/pit-bike",
              "text": "Pit bike,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/llantas",
              "text": "Llantas,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/llantas-audi",
              "text": "Llantas Audi,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/buggies",
              "text": "Buggies,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/asiento-tractor",
              "text": "Asiento Tractor,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/rampas-para-coches",
              "text": "Rampas Para Coches,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/motor-2jz",
              "text": "Motor 2Jz,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/jaulas-ganaderas-de-aluminio",
              "text": "Jaulas Ganaderas De Aluminio,"
            },
            {
              "href": "https://es.wallapop.com/motor-y-accesorios/caravana-eriba",
              "text": "Caravana Eriba"
            }
          ]
        },
        {
          "title": "Moda y Accesorios",
          "link": [
            {
              "href": "https://es.wallapop.com/moda-y-complementos/zapatillas",
              "text": "Zapatillas,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/anillo",
              "text": "Anillo,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/camisetas",
              "text": "Camisetas,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/vestido",
              "text": "Vestido,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/vestido-de-fiesta",
              "text": "Vestido de fiesta,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/vestido-de-novia",
              "text": "Vestido de novia,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/mochila",
              "text": "Mochila,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/ropa",
              "text": "Ropa,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/pantalones",
              "text": "Pantalones,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/zapatos",
              "text": "Zapatos,"
            },
            {
              "href": "https://es.wallapop.com/moda-y-complementos/sandalias",
              "text": "Sandalias"
            }
          ]
        },
        {
          "title": "Inmobiliaria",
          "link": [
            {
              "href": "https://es.wallapop.com/inmobiliaria/piso",
              "text": "Piso,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/oficinas",
              "text": "Oficinas,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/casas",
              "text": "Casas,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/traspaso",
              "text": "Traspaso,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/traspaso-bar",
              "text": "Traspaso Bar,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/compartir-piso",
              "text": "Compartir piso,"
            },
            {
              "href": "https://es.wallapop.com/inmobiliaria/parcela",
              "text": "Parcela"
            }
          ]
        },
        {
          "title": "Tecnología y electrónica",
          "link": [
            {
              "href": "https://es.wallapop.com/tv-audio-foto/samsung-gear",
              "text": "Samsung Gear,"
            },
            {
              "href": "https://es.wallapop.com/tv-audio-foto/altavoces",
              "text": "Altavoces,"
            },
            {
              "href": "https://es.wallapop.com/tv-audio-foto/camara-de-fotos",
              "text": "Cámara de fotos,"
            },
            {
              "href": "https://es.wallapop.com/tv-audio-foto/camara-de-fotos-reflex",
              "text": "Cámara de fotos reflex,"
            },
            {
              "href": "https://es.wallapop.com/tv-audio-foto/equipo-de-musica",
              "text": "Equipo de música,"
            },
            {
              "href": "https://es.wallapop.com/tv-audio-foto/proyector",
              "text": "Proyector"
            }
          ]
        },
        {
          "title": "Móviles y Telefonía",
          "link": [
            {
              "href": "https://es.wallapop.com/moviles-telefonos/galaxy",
              "text": "Galaxy,"
            },
            {
              "href": "https://es.wallapop.com/moviles-telefonos/huawei",
              "text": "Huawei,"
            },
            {
              "href": "https://es.wallapop.com/moviles-telefonos/iphone",
              "text": "Iphone,"
            },
            {
              "href": "https://es.wallapop.com/moviles-telefonos/xiaomi",
              "text": "Xiaomi,"
            },
            {
              "href": "https://es.wallapop.com/moviles-telefonos/iphone-12",
              "text": "Iphone 12"
            }
          ]
        },
        {
          "title": "Informática",
          "link": [
            {
              "href": "https://es.wallapop.com/electronica/pantalla-de-ordenador",
              "text": "Pantalla de ordenador,"
            },
            {
              "href": "https://es.wallapop.com/electronica/impresora",
              "text": "Impresora,"
            },
            {
              "href": "https://es.wallapop.com/electronica/tarjeta-grafica",
              "text": "Tarjeta gráfica,"
            },
            {
              "href": "https://es.wallapop.com/electronica/macbook",
              "text": "MacBook,"
            },
            {
              "href": "https://es.wallapop.com/electronica/macbook-pro",
              "text": "MacBook Pro,"
            },
            {
              "href": "https://es.wallapop.com/electronica/macbook-air",
              "text": "MacBook air,"
            },
            {
              "href": "https://es.wallapop.com/electronica/apple-watch",
              "text": "Apple watch,"
            },
            {
              "href": "https://es.wallapop.com/electronica/gopro-hero",
              "text": "GoPro Hero,"
            },
            {
              "href": "https://es.wallapop.com/electronica/pulsometro",
              "text": "Pulsómetro,"
            },
            {
              "href": "https://es.wallapop.com/electronica/garmin",
              "text": "Garmin"
            }
          ]
        },
        {
          "title": "Deporte y Ocio",
          "link": [
            {
              "href": "https://es.wallapop.com/deporte-y-ocio/cana-de-pescar",
              "text": "Caña de pescar,"
            },
            {
              "href": "https://es.wallapop.com/deporte-y-ocio/botas-de-futbol",
              "text": "Botas de fútbol,"
            },
            {
              "href": "https://es.wallapop.com/deporte-y-ocio/piragua",
              "text": "Piragua,"
            },
            {
              "href": "https://es.wallapop.com/deporte-y-ocio/tabla-paddle-surf",
              "text": "Tabla paddle surf"
            }
          ]
        },
        {
          "title": "Bicicletas",
          "link": [
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-scott",
              "text": "Bicicleta Scott,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-trek",
              "text": "Bicicleta Trek,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-bh",
              "text": "Bicicleta Bh,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-bmx",
              "text": "Bicicleta Bmx,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-de-paseo",
              "text": "Bicicleta de paseo,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/bicicleta-fixie",
              "text": "Bicicleta Fixie,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/rodillo-bkool",
              "text": "Rodillo Bkool,"
            },
            {
              "href": "https://es.wallapop.com/bicicletas/ruedas-de-bicicleta",
              "text": "Ruedas de bicicleta"
            }
          ]
        },
        {
          "title": "Consolas y Videojuegos",
          "link": [
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/nintendo-switch",
              "text": "Nintendo Switch,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/nintendo-3ds",
              "text": "Nintendo 3DS,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/playstation-vita",
              "text": "PlayStation Vita,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/playstation-4",
              "text": "PlayStation 4,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/playstation-4-pro",
              "text": "PlayStation 4 pro,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/playstation-3",
              "text": "PlayStation 3,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/xbox",
              "text": "Xbox,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/xbox-one",
              "text": "Xbox one,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/wii",
              "text": "Wii,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/mandos-playstation-4",
              "text": "Mandos PlayStation 4,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/maquina-recreativa",
              "text": "Maquina recreativa,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/game-boy",
              "text": "Game boy,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/psp",
              "text": "PSP,"
            },
            {
              "href": "https://es.wallapop.com/consolas-y-videojuegos/playstation-5",
              "text": "PlayStation 5"
            }
          ]
        },
        {
          "title": "Hogar y Jardín",
          "link": [
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/mueble-ikea",
              "text": "Mueble Ikea,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/mueble-de-cocina",
              "text": "Mueble de cocina,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/caseta-prefabricada",
              "text": "Caseta prefabricada,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/acuario",
              "text": "Acuario,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/cuadro",
              "text": "Cuadro,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/armario",
              "text": "Armario,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/comoda",
              "text": "Cómoda,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/cama",
              "text": "Cama,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/cama-nido",
              "text": "Cama nido,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/zapatero",
              "text": "Zapatero,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/jacuzzi-exterior",
              "text": "Jacuzzi exterior,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/espejo",
              "text": "Espejo,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/canape",
              "text": "Canape,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/mesa",
              "text": "Mesa,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/mesa-comedor",
              "text": "Mesa comedor,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/mesa-extensible",
              "text": "Mesa extensible,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/butaca",
              "text": "Butaca,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/colchones",
              "text": "Colchones,"
            },
            {
              "href": "https://es.wallapop.com/muebles-deco-y-jardin/lamparas",
              "text": "Lámparas"
            }
          ]
        },
        {
          "title": "Electrodomésticos",
          "link": [
            {
              "href": "https://es.wallapop.com/electrodomesticos/termo-electrico",
              "text": "Termo eléctrico,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/estufa-de-lena",
              "text": "Estufa de leña,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/estufa-de-pellets",
              "text": "Estufa de pellets,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/campana-extractora",
              "text": "Campana extractora,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/lavavajillas",
              "text": "Lavavajillas,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/congelador",
              "text": "Congelador,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/nevera",
              "text": "Nevera,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/lavadora",
              "text": "Lavadora,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/secadora",
              "text": "Secadora,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/thermomix",
              "text": "Thermomix,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/robot-de-cocina",
              "text": "Robot de cocina,"
            },
            {
              "href": "https://es.wallapop.com/electrodomesticos/horno",
              "text": "Horno"
            }
          ]
        },
        {
          "title": "Cine, Libros y Música",
          "link": [
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/libros",
              "text": "Libros,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/libros-uned",
              "text": "Libros Uned,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/libros-infantiles",
              "text": "Libros infantiles,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/libros-ingles",
              "text": "Libros inglés,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/vinilos",
              "text": "Vinilos,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/comics",
              "text": "Cómics,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/amplificador",
              "text": "Amplificador,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/clarinete",
              "text": "Clarinete,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/piano",
              "text": "Piano,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/bateria-electronica",
              "text": "Batería electrónica,"
            },
            {
              "href": "https://es.wallapop.com/libros-pelis-musica/violin",
              "text": "Violín"
            }
          ]
        },
        {
          "title": "Niños y Bebés",
          "link": [
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/muneca",
              "text": "Muñeca,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/funko-pop",
              "text": "Funko Pop,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/columpio",
              "text": "Columpio,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/casa-de-munecas",
              "text": "Casa de muñecas,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/carrito-bugaboo",
              "text": "Carrito Bugaboo,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/banera-cambiador",
              "text": "Bañera cambiador,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/capota-bugaboo",
              "text": "Capota Bugaboo,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/maxicosi",
              "text": "MaxiCosi,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/juguetes",
              "text": "Juguetes,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/trona",
              "text": "Trona,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/cambiador-bebe",
              "text": "Cambiador bebé,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/cuna-de-viaje",
              "text": "Cuna de viaje,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/minicuna",
              "text": "Minicuna,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/bebes-llorones",
              "text": "Bebés Llorones,"
            },
            {
              "href": "https://es.wallapop.com/ninos-y-bebes/bebe-reborn",
              "text": "Bebé Reborn"
            }
          ]
        },
        {
          "title": "Coleccionismo",
          "link": [
            {
              "href": "https://es.wallapop.com/coleccionismo/monedas",
              "text": "Monedas,"
            },
            {
              "href": "https://es.wallapop.com/coleccionismo/figuras-de-lladro",
              "text": "Figuras de Lladró,"
            },
            {
              "href": "https://es.wallapop.com/coleccionismo/monedas-de-plata",
              "text": "Monedas de plata,"
            },
            {
              "href": "https://es.wallapop.com/coleccionismo/chapas",
              "text": "Chapas,"
            },
            {
              "href": "https://es.wallapop.com/coleccionismo/chapas-para-tejado",
              "text": "Chapas para tejado,"
            },
            {
              "href": "https://es.wallapop.com/coleccionismo/telefono-antiguo",
              "text": "Teléfono antiguo"
            }
          ]
        },
        {
          "title": "Construcción y Reformas",
          "link": [
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/hormigonera",
              "text": "Hormigonera,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/hormigonera-electrica",
              "text": "Hormigonera eléctrica,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/puertas-de-madera",
              "text": "Puertas de madera,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/herramientas",
              "text": "Herramientas,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/compresor",
              "text": "Compresor,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/lijadora",
              "text": "Lijadora,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/puertas-de-madera-exteriores",
              "text": "Puertas de madera exteriores,"
            },
            {
              "href": "https://es.wallapop.com/construccion-y-reformas/soplador",
              "text": "Soplador"
            }
          ]
        },
        {
          "title": "Industria y Agricultura",
          "link": [
            {
              "href": "https://es.wallapop.com/industria-agricultura/camara-frigorifica",
              "text": "Cámara frigorífica,"
            },
            {
              "href": "https://es.wallapop.com/industria-agricultura/retroexcavadora",
              "text": "Retroexcavadora"
            }
          ]
        },
        {
          "title": "Servicios",
          "link": [
            {
              "href": "https://es.wallapop.com/servicios/masajista",
              "text": "Masajista,"
            },
            {
              "href": "https://es.wallapop.com/servicios/limpieza",
              "text": "Limpieza,"
            },
            {
              "href": "https://es.wallapop.com/servicios/limpieza-de-hogar",
              "text": "Limpieza de hogar,"
            },
            {
              "href": "https://es.wallapop.com/servicios/transporte",
              "text": "Transporte,"
            },
            {
              "href": "https://es.wallapop.com/servicios/mudanzas",
              "text": "Mudanzas,"
            },
            {
              "href": "https://es.wallapop.com/servicios/ninera",
              "text": "Niñera,"
            },
            {
              "href": "https://es.wallapop.com/servicios/clases-particulares",
              "text": "Clases particulares,"
            },
            {
              "href": "https://es.wallapop.com/servicios/montaje-de-muebles",
              "text": "Montaje de muebles,"
            },
            {
              "href": "https://es.wallapop.com/servicios/masajes",
              "text": "Masajes"
            }
          ]
        },
        {
          "title": "Otros",
          "link": [
            {
              "href": "https://es.wallapop.com/otros/maquina-de-coser",
              "text": "Máquina de coser,"
            },
            {
              "href": "https://es.wallapop.com/otros/playmobil",
              "text": "Playmobil,"
            },
            {
              "href": "https://es.wallapop.com/otros/maleta",
              "text": "Maleta,"
            },
            {
              "href": "https://es.wallapop.com/otros/mesa-de-billar",
              "text": "Mesa de billar"
            }
          ]
        }
      ]
        
  }

  connectedCallback() {
      this.loadContent();
  }

  async loadContent() {
      // Cargar y adjuntar los estilos desde un archivo CSS
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', './Footer/extended/ExtendedFooter.css');
      this.shadowRoot.appendChild(linkElem);

      // Cargar contenido HTML desde un archivo
      try {
          const response = await fetch('./Footer/extended/ExtendedFooter.html');
          if (response.ok) {
              const html = await response.text();
              const wrapper = document.createElement('div');
              wrapper.innerHTML = html;
              this.shadowRoot.appendChild(wrapper);

              let extended_footer_categories=this.shadowRoot.querySelector("extended_footer_categories");
              

              const li_li=(href,text) => {
                let li=document.createElement("li");
                let a=document.createElement("a");
                a.href=href;
                a.textContent=text;
                li.appendChild(a);
                return li;
          
              };
          
              const li = (inH3,ul) => {
                let li=document.createElement("li");
                let h3=document.createElement("h3");
                h3.textContent=inH3;
                li.appendChild(h3);
                li.appendChild(ul);
                return li;
              };



              for(let i of this.data){
                //console.log("this.data",i)
                let ul=document.createElement("ul")
                ul.className="extended_footer_categories_ul";
                for(let ii of i.link){
                  ul.appendChild(li_li(ii.href,ii.text))
                }
                this.shadowRoot.querySelector(".extended_footer_categories").appendChild(li(i.title,ul))
                

                
              }
          } else {
              console.error('Error loading Seo.html:', response.statusText);
          }
      } catch (error) {
          console.error('Error fetching Seo.html:', error);
      }
  }
}
customElements.define('extended-footer', ExtendedFooter);
export default ExtendedFooter;