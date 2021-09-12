import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InicializarService } from "../../services/inicializar.service"

declare var BS : any

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit, AfterViewInit {

  constructor( private iniciar: InicializarService ) { 
    this.container = `
    <div class="container">
      <div class="box">Caja</div>
    </div>
    `

    this.box = `
    /* Clase Box*/
    .box {
      padding: 10px;
      background-color: black;
      color: white;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    `
  }
  ngAfterViewInit(): void {
    //CodigoHtml.iniciar({lineas: false, tipo: "texto"})
    BS.CssInit({lineas: false})
    BS.HtmlInit({lineas: false, tipo: "texto"})
    this.iniciar.iniciar()

  }


  titulo:string = "Container"
  parrafo:string = `
    Clase para centrar los elementos en la pantalla. A través de media querys 
    se adapta a los diferentes tamaños de pantalla.
  `

  box:string =""

  container:string=""

  mostrarToast() {
    this.iniciar.mensaje()
  }



  ngOnInit(): void {
    this.iniciar.scrollSpy()

  }

}
