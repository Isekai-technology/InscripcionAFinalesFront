import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMesasComponent } from './components/admin-mesas/admin-mesas.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "admin-mesas",
    component: AdminMesasComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
