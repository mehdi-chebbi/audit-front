import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MissionsServiceComponent } from './missions-service/missions-service.component'; // Importez le composant MissionsServiceComponent
import { AxesComponent } from './axes/axes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'missions-service', component: MissionsServiceComponent },
  { path: 'Axes', component: AxesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
