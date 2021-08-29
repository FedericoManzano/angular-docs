import { AfterViewInit, Component, OnInit } from '@angular/core';


declare var CodigoHtml : any
declare var CodigoCss : any
declare var BS : any

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit, AfterViewInit {

  constructor() { 
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
    BS.AutoInit()
  }


  titulo:string = "Container"
  parrafo:string = `
    Clase para centrar los elementos en la pantalla. A través de media querys 
    se adapta a los diferentes tamaños de pantalla.
  `

  box:string =""

  container:string=""

  ngOnInit(): void {
  }

}
