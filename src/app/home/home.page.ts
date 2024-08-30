import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

    usuario = {
      username :"",
      password :"",
    }
    mensaje ="";

    validar() {
      if (this.usuario.username.length >= 3) {
        if (this.usuario.password.length == 4){
          let navigationExtras: NavigationExtras = {
            state: {
              username: this.usuario.username,
              password: this.usuario.password,
            },
          };
         // this.router.navigate (['/inicio'],navigationExtras);
        }else{
          console.log('Contraseña incorrecta');
          this.mensaje = 'Contraseña no cumple';
        }
      
      }else{
        console.log('Usuario incorrecto');
        this.mensaje = 'Usuario no cumple';
      }
    }

}
