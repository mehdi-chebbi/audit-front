import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../service/missions.service';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-missions-service',
  templateUrl: './missions-service.component.html',
  styleUrls: ['./missions-service.component.css']
})
export class MissionsServiceComponent implements OnInit {

  constructor(private missionService: MissionsService) { } // Inject the service

  missionForm! : FormGroup;
  ngOnInit(): void {
    this.getAllMissions(); // Example: Call a method from the service on component initialization
  }

  getAllMissions() {
    this.missionService.getAllMissions().subscribe(missions => {
      // Handle the response here
    });
  }

  onSubmit(missionForm : any){

  }
  // Define other methods to interact with the service as needed
}
