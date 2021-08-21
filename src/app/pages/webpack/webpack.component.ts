import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var CodigoJs : any
@Component({
  selector: 'app-webpack',
  templateUrl: './webpack.component.html',
  styleUrls: ['./webpack.component.scss']
})


export class WebpackComponent implements OnInit, AfterViewInit {

  constructor() {
    this.titulo = "webpack"
    this.parrafo = "Forma de agregar módulos de la librería en JS."
    this.react = `
    import Modulo from 'body-ui/src/moduls/Modulo'
    /**
     * Modulo representa cualquier modulo de JS perteneciente a la librería
     * /
    `

    this.ejemplo = `
    import Tips from "body-ui/src/moduls/Tips"
    /**
     * Dependiendo la librería podemos utilizar 
     * algún metodo de el ciclo de vida del componente 
     * para iniicializar el modulo importado.
     * /
     
    // Metodo inicio
    //...
    Tips.init()
    `

    this.angular = `
    ....
    "scripts": [
      "node_modules/show-sintax/src/modulos/CodigoHtml.js",
      "node_modules/show-sintax/src/modulos/CodigoJs.js",
      "node_modules/dynamics-tips/src/Dynamics.js"
    ]
    ....
    `
  this.dec = `
  import { AfterViewInit, Component, OnInit } from '@angular/core';

  // Modulo cargado
  declare var CodigoJs : any

  // Decorador principar de la clase  
  @Component({
    selector: 'nombre-selector',
    templateUrl: './nombre-selector.component.html',
    styleUrls: ['./nombre-selector.component.scss']
  })

  // en el método de AfterViewInit se inicializa el modulo
  export class ClaseAngular implements OnInit, AfterViewInit {}

  `

  }
  ngAfterViewInit(): void {
    CodigoJs.iniciar({lineas: false})
  }



  titulo:string= ""
  parrafo:string= ""


  react:string=""
  ejemplo:string = ""
  angular:string = ""
  dec:string = ""
  ngOnInit(): void {
  }

}
