import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_MODULES } from './material-imports';
import { COMPONENTS } from './components-imports';
import { ModificarMateriasDialogFormComponent } from './components/admin/materias-admin/modificar-materias-dialog-form/modificar-materias-dialog-form.component';
import { ModificarMesasDialogFormComponent } from './components/admin/mesas-admin/modificar-mesas-dialog-form/modificar-mesas-dialog-form.component';
import { MesasAntiguasAlumnosComponent } from './components/admin/mesas-admin/mesas-antiguas-alumnos/mesas-antiguas-alumnos.component';
import { ProfesoresCardComponent } from './components/admin/profresores-admin/profesores-card/profesores-card.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    ModificarMateriasDialogFormComponent,
    ModificarMesasDialogFormComponent,
    MesasAntiguasAlumnosComponent,
    ProfesoresCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    NoopAnimationsModule,
    MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }