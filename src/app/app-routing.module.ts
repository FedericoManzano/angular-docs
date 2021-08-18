import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {component: StartComponent, path: ""},
  {component: StartComponent, path: "GetStarted"},
  {component: StartComponent, path: "getstarted"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
