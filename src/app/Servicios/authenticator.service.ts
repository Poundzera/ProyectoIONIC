import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  
  connectionStatus: boolean;
  constructor(private storage: StorageService) { 
    this.connectionStatus = false;
  }
  loginBDD(usuario: string, password: String): Promise<boolean> {
     return this.storage
      .get(usuario)
      .then((res) => {
        
        if (res.password == password) {
          this.connectionStatus = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log('Error en el sistema: ' + error);
        return false;
      });
  }

  login(username: String, password: String): boolean {
    if(username == "Usuario" && password == "pass1234"){
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
  async registrar(usuario: any):Promise<boolean> {
    return this.storage.set(usuario.username, usuario).then((res) => {
        if (res != null) {
          return true;
        }else{
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }
}
