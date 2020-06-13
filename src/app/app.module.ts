import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { StyTsComponent } from './sty-ts/sty-ts.component';
import { Ex2Component } from './ex2/ex2.component';
import { TwbindComponent } from './twbind/twbind.component';
import { EvbindComponent } from './evbind/evbind.component';
import { DirEstComponent } from './dir-est/dir-est.component';
import { DirAttComponent } from './dir-att/dir-att.component';
import { VarRefComponent } from './var-ref/var-ref.component';
import { DirEstrucComponent } from './dir-estruc/dir-estruc.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    StyTsComponent,
    Ex2Component,
    TwbindComponent,
    EvbindComponent,
    DirEstComponent,
    DirAttComponent,
    VarRefComponent,
    DirEstrucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
