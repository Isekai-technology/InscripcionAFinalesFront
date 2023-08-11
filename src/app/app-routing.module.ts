import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminProfesoresComponent } from './components/admin-profesores/admin-profesores.component';
import { AdminMateriasComponent } from './components/admin-materias/admin-materias.component';
import { AdminComponent } from './components/admin/admin.component';
import { AlumnosTableComponent } from './components/admin/alumnos-admin/alumnos-table/alumnos-table.component';
import { AlumnosAdminComponent } from './components/admin/alumnos-admin/alumnos-admin.component';


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
    path: "admin",
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full'},
      { path: 'alumnos', component: AlumnosAdminComponent },
    ]
  },

  {
    path: "alumnos",
    component: AlumnosTableComponent
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