import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicontrollerService {

  apiURL = "http://localhost:8100";
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + "/usuarios");
  }
  
  postUsuario(data: any): Observable<any> {
    return this.http.post(this.apiURL + "/usuarios", data);
  }

  updateUsuario(id: string, data: any): Observable<any> {
    return this.http.put(this.apiURL + "/usuarios/" + id, data);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(this.apiURL + "/usuarios/" + id);
  }
}
