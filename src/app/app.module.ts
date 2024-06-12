import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'; // Importez le module MatSelectModule
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionsService } from './service/missions.service';
import { MissionsServiceComponent } from './missions-service/missions-service.component';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AxesComponent } from './axes/axes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcceuilComponent,
    LoginComponent,
    NavbarComponent,
    MissionsServiceComponent,
AxesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    
    
    FormsModule,

  ],
  providers: [ MissionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


