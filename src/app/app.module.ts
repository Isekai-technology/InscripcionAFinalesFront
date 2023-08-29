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
import { CardsDataComponent } from './components/home/content-register/cards-data/cards-data.component';
import { PlanesAdminComponent } from './components/admin/planes-admin/planes-admin.component';
import { TablaPlanesComponent } from './components/admin/planes-admin/tabla-planes/tabla-planes.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    CardsDataComponent,
    PlanesAdminComponent,
    TablaPlanesComponent,

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