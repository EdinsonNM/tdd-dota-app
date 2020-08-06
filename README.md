# TDD - DOTA APP

Este proyecto ha sido creado con la finalidad de realizar un taller demostrativo para pacífico Seguros de como construir aplicaciones web con react usando el enfoque TDD.

## Requisitos

Para esta demo es necesario contar con los siguientes requisitos:

-   Tener instalado NodeJS
-   Tener Vs Code u otro editor de código.
-   Acceso a JFrog (solicitarlo al administrador)

## Diseño de la app

La app a construir ha sido diseñada en sketch para tener una referencia de lo que se va a trabajar en esta demo, por lo cual se recomienda acceder al siguiente enlace:

-   [Diseño de la aplicación](https://www.sketch.com/s/d850e305-97de-42c3-8334-54e2b9574ef5)

## Iniciando con la demo

Para iniciar con la replica de la demo emepezaremos por ejecutar el siguiente comando:

```sh
npx create-react-app tdd-dota-app --template @pacificoseguros/cra-template-pacifico
```

Una vez ejecutado el proyecto podemos conocer mas a detalle sobre la estructura del proyecto en el enlace: [conoce mas sobre el boilerplate](./readme-doc-boilerplate.md).

## Variables de entorno

Para iniciar le proyecto es necesario configurar las variable de conexión a los servicios, para ellos es necesario crear un archivo `.env.local` y agregar

```sh
REACT_APP_SERVER_URL='https://api.opendota.com/api'
```

## Entendiendo los requisitos de la app

-   [Ver las historias de usuarios](./user-story.md)

## servicios que se usaran

para validar si el usuario existe :

-   [GET]https://api.opendota.com/api/players/{account-id}
