# BOILERPLATE - PACÍFICO REACT WEB APP

Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app). Para mayor información de los comandos a utilizar , pueden revisar la documentación de [create-react-app](./readme-create-app.md)

## Mejoras sobre [Create React App](https://github.com/facebook/create-react-app)

Este proyecto tiene como finalidad ofrecer una estructura inicial que incluye el uso de librerias e implementación de la infraestructura `front-end` para el desarrollo de aplicaciones web en pacifico seguros.
Esta estructura incluye la implementación de buenas practicas recogidas de las recomendaciones de google especificamente para React. Para mayor información revisar [web.dev](https://web.dev/react)

A continuación se menciona las mejoras aplicadas:

-   Estructura de carpetas para la implementacion de aplicaiones con React.
-   Implementación simplicada de redux para aplicaciones pequeñas/medianas , incluye desacoplamiento y uso de [rxjs](https://rxjs-dev.firebaseapp.com) para aplicaciones grandes.
-   Inclusión de react-snap para mejora de la indexación en buscadores. Esto puede mejorar los tiempos de `First Paint` en su aplicación.
-   Inclusión de la libreria de componentes del Sistema de diseño de pácifico seguros.
-   Validador de sintaxis y formateo de código automatizado antes de cada commit
-   Herramientas para validación de performance

## Estructura de Carpetas

A continuación se detalla la estructura de carpetas del boilerplate:

    .
    ├── ...
    ├── src			# carpeta principal
    │   ├── /assets		# contenido css/fonts
    │   ├── /components	# componentes react transversales a la aplicación
    │   ├── /constants	# variables constantes
    │   ├── /libs		# librerias utilitarios y de acceso a terceros
    │   ├── /models		# modelos e interfaces comunes a la aplicación.
    │   ├── /api    	# implementación de los servicios rest.
    │   ├── /redux		# implementación de acciones/middlewares
    │   ├── /hooks		# implementación de react hooks.
    │   └── index.js	# archivo principal que inicia la aplicación.
    ├── .env		# archivo de configuración para variables de entorno
    └── ...

[introducción]

### `components`

EL folder <b>components</b> contiene componentes react que pueden ser utilizados dentro de 2 o mas containers, estos componentes no deben contener lógica de negocio y pueden ser reutilizados

### `containers`

Los componentes del tipo container son componentes que conforma la estructura de una determinada interfaz de usuario yque generalmente se conecta a provedores de datos tales como redux y envian dicha información a sus componentes hijos

    ./Containers
    ├── ...
    ├── /[name]                 # nombre del container
    │   ├── /components         # componentes react que conforman el container
    │   ├── /styles             # archivos scss, css del container
    │   ├── /hooks              # archivos scss, css del container
    │   ├── /constants          # archivos scss, css del container
    │   ├── /tests              # unit test de componentes
    │   ├── [name].routes.jsx    #opcional si el companente tiene sib rutas
    │   └── name.jsx		    # container principal.
    │
    └── ...

### `redux`

El folder redux es el encargado de manejar el estado global de la aplicación, el cual es manejado y cambiado a traves de acciones. Las acciones pueden iniciar procesos asincronos(efectos secundarios) que iniciaran nuevas acciones segun el resultado de dichas llamadas asincronas. Estas llamadas asincronas podrian ser llamadas a servicios rest.

    ./redux
    ├── ...
    ├── /[ModuleName]			    # nombre del módulo
    │   ├── /tests		            # folder con test para cada elemento
    │   │   ├── actions.test.js		# tests de acciones
    │   │   ├── epics.test.js		# test de epics
    │   │   └── reducer.js			# test de reducers
    │   ├── actions.js		        # implementación de las acciones
    │   ├── constants.js		    # constantes de acciones
    │   ├── state.js		        # estado inicial del módulo
    │   ├── epics.js		        # funciones que manejan procesos asincronos
    │   ├── reducer.js		        # funciones reductoras
    │   └── index.js			    # archivo principal del módulo.
    │
    └── ...

### `constants`

Las constantes contienen valores estáticos que no cambian y que son utilizados por la aplicación. Estos pueden ser constanrtes de rutas, objetos json, variables de colores, etc.

    ./constants
    ├── ...
    ├── /routes			        # constantes de rutas
    │   ├── ui.routes.js		# rutas de la ui
    │   ├── service.routes.js	# rutas de servicios invocados
    │   └── ...
    └── ...otros			# otras constantes

### `libs`

Libs es un folder cuya finalidad es almacenar código script de terceros y librerias utilitarias tales como librerias de google-analytics, scripts de inclusión de chats, etc.

## Configuración para usar el repositorio NPM de pacífico

<b>Pacífico Seguros</b> contiene su propio repositorio NPM en JFrog para poder publicar e instalar librerias javascript en sus proyectos.

Antes de ejecutar cualquiera de los comandos es necesario que se cambie la referencia al repositorio npm de pacifico con el siguiente comando:

```
npm config set registry https://innovacionpacifico.jfrog.io/innovacionpacifico/api/npm/npm-virtual/
```

Es probable que se requiera un usuario y contraseña por lo cual se debe contactar con el lider tñecnico o algun integrante para solicitar un usuario en JFrog.

Si desea volver a su repositorio npm por defecto ejecutar:

```
npm config set registry https://registry.npmjs.com/
```

## Comandos adicionales para gestión de performance

### `npm run analyze`

Ejecuta este comando para anlizar las dependencias que se agregaron a tu proyecto.<br>
Abrir [http://localhost:8888](http://localhost:8888) para visualizarlo en el navegador.

### `npm run lh`

Ejecuta este comando para iniciar lighthouse y validar el performance de tu aplicación<br>
Abrir [http://localhost:8888](http://localhost:8888) para visualizarlo en el navegador.

### `npm run bundlesize`

Ejecuta este comando para analizar el tamaño de tus recursos.<br>
Abrir [http://localhost:8888](http://localhost:8888) para visualizarlo en el navegador.

## Recomendaciones de Implementación

-   Este boilerplate incluye compomentes optimizados creados especificamente para el desarrollo de aplicaciones en pacífico seguros. Es por ello que se recomienda revisar la documentación de dichos componentes antes de iniciar cualquier proyecto.<br/><br/>
-   Evitar en lo posible la carga anticipada de scripts o plugins de terceros que puedan penalizar la carga de la aplicación principal, tales como: _re-captcha_, _librerias de chat_, _librerias de seguimiento_, etc.<br/><br/>
-   Utilizar en lo posible React-Lazy para la carga de componentes.<br/><br/>
-   Usar el sistema de iconos del sistema de diseño<br/><br/>
-   Evitar el uso de css, fuentes e iconos de terceros.<br/><br/>
-   Evaluar con regularidad el performance de la aplicación usando herramientas tales como: [webpagetest](https://www.webpagetest.org/) y [PageSpeedInsights](https://developers.google.com/speed/pagespeed/insights/?hl=es) y Auditoria del DevTools de google.

## Sugerencia para desarrolladores

Actualmente en los proyectos desarrollados en el centro de innovación se utiliza `Visual Studio Code` como IDE de desarrollo debido a su gran flexibilidad y la enorme cantidad de plugins que ofrece. A continuación mencionamos una serie de plugins que pueden ayudarle en el desarrollo de sus proyectos:

### Plugins y extensiones recomendados

-   Auto Close Tag
-   Auto Import
-   Bracket Pair Colorize
-   Bracket Select
-   Color Picker
-   Colorize
-   Debugger for Chrome
-   DOtEnv
-   EditorConfig for Visual Studio
-   EsLint
-   Http Server
-   Import Cost
-   indent-rainbow
-   Live Share
-   Live Share Audio
-   Prettier
-   GitLens
