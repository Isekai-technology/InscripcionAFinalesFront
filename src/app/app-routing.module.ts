import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminMesasComponent } from './components/admin-mesas/admin-mesas.component';
import { AdminAlumnosComponent } from './components/admin-alumnos/admin-alumnos.component';
import { AdminProfesoresComponent } from './components/admin-profesores/admin-profesores.component';
import { AdminMateriasComponent } from './components/admin-materias/admin-materias.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  }, 
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "admin-mesas",
    component: AdminMesasComponent 
  },

  {
    path: "admin-alumnos",
    component: AdminAlumnosComponent 
  },

  {
    path: "admin-profesores",
    component: AdminProfesoresComponent 
  },

  {
    path: "admin-materias",
    component: AdminMateriasComponent 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }