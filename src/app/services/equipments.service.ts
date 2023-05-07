import { Injectable } from '@angular/core';
import { Equipement} from '../models/equipment';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  private apiserverUrl='http://localhost:8083/equipement';
;
  

  constructor(private http: HttpClient) {}

  getEquipments(): Observable<any> {
    const options = { withCredentials: true };
    return this.http.get('http://localhost:8083/equipement/getequipments')
  }
// first 
public addEquipment(equipement :Equipement): Observable<Equipement>{
  
  return this.http.post<Equipement>(`${this.apiserverUrl}/addequipement`,equipement);
}

public UpdateEquipment(equipmentId:number , equipement :Equipement): Observable<Equipement>{
  return this.http.put<Equipement>(`${this.apiserverUrl}/updatequipment/${equipmentId}`,equipement);
}

public deleteEquipment(equipmentId:number ){
  return this.http.delete<void>("http://localhost:8083/equipement/delequipment/"+equipmentId);
}

public getEquipment(equipmentId:number ): Observable<Equipement>{
  return this.http.get<Equipement>(`${this.apiserverUrl}/getequipment/${equipmentId}`);
}

}
