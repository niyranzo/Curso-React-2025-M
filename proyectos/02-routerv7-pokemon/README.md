# Proyecto de Pokémons

Este proyecto consta de una aplicación que incluye:
- **Base de datos**: MariaDB
- **Backend**: Node.js
- **Frontend**: React

## Descripción

El proyecto utiliza Docker para ejecutar todos los servicios en contenedores. La base de datos MariaDB tiene una base de datos llamada **Pokemons** con dos tablas:

- **pokemons**: Almacena información sobre los pokémons.
- **favorite**: Almacena los pokémons favoritos de los usuarios.

El backend está hecho con Node.js y proporciona dos endpoints:
- **/favorite**: Para interactuar con la tabla de favoritos.
- **/pokemon**: Para interactuar con la tabla de pokémons.

El frontend está hecho con React y se comunica con los endpoints del backend utilizando `fetch`.

## Requisitos

- **Docker**: Para crear y ejecutar contenedores.
- **Docker Compose**: Para orquestar los contenedores.

## Estructura del Proyecto

El proyecto se divide en los siguientes servicios:

- **MariaDB**: Contenedor para la base de datos.
- **Backend (Node.js)**: API.
- **Frontend (React)**: Interfaz de usuario.