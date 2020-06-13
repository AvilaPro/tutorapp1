import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { EjemploComponent } from "./ejemplo/ejemplo.component";
import { Ex2Component } from "./ex2/ex2.component";
import { TwbindComponent } from "./twbind/twbind.component";
import { EvbindComponent } from "./evbind/evbind.component";
import { DirEstComponent } from "./dir-est/dir-est.component";
import { DirAttComponent } from "./dir-att/dir-att.component";
import { VarRefComponent } from "./var-ref/var-ref.component";
import { DirEstrucComponent } from "./dir-estruc/dir-estruc.component";
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'ex2', component: Ex2Component },
  { path: 'twb', component: TwbindComponent },
  { path: 'evb', component: EvbindComponent },
  { path: 'dre', component: DirEstComponent },
  { path: 'dra', component: DirAttComponent },
  { path: 'vrf', component: VarRefComponent },
  { path: 'des', component: DirEstrucComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
