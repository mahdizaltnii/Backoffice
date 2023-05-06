import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointementsService {

  constructor( private http : HttpClient) { }

  getRendezVous(){
    return this.http.get('http://localhost:8083/rendezvous')
  }
}
