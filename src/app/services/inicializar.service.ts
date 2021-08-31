import { Injectable } from '@angular/core';
import * as $ from "jquery"
import Toast from "./Toast"
import ScrollSpy from "./ScrollSpy"

@Injectable({
  providedIn: 'root'
})
export class InicializarService {

  constructor() { }


  iniciar() {
    $("h1, h2, h3, h4").on("mouseenter", (e) => {
      $(e.target).append(" ")
      $(e.target).append("<span class='bs-label'>&nbsp&nbsp</span>")


      $(".bs-label").css("font-size", "70%")
      $(".bs-label").css("cursor", "pointer")
      $(".bs-label").css("color", "#8FFFE4")

      $(e.target).children("span").on("click", (e) => {
        var h = $(e.target).offset()?.top
        console.log(h)
        if(h !== null)
          $(window).scrollTop(h !== undefined ? h -20 : 0) 
      })
    })
    $("h1, h2, h3, h4").on("mouseleave", (e) => {
      $(".bs-label").remove()
      
    })
    
  }

  mensaje () {
    Toast.show({html: "Copiado !! <span class='bs-ok'></span>", bg: "green"})
  }

  scrollSpy () {
    ScrollSpy.init()
  }

  



}
