import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargaComponent } from './pages/descarga/descarga.component';
import { StartComponent } from './pages/start/start.component';
import { WebpackComponent } from './pages/webpack/webpack.component';

const routes: Routes = [
  {component: StartComponent, path: ""},
  {component: StartComponent, path: "GetStarted"},
  {component: StartComponent, path: "getstarted"},
  {component: DescargaComponent, path: "descarga"},
  {component: WebpackComponent, path: "webpack"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
