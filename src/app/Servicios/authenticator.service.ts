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
  loginBDD(usuario: String, pass:String):boolean {
    this.storage.get(usuario).then(res) =>{
      if(res.password == pass){
        this.connectionStatus=true;
        return true;
      }else{
        return false;
      }
    }.catch(error)=>{
      console.log("Error en el sistema: "+error);
    };
    return this.connectionStatus;
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

  registrar(usuario:any){
    this.storage.set(this.usuario.username,usuario);
  }
}
