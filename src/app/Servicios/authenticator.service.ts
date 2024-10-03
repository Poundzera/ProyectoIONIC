import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  
  connectionStatus: boolean;
  constructor(private storage: StorageService) { 
    this.connectionStatus = false;
  }


  login(username: String, password: String): boolean {
    if(username == "Poundz" && password == "pass1234"){
      this.connectionStatus = true; 
      return true;
    }
    this.connectionStatus = false;
    return false;
  }

  logout(){
    this.connectionStatus = false;
  }

  isConected(){
    return this.connectionStatus;
  }
}
