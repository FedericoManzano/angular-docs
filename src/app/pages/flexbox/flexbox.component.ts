import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InicializarService } from "../../services/inicializar.service"


declare var CodigoHtml : any

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit, AfterViewInit {

  constructor( private iniciar: InicializarService ) { }


  ngAfterViewInit(): void {
    CodigoHtml.iniciar({lineas: false, tipo: "texto"})
    this.iniciar.iniciar()
  }


  titulo:string = "Flexbox"
  parrafo:string = `
  Clases que permiten utilizar una de las las más importantes herramientas de 
  CSS 3 a través de flexbox y todas las variantes que vienen dentro de esta funcionalidad.
  `

  flex:string = `
  <div class="d-flex">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
  </div>
  `

  mostrarToast() {
    this.iniciar.mensaje()
  }



  ngOnInit(): void {
    this.iniciar.scrollSpy()
  }

}
