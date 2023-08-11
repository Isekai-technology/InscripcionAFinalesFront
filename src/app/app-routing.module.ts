import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminComponent } from './components/admin/admin.component';
import { AlumnosAdminComponent } from './components/admin/alumnos-admin/alumnos-admin.component';
import { MateriasAdminComponent } from './components/admin/materias-admin/materias-admin.component';
import { MesasAdminComponent } from './components/admin/mesas-admin/mesas-admin.component';
import { ProfresoresAdminComponent } from './components/admin/profresores-admin/profresores-admin.component';


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
      { path: '', pathMatch: 'full', redirectTo: 'alumnos' },
      { path: 'alumnos', component: AlumnosAdminComponent },
      { path: 'materias', component: MateriasAdminComponent },
      { path: 'profesores', component: ProfresoresAdminComponent },
      { path: 'mesas', component: MesasAdminComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }