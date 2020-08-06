# MI PERFIL GAMER

# HU001

### Como usuario dotero quiero ingresar a la aplicación para ver la información de mis partidas realizadas en Dota 2

<b>Given</b> que quiero ingresar a la aplicación
<b>When</b> accedo deberia visualizar la pantalla de Login
<b>Then</b> mostrar

-   Logo de Dota 2
-   un titulo con el nombre de la aplicación "Mi perfil gamer"
-   una caja de texto con el texto "Ingresa un api key"
-   y un botón con el texto "Ingresar".

<b>Given</b> que me encuentro en la pantalla de Login
<b>When</b> no ingrese un api key
<b>And</b> de clic en Ingresar
<b>Then</b> debe mostrar un mensaje de error **"Id de usuario es requerido"**
<b>and</b> no debe ingresar a la aplicación

<b>Given</b> que me encuentro en la pantalla de inicio
<b>When</b> ingresé un api key erróneo
<b>And</b> de clic en Ingresar
<b>Then</b> debe mostrar un mensaje de error **"Id de usuario es inválido"**
<b>and</b> no debe ingresar a la aplicación

**Given** que me encuentro en la pantalla de inicio
**When** ingrese un api key valido
**And** de click en Ingresar
**Then** mostrara la pantalla de perfil del usuario con la siguiente información:

-   Nombre y avatar del usuario
-   Total de partidas ganadas,
-   Total de partidas perdidas,
-   Porcentaje de partidas ganadas
-   Foto de los amigos con los que ha jugado
-   Grafico de barras como estadísticas de las partidas
-   Ver mas estadísticas deshabilitado por ahora
-   Avatar, nombre y fecha de cada héroe con el que jugo

# HU002

## Como usuario dotero ya logueado Quiero visualizar el histórico de mis partidas para conocer las ultimas partidas jugadas.

**Given** que me encuentro logueado
**When** doy click en el tab historial
**Then** deberia mostrarme la pantalla Historial de Partidas conteniendo la siguiente información:

-   Nickname del usuario
-   Avatar del usuario
-   Titulo "Historial de partidas"
-   Listado de partidas jugadas conteniendo
    -   Nombre del heroe
    -   Foto del héroe con el que se jugo
    -   La fecha en la que se realizo la partida
    -   Estado de la partida (Ganada,Perdida)
    -   Tipo de la partida (Practicas, clasificatorias, otros)
    -   mostrar las 10 ultimas partidas

# HU003

## Como usuario dotero ya lougeado Quiero conocer sobre la aplicación para entender las caracteristicas de la aplicación

**Given** que me encuentro logueado
**When** doy click en el tab información
**Then** deberia mostrarme la pantalla Información de la aplicación conteniendo la siguiente información:

-   Logo de Dota 2
-   Titulo de la pestaña "Sobre la app"
-   texto descriptivo de la app con el siguiente mensaje :
    -   "Esta aplicación ...."
