# Proyecto Prueba Técnica Sellectia

## Descripción
Este proyecto es una prueba técnica para Sellectia. El objetivo es demostrar habilidades en desarrollo de software mediante la implementación de varios componentes clave.

## Componentes del Proyecto

### 1. Frontend
El frontend está desarrollado utilizando [especificar tecnología, por ejemplo, React, Angular, etc.]. Incluye las siguientes características:
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
