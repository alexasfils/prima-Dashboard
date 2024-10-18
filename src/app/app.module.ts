import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        Pagina1Component,
        Pagina2Component,
        Pagina3Component
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap:[AppComponent]
})

export class AppModule { }