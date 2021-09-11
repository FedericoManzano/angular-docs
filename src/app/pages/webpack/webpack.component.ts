import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InicializarService } from "../../services/inicializar.service"



declare var CodigoJs : any



@Component({
  selector: 'app-webpack',
  templateUrl: './webpack.component.html',
  styleUrls: ['./webpack.component.scss']
})


export class WebpackComponent implements OnInit, AfterViewInit {

  constructor(private iniciar: InicializarService) {
    this.titulo = "Webpack"
    this.parrafo = `Forma de agregar módulos de la librería en JS. En determinados proyectos que
    que trabajamos con webpack y podemos modularizar el código de JS, debemos importar los módulos de manera 
    individual.`
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
    this.iniciar.iniciar()
  }



  titulo:string= ""
  parrafo:string= ""


  react:string=""
  ejemplo:string = ""
  angular:string = ""
  dec:string = ""
  mostrarToast() {
    this.iniciar.mensaje()
  }



  ngOnInit(): void {
    this.iniciar.scrollSpy()

  }

}
