import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";


@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.scss']
})
export class ComponentePrincipalComponent implements OnInit {

  constructor() { }

  @Input( "titulo" ) titulo:string = "";
  @Input( "parrafo" ) parrafo: string = "";


  ngOnInit(): void {
  }

}
