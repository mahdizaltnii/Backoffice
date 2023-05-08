import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointementsService {

  constructor(private http: HttpClient) { }

  getRendezVous() {
    return this.http.get('http://localhost:8083/rendezvous')
  }

  postRendezVous(data: any) {
    return this.http.post('http://localhost:8083/rendezvous', data)
  }

  editRendezVous(data: any) {
    return this.http.put('http://localhost:8083/rendezvous', data)
  }

  deleteRendezVous(id: any) {
    return this.http.delete('http://localhost:8083/rendezvous/' + id)
  }
}
