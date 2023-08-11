import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MATERIAL_MODULES } from './material-imports';
import { COMPONENTS } from './components-imports';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
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