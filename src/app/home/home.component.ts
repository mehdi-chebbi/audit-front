import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    console.log('Nom d\'utilisateur :', this.username);
    console.log('Mot de passe :', this.password);
    // Add login logic here
  }
}
