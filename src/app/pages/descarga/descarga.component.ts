import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var CodigoJs : any
@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.scss']
})
export class DescargaComponent implements OnInit, AfterViewInit {

  constructor() { 
    this.npm = "npm install body-ui --save"
    this.yarn = "yarn add body-ui"
  }
  ngAfterViewInit(): void {
    CodigoJs.iniciar({lineas: false})
  }


  npm:string = "";
  yarn:string = "";

  titulo:string = "Bodystyle"
  parrafo:string =  "Librería de estilos CSS para la rápida creación de la interfaz de usuario UI";


  ngOnInit(): void {



  }

}
