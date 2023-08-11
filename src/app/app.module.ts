import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MATERIAL_MODULES } from './material-imports';
import { COMPONENTS } from './components-imports';
import { MesasAdminComponent } from './components/admin/mesas-admin/mesas-admin.component';
import { TablaMesasComponent } from './components/admin/mesas-admin/tabla-mesas/tabla-mesas.component';
import { CargarMesasComponent } from './components/admin/mesas-admin/cargar-mesas/cargar-mesas.component';
import { ProfresoresAdminComponent } from './components/admin/profresores-admin/profresores-admin.component';
import { TablaProfesoresComponent } from './components/admin/profresores-admin/tabla-profesores/tabla-profesores.component';
import { CargarProfesoresComponent } from './components/admin/profresores-admin/cargar-profesores/cargar-profesores.component';


@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    MesasAdminComponent,
    TablaMesasComponent,
    CargarMesasComponent,
    ProfresoresAdminComponent,
    TablaProfesoresComponent,
    CargarProfesoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }