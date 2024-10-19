import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate:[AuthGuard], children: [
            {path: '', pathMatch: 'full', redirectTo: 'pagina1'},
            {path:'pagina1', component: Pagina1Component},
            {path:'pagina2', component: Pagina2Component},
            {path:'pagina3', component: Pagina3Component}
    ]},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }