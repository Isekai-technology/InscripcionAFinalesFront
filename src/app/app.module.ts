import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterCardsComponent } from './components/register-cards/register-cards.component';
import { AdminMesasComponent } from './components/admin-mesas/admin-mesas.component';
import { NavigationComponent } from './components/admin-mesas/navigation/navigation.component';
import { DashboardComponent } from './components/admin-mesas/dashboard/dashboard.component';
import { TableComponent } from './components/admin-mesas/table/table.component';
import { SelectorComponent } from './components/admin-mesas/selector/selector.component';
import { AdminProfesoresComponent } from './components/admin-profesores/admin-profesores.component';
import { AdminMateriasComponent } from './components/admin-materias/admin-materias.component';
import { AlumnosNavigationComponent } from './components/admin-alumnos/alumnos-navigation/alumnos-navigation.component';
import { AlumnosDashboardComponent } from './components/admin-alumnos/alumnos-dashboard/alumnos-dashboard.component';
import { AdminAlumnosComponent } from './components/admin-alumnos/admin-alumnos.component';
import { ProfesoresDashboardComponent } from './components/admin-profesores/profesores-dashboard/profesores-dashboard.component';
import { ProfesoresNavigationComponent } from './components/admin-profesores/profesores-navigation/profesores-navigation.component';
import { MateriasNavigationComponent } from './components/admin-materias/materias-navigation/materias-navigation.component';
import { MateriasDashboardComponent } from './components/admin-materias/materias-dashboard/materias-dashboard.component';
import { AlumnosTableComponent } from './components/admin-alumnos/alumnos-table/alumnos-table.component';
import { ProfesoresTableComponent } from './components/admin-profesores/profesores-table/profesores-table.component';
import { MateriasTreeComponent } from './components/admin-materias/materias-tree/materias-tree.component';
import { MatTreeModule } from '@angular/material/tree';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterCardsComponent,
    HomeToolbarComponent,
    AdminMesasComponent,
    NavigationComponent,
    DashboardComponent,
    TableComponent,
    SelectorComponent,
    HomeComponent,
    AdminProfesoresComponent,
    AdminMateriasComponent,
    AlumnosNavigationComponent,
    AlumnosDashboardComponent,
    AdminAlumnosComponent,
    ProfesoresDashboardComponent,
    ProfesoresNavigationComponent,
    MateriasNavigationComponent,
    MateriasDashboardComponent,
    AlumnosTableComponent,
    ProfesoresTableComponent,
    MateriasTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }