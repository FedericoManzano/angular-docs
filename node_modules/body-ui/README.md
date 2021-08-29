<p align="center"> 
    <img src="logo/BS2.png" width="200px">
</p>

# Bodystyle UI 

[![Documentación](https://img.shields.io/badge/bodystyle-v3.5.0-<COLOR>.svg)](https://bodystyle.000webhostapp.com)
[![Licencia](https://img.shields.io/badge/MIT-3.5.0-blue.svg)](https://github.com/FedericoManzano/bodystyle/blob/master/LICENCE)
[![show-code](https://img.shields.io/badge/showcode-1.1.1-red.svg)](https://github.com/FedericoManzano/show-code)
[![dynamics-tips](https://img.shields.io/badge/dynamicstips-1.8.0-red.svg)](https://github.com/FedericoManzano/dynamics-tips)
[![show-code](https://img.shields.io/badge/bodystyleiconos-1.1.0-red.svg)](https://github.com/FedericoManzano/bodystyle-iconos)
[![jquery](https://img.shields.io/badge/jquery-3.5.0-yellow.svg)](https://jquery.com/)
[![Npm](https://img.shields.io/badge/NPM-3.5.4-blue.svg)](https://www.npmjs.com/package/body-ui)
[![webpack](https://img.shields.io/badge/webpack-4.43.0-blue.svg)](https://github.com/FedericoManzano/bodystyle/blob/master/webpack.config.js)
[![css-loader](https://img.shields.io/badge/cssloader-3.6.0-blue.svg)](https://github.com/webpack-contrib/css-loader)
[![style-loader](https://img.shields.io/badge/styleloader-1.2.1-blue.svg)](https://github.com/webpack-contrib/style-loader)
[![package](https://img.shields.io/badge/size-3.98MB-purple.svg)](https://www.npmjs.com/package/body-ui)

## Documentación

Para conocer todas las funcionalidades de la librería acudir a su documentación en: 

[https://bodystyle.000webhostapp.com](https://bodystyle.000webhostapp.com)

## Comenzar 

La forma más rápida y sencilla de disponer de la librería es a través del CDN que enlaza con el código de los archivos minificados. 
La forma de utilizar estos enlaces es agregandolos dentro de la etiqueta `<head>...</head>` de nuestro documento html.

### CDN

#### bodystyle.min.css
[https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css](https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css)

#### bodystyle.min.js
[https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js](https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js)

#### Solo la grilla 

Podemos añadir solo la grilla de bodystyle dejando de lado todo lo demas si no lo necesitamos.

[https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/grillaSolo.min.css](https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/grillaSolo.min.css)

#### Solo los utilitarios 

[https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/utilitarios.min.css](https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/utilitarios.min.css)

#### Cabecera
```html
<!DOCTYPE html>
<head>

    <!-- META obligatorio para poder utilizar la libreria -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Link con el CDN de los estilos css  -->
    <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css">

</head>

<!-- Resto de la página -->
```

#### Pie
```html
<script src="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js"></script>
</body>
```

## Plantilla 

Dejamos una plantilla para copiar y pegar para poder cargar la librería con lo que mencionamos antes.

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- META obligatorio para poder utilizar la libreria -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Link con el CDN de los estilos css  -->
        <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css">
    </head>
    <body>
        <h1>Hola Mundo !!! <span class="badge badge-rojo">New</h1>
        <script src="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js"></script>
    </body>
</html>
```


## Descarga 

Podemos disponer de la librería a través de su código fuente, el archivo pre-compilado o instalarla como una dependencia de nuestro proyecto con los gestores de paquetes 
de Node.

### Archivo Precompilado

[bodystyle-v3.5.0-precompilado-master.zip](https://github.com/FedericoManzano/bodystyle-v3.5.0-precompilado/archive/master.zip)


### Archivo Fuente

[bodystyle-master.zip](https://github.com/FedericoManzano/bodystyle/archive/master.zip)

### Node package
Ingresar por el terminal los siguientes comandos para instalar la dependencia de la librería.

#### NPM 
```
npm i body-ui
```

#### Yarn 
```
yarn add body-ui
```

## Dependencias

### Producción 
- [jquery](https://jquery.com/)
- [show-code](https://github.com/FedericoManzano/show-code-v1.1.0-fuente)
- [dynamics-tips](https://github.com/FedericoManzano/dynamics-tips-v1.8.0-fuente)

### Desarrollo 
- [babeljs](https://babeljs.io/)
- [webpack](https://webpack.js.org/) v4.43.0
- [css-loader](https://github.com/webpack-contrib/css-loader/) v3.6.0
- [style-loader](https://github.com/webpack-contrib/style-loader) v1.2.1

## Cambios desde la versión 2.x.x a 3.x.x

- Capacidad deresaltar el código fuente de `html`, `js`, `css`, `java`, `c`.
- Dependencia dynamics-tips para los tooltips, comentarios y dropdown.
- Mejoramiento de las barras de navegación.
- Dropdown refactorizado y depurado respecto versiones anteriores.
- Archivo bodystyle.bundle.js con todos los archivos de estilo y módulos de js en un sólo archivo.
- Se incorporan íconos de fuente para añadirle a los elementos.
 > Se eliminaron las funcionalidades de resaltar el código fuente y se los reemplazó con una dependecia show-code-v1.1.1. 

[show-code](https://github.com/FedericoManzano/show-code)
[dynamics-tips](https://github.com/FedericoManzano/dynamics-tips)

## Licencia

MIT 

bodystyle (c) 2020
