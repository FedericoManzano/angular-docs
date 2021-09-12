import { Component, OnInit } from '@angular/core';
import { InicializarService } from "../../services/inicializar.service"
declare var CodigoJs : any

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

  constructor( private iniciar: InicializarService ) { }

  ngOnInit(): void {
  }

}
