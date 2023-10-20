import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_MODULES } from './imports/material-imports';
import { COMPONENTS } from './imports/components-imports';

import { SERVICIOS } from "./imports/services-imports";
import { RegCardsSubjectComponent } from './components/home/content-register/reg-cards-subject/reg-cards-subject.component';

import { ModificarPlanesDialogFormComponent } from './components/admin/planes-admin/modificar-planes-dialog-form/modificar-planes-dialog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    RegCardsSubjectComponent,
    ModificarPlanesDialogFormComponent,
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
    HttpClientModule,  
  ],
  providers: [SERVICIOS],
  bootstrap: [AppComponent]
})
export class AppModule { }