import { AfterViewInit, Component, OnInit } from '@angular/core';


import { InicializarService } from "../../services/inicializar.service"


declare var CodigoJs : any
@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.scss']
})
export class DescargaComponent implements OnInit, AfterViewInit {

  constructor( private iniciar: InicializarService ) { 
    this.npm = "npm install body-ui --save"
    this.yarn = "yarn add body-ui"
  }
  ngAfterViewInit(): void {
    CodigoJs.iniciar({lineas: false})
    this.iniciar.iniciar()
  }


  npm:string = "";
  yarn:string = "";

  titulo:string = "Bodystyle"
  parrafo:string =  "Librería de estilos CSS para la rápida creación de la interfaz de usuario UI";


  mostrarToast() {
    this.iniciar.mensaje()
  }



  ngOnInit(): void {
    this.iniciar.scrollSpy()

  }

}
