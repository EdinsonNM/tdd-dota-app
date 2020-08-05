#`/components`

La carpeta `components` contiene componentes react globales a la aplicación. Cada componente contiene la siguiente estructura

```
     .
    ├── ...
    ├── components
    │   ├── [mycomponent]
    │   │   ├── index.jsx
    │   │   └── styles.scss
    │   └── ...
    └── ...

```

El archivo `index.jsx` debe contener la siguiente estructura:

```javascript
import React from "react";

export default function MyComponent() {
    return (
        <div className="component_mycomponent">
            <div className="component_mycomponent__title">Hello World</div>
            <div className="component_mycomponent__description">description...</div>
        </div>
    );
}
```

El archivo `style.scss` debe respetar la nomenclatura BEM y el nombre de la clase principal debe contener el prefijo `component_`seguido del nombre del componente. Ejemplo:

```scss
.component_mycomponent {
    &__title {
        color: red;
    }
    &__description {
        color: green;
    }
}
```
