import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { StartComponent } from './pages/start/start.component';
import { PaginasComponent } from './components/paginas/paginas.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescargaComponent } from './pages/descarga/descarga.component';
import { ComponentePrincipalComponent } from './components/componente-principal/componente-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    StartComponent,
    PaginasComponent,
    FooterComponent,
    DescargaComponent,
    ComponentePrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
