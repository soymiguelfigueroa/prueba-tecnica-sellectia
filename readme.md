# Proyecto Prueba Técnica Sellectia

## Descripción
Este proyecto es una prueba técnica para Sellectia. El objetivo es demostrar habilidades en desarrollo de software mediante la implementación de varios componentes clave.

## Componentes del Proyecto

### 1. Frontend
El frontend está desarrollado utilizando HTML, CSS (utilizando SASS como preprocesador) y JS. Incluye las siguientes características:
- **assets**: Recursos gráficos del proyecto
- **index.html**: Archivo de estructura del proyecto
- **script.js**: En este archivo se gestiona la inicialización del slider, el procesado del formulario y la inicialización de la librería AOS
- **style.css**: Archivo de estilos. Este archivo es autogenerado a partir del archivo style.scss
- **style.css.map**: Archivo de mapa de origen (source map) que se utiliza para facilitar la depuración de archivos CSS generados a partir del archivo style.scss
- **style.scss**: Archivo de estilos creado con la nomenclatura SCSS para SASS

### 2. Configuración y Despliegue
El proyecto incluye scripts y configuraciones para el despliegue mediante Docker. Incluye:
- **docker-compose.yml**: Archivo de composición de servicios.
- **Dockerfile**: Archivo para configuración del servicio web.

## Cómo Empezar
Para comenzar con el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone git@github.com:soymiguelfigueroa/prueba-tecnica-sellectia.git
   ```

2. Ingresa al proyecto
   ```bash
   cd prueba-tecnica-sellectia/
   ```

3. Enciende el servicio web (Es necesario tener docker instalado previamente):
   ```bash
   docker-compose up -d --build
   ```

4. Inicia la aplicación:
   Para ver la aplicación, ingresa a [http://localhost/](http://localhost/) desde tu navegador

## Decisiones tomadas
- **Movile first**: Sl proyecto fue elaborado pensando en que los dispositivos principales hoy en día son los teléfonos, por lo que la estructura y el estilo fue confexionado para pantallas pequeñas y se fue ajustando a pantallas más grandes por medio de media queries
- **Menú**: Si bien el menú suele encapsularse en un desplegable para pantallas pequeñas, decidí mantenerlo como un menú horizontal porque se adapta bien a pantallas pequeñas ya que tiene pocos elementos. Los enlaces del menú dirigen a las diferentes secciones de la página (estilo SPA)
- **Archivos svg**: Algunos archivos svg fueron duplicados y editados para cambiar el color del atributo stroke o fill en favor de tener las variantes solicitadas en el diseño
- **Secciones con anchos máximos**: Para mantener la integridad del diseño en pantallas grandes, se decidió colocar un max-width a algunas secciones para evitar distorsiones en los elementos
- **Responsive**: Se utilizaron los anchos de 768px y 1200px como breakpoints claves en la adaptación del diseño a pantallas mediana y grandes
