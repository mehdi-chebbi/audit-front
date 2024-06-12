import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../Model/missions'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  private baseUrl = 'http://57.152.73.137:8083/Mission'; // URL de base de ton API

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}/retrieve-all-mission`);
  }

  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }

  createMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(this.baseUrl, mission);
  }

  deleteMission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
