import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { InicializarService } from "../../services/inicializar.service"

declare var CodigoHtml : any


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, AfterViewInit {

  constructor( private iniciar: InicializarService ) { 
    this.cabecera = `
    <!-- Meta viewport necesario para poder utilizar resposive en la página -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <!-- Link con el CDN de los estilos css  -->
    <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css">   
    `

    this.footer = `
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js"></script>
    `

    this.plantilla = `
    <!DOCTYPE html>
    <html>
        <head>
            <!-- META obligatorio para poder utilizar la libreria -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- Link con el CDN de los estilos css  -->
            <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/css/bodystyle.min.css">
        </head>
        <body>

            <!-- Pagina contenido -->
            <h1>Hola Mundo !!! <span class="badge badge-rojo">New</h1>


            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://rawcdn.githack.com/FedericoManzano/bodystyle/58a25e885718d0b2db6675c502ce6a41a45f373c/dist/js/bodystyle.min.js"></script>
        </body>
    </html>

    `
  }
 
  ngAfterViewInit(): void {
    CodigoHtml.iniciar({lineas: false, tipo: "texto"})
    this.iniciar.iniciar()
  }
  cabecera:string = ""
  footer:string = ""
  plantilla:string = ""

  titulo:string = "Bodystyle"
  parrafo:string =  "Librería de estilos CSS para la rápida creación de la interfaz de usuario UI";


  mostrarToast() {
    this.iniciar.mensaje()
  }



  ngOnInit(): void {
    this.iniciar.scrollSpy()

  }

}
