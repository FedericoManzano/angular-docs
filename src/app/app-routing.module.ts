import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './pages/contenedor/contenedor.component';
import { DescargaComponent } from './pages/descarga/descarga.component';
import { FlexboxComponent } from './pages/flexbox/flexbox.component';
import { GrillaComponent } from './pages/grilla/grilla.component';
import { StartComponent } from './pages/start/start.component';
import { WebpackComponent } from './pages/webpack/webpack.component';

const routes: Routes = [
  {component: StartComponent, path: ""},
  {component: StartComponent, path: "GetStarted"},
  {component: StartComponent, path: "getstarted"},
  {component: DescargaComponent, path: "descarga"},
  {component: WebpackComponent, path: "webpack"},
  {component: ContenedorComponent, path: "contenedor"},
  {component: FlexboxComponent, path: "flexbox"},
  {component: GrillaComponent, path: "grilla"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
