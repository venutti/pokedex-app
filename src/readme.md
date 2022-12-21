# POKEDEX

Este repositorio se hizo para empezar a usar las librerias _react-bootstrap_, _axios_ y _node-sass_.

## node-sass

Se necesita instalar esta extensión para poder estilizar los componentes de Bootstrap, sin tener que correr un **sass --watch** o algo por el estilo.

`npm install node-sass`

¡Y cada vez que se compile webpack, también lo hará Sass!

## react-bootstrap

Se usa para poder trabajar con componentes en vez de andar escribiendo muchas clases. Para ver más ventajas de esta librería, revisar [este link](https://react-bootstrap.github.io/getting-started/why-react-bootstrap/).

Se necesita incluir la hoja de estilos de Bootstrap para que se renderice correctamente, y la manera de hacerlo para luego poder customizar es tener un archivo **custom.scss** con lo siguiente (previamente habiendo instalado Bootstrap):

`npm install bootstrap`

```
/* en custom.scss */

// customizaciones
$primary: tomato;

// loading de Bootstrap
@import "~bootstrap/scss/bootstrap.scss"
```

Y luego se necesita importar `custom.scss` en nuestro archivo **index.js**.
