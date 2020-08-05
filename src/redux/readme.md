#`/redux`

La carpeta `redux` organiza la forma en al que se gestionara el estado global de la aplciaición y la forma en la cual se organizaran los archivos para la implementación y uso de redux.

Es recomendable que por cada container se cree una folder , el cual debe contener

```
 ./[name]
    ├── useTheme.actions.js
    ├── useAnalytics.epics.js
    ├── useAnalytics.state.js
    └── userFriendStatus.reducer.js
```

Si el contenido de epics es demasiado grande se recomienda crear subcarpetas

```javascript
 ./[name]
    ├── [name-feature-01]
    │   ├── [name-feature-01].actions.js
    │   ├── [name-feature-01].epics.js
    │   ├── [name-feature-01].reducer.js
    │   └──[name-feature-01].state.js
    ├── [name].actions.js
    ├── [name].epics.js
    ├── [name].state.js
    └── [name].reducer.js
```
